import { useState } from "react";

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
    otp: "",
  });

  const [step, setStep] = useState("form"); // form → otp
  const [msg, setMsg] = useState("");
  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const sendOTP = async () => {
    if (!booking.name || !booking.phone || !booking.email) {
      setMsg("❌ Please fill all fields");
      return;
    }

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
    }
  };

  const verifyOTP = async () => {
    if (!booking.otp) {
      setMsg("❌ Please enter the OTP");
      return;
    }

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
      setMsg("❌ Verification failed");
    }
  };

  const handleSubmit = async () => {
    if (!verified) {
      setMsg("❌ Please verify OTP first.");
      return;
    }

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: booking.name,
          phone: booking.phone,
          email: booking.email,
          verified: true,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg("🎉 Booking submitted successfully!");

        setTimeout(() => {
          setShow(false);
          setBooking({ name: "", phone: "", email: "", otp: "" });
          setStep("form");
          setVerified(false);
          setMsg("");
        }, 2000);
      } else {
        setMsg("❌ Booking failed: " + data.error);
      }
    } catch (err) {
      setMsg("❌ Something went wrong.");
    }
  };

  return (
    <>
      <button
        className="btn yellow-btn"
        onClick={() => {
          setBooking({ name: "", phone: "", email: "", otp: "" });
          setStep("form");
          setVerified(false);
          setMsg("");
          setShow(true);
        }}
      >
        Book Free Demo
      </button>

      {show && (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.6)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="form-container"
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
              maxWidth: "400px",
              width: "90%",
              position: "relative",
            }}
          >
            <span
              className="close-btn"
              onClick={() => setShow(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "14px",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              &times;
            </span>

            <h2>Get Free Demo</h2>

            {step === "form" && (
              <>
                <input
                  name="name"
                  value={booking.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                <input
                  name="phone"
                  value={booking.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
                <input
                  name="email"
                  value={booking.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <button className="otp-btn" onClick={sendOTP}>
                  Send OTP
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <input
                  name="otp"
                  value={booking.otp}
                  onChange={(e) => {
                    setBooking({ ...booking, otp: e.target.value });
                    setMsg("");
                    setVerified(false);
                  }}
                  placeholder="Enter OTP"
                  required
                />
                <button className="verify-btn" onClick={verifyOTP}>
                  Verify OTP
                </button>
              </>
            )}

            {!verified && step === "otp" && (
              <p style={{ color: "orange", fontSize: "14px" }}>
                Please verify OTP before submitting.
              </p>
            )}

            {verified && (
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            )}

            {msg && (
              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: msg.startsWith("✅") || msg.startsWith("🎉")
                    ? "green"
                    : "red",
                }}
              >
                {msg}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}