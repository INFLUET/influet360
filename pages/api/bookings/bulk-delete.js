// import { connectToDatabase } from "@/lib/mongodb";
// import { ObjectId } from "mongodb";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { ids } = req.body;
//   console.log("Received IDs:", ids);  //new

//   if (!Array.isArray(ids) || ids.length === 0) {
//     return res.status(400).json({ error: "No IDs provided" });
//   }

//   try {
//     const { db } = await connectToDatabase();
//     const objectIds = ids.map((id) => new ObjectId(id));

//     console.log("Object IDs to delete:", objectIds); //new

//     const result = await db
//       .collection("bookings")
//       .deleteMany({ _id: { $in: objectIds } });

//       console.log("Delete result:", result); //new

//     return res.status(200).json({ success: true, deleted: result.deletedCount });
//   } catch (err) {
//     console.error("Deletion error:", err);
//     return res.status(500).json({ error: "Failed to delete bookings" });
//   }
// }



import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { ids } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db(); // Use the default DB or pass your DB name like db("your-db-name")
      const collection = db.collection("bookings");

      const objectIds = ids.map((id) => new ObjectId(id));

      const result = await collection.deleteMany({ _id: { $in: objectIds } });

      res.status(200).json({ message: "Deleted successfully", result });
    } catch (error) {
      console.error("Deletion error:", error);
      res.status(500).json({ message: "Error deleting data", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}