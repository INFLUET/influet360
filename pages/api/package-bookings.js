import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("packageBookings");

  if (req.method === "POST") {
    try {
      const { name, phone, email, package: packageName, verified } = req.body;

      const result = await collection.insertOne({
        name,
        phone,
        email,
        package: packageName,
        verified,
        bookedAt: new Date(),
      });

      return res.status(201).json({ success: true, result });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  if (req.method === "GET") {
    try {
      const bookings = await collection.find({}).sort({ bookedAt: -1 }).toArray();
      return res.status(200).json(bookings); // ✅ Return plain array for frontend
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch package bookings" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
