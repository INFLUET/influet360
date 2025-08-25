import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, otp } = req.body;

  const client = await clientPromise;
  const db = client.db();

  // 🔥 Fetch the latest OTP record
  const record = await db
    .collection("otps")
    .findOne({ email }, { sort: { createdAt: -1 } });

  if (!record) {
    return res.status(400).json({ verified: false, error: "OTP not found" });
  }

  const now = new Date();

  // Compare safely as strings
  if (String(record.otp).trim() !== String(otp).trim()) {
    return res.status(400).json({ verified: false, error: "Invalid OTP" });
  }

  if (record.expiresAt < now) {
    return res.status(400).json({ verified: false, error: "OTP expired" });
  }

  // ✅ Remove OTP after successful verification
  await db.collection("otps").deleteOne({ email });

  return res.status(200).json({ verified: true });
}