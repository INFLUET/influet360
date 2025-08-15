import nodemailer from "nodemailer";
import clientPromise from "@/lib/mongodb"; // use your existing mongodb.js

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 3 * 60 * 1000); // 3 minutes expiry

  const client = await clientPromise;
  const db = client.db();

  await db.collection("otps").insertOne({ email, otp, expiresAt });

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
      subject: "Your OTP Code",
      text: `Hello ${name}, your OTP is ${otp}. It expires in 3 minutes.`,
    });

    return res.status(200).json({ success: true, message: "OTP sent" });
  } catch (err) {
    console.error("Email sending failed:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
