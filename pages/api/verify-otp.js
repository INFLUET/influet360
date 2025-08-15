import clientPromise from "@/lib/mongodb"; // again using your file

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, otp } = req.body;

  const client = await clientPromise;
  const db = client.db();

  const record = await db.collection("otps").findOne({ email });

  if (!record) {
    return res.status(400).json({ verified: false, error: "OTP not found" });
  }

  const now = new Date();

  if (record.otp !== otp) {
    return res.status(400).json({ verified: false, error: "Invalid OTP" });
  }

  if (record.expiresAt < now) {
    return res.status(400).json({ verified: false, error: "OTP expired" });
  }

  await db.collection("otps").deleteOne({ email });

  return res.status(200).json({ verified: true });
}
