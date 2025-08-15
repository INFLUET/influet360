// pages/api/bookings.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("bookings");

  if (req.method === "GET") {
    try {
      const bookings = await collection.find().toArray();
      return res.status(200).json(bookings);
    } catch (error) {
      console.error("❌ GET error:", error);
      return res.status(500).json({ error: "Failed to fetch bookings" });
    }
  }

  // if (req.method === "POST") {
  //   try {
  //     const { name, phone, email, verified } = req.body;

  //     if (!name || !phone || !email) {
  //       return res.status(400).json({ error: "Missing fields" });
  //     }

  //     const newBooking = {
  //       name,
  //       phone,
  //       email,
  //       verified: verified || false,
  //       bookedAt: new Date(),
  //     };

  //     await collection.insertOne(newBooking);
  //     return res.status(200).json({ success: true });
  //   } catch (error) {
  //     console.error("❌ POST error:", error);
  //     return res.status(500).json({ error: "Booking failed" });
  //   }
  // }


  
  if (req.method === "POST") {
  try {
    const { name, phone, email, verified } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newBooking = {
      name,
      phone,
      email,
      verified: verified || false, // ✅ Ensure default is false if not passed
      bookedAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(newBooking);

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to save booking" });
  }
}

  // If not GET or POST
  return res.status(405).json({ error: "Method not allowed" });
}

