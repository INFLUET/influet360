import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const client = await clientPromise;
  const db = client.db();

  // Get latest OTP for this email
  const existing = await db
    .collection("otps")
    .findOne({ email }, { sort: { createdAt: -1 } });

  const now = new Date();

  // ⛔ If you want to block resend until OTP expires:
  if (existing && existing.expiresAt > now) {
    return res.status(400).json({
      success: false,
      message: "OTP is still valid. Please wait until it expires before resending.",
    });
  }

  // Generate new OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 3 * 60 * 1000); // 3 min expiry

  // Save new OTP
  await db.collection("otps").updateOne(
    { email },
    {
      $set: {
        otp: String(otp),
        expiresAt,
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your New OTP Code",
      text: `Hello ${name || ""}, your new OTP is ${otp}. It expires in 3 minutes.`,
    });

    return res.status(200).json({
      success: true,
      message: "New OTP sent successfully",
    });
  } catch (err) {
    console.error("Email sending failed:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}