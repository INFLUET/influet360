import { useState } from "react";
import ReactDOM from "react-dom";

export default function PackagePopupForm({ packageName }) {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState("form");
  const [msg, setMsg] = useState("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
    otp: "",
    package: packageName,
  });

  const sendOTP = async () => {
    setLoading(true);
    setMsg("Sending OTP...");

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: booking.name,
          phone: booking.phone,
          email: booking.email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg("✅ OTP sent to your email!");
        setStep("otp");
      } else {
        setMsg("❌ " + data.error);
      }
    } catch (err) {
      setMsg("❌ Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!booking.otp) {
      setMsg("❌ Please enter the OTP");
      return;
    }

    setLoading(true);
    setMsg("Verifying...");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: booking.email,
          otp: booking.otp,
        }),
      });

      const data = await res.json();

      if (data.verified) {
        setVerified(true);
        setMsg("✅ OTP verified! You can now submit.");
      } else {
        setVerified(false);
        setMsg("❌ Invalid OTP. Please try again.");
      }
    } catch (err) {
      setMsg("❌ Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMsg("Submitting...");

    try {
      const res = await fetch("/api/package-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ ...booking, verified: true }),
        body: JSON.stringify({ ...booking, verified: true, isPackage: true }),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg("🎉 Seat booked successfully!");
        setTimeout(() => {
          setShow(false);
          setBooking({
            name: "",
            phone: "",
            email: "",
            otp: "",
            package: packageName,
          });
          setStep("form");
          setVerified(false);
          setMsg("");
        }, 2000);
      } else {
        setMsg("❌ Booking failed: " + data.error);
      }
    } catch (err) {
      setMsg("❌ Booking error");
    } finally {
      setLoading(false);
    }
  };

  const popupContent = (
    <div className="overlay">
      <div className="form-container">
        <span className="close-btn" onClick={() => setShow(false)}>
          &times;
        </span>
        <h2>Enroll in {packageName}</h2>

        {step === "form" && (
          <>
            <input
              name="name"
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
              placeholder="Name"
            />
            <input
              name="phone"
              value={booking.phone}
              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
              placeholder="Phone"
            />
            <input
              name="email"
              value={booking.email}
              onChange={(e) => setBooking({ ...booking, email: e.target.value })}
              placeholder="Email"
            />
            <input name="package" value={booking.package} readOnly />
            <button onClick={sendOTP} disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <input
              name="otp"
              value={booking.otp}
              onChange={(e) => setBooking({ ...booking, otp: e.target.value })}
              placeholder="Enter OTP"
            />
            <button onClick={verifyOTP} disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button onClick={sendOTP} disabled={loading} style={{ background: "#666", marginTop: "10px" }}>
              Resend OTP
            </button>
          </>
        )}

        {verified && (
          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        )}

        {msg && <p>{msg}</p>}
      </div>
    </div>
  );

  return (
    <>
      <button className="enroll-btn" onClick={() => setShow(true)}>
        Enroll Now
      </button>
      {show && typeof window !== "undefined" &&
        ReactDOM.createPortal(popupContent, document.body)}
    </>
  );
}
