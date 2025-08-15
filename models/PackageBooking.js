import mongoose from "mongoose";

const PackageBookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  otp: String,
  package: String,
  verified: Boolean,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.PackageBooking ||
  mongoose.model("PackageBooking", PackageBookingSchema);
