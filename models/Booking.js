import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  otp: String,
  otpCreatedAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
