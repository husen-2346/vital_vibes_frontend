import { useState } from "react";

const Appointments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitAppointment = async (e) => {
    e.preventDefault();
    console.log("🔥 SUBMIT CLICKED");

    try {
      const res = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          date,
          message
        })
      });

      console.log("🔥 RESPONSE STATUS:", res.status);
      await res.json();

      setSubmitted(true);
      setName("");
      setEmail("");
      setDate("");
      setMessage("");
    } catch (err) {
      console.error("❌ FETCH ERROR:", err);
    }
  };

  return (
    <div className="appointment">
      {!submitted && (
        <form className="appointment-form" onSubmit={submitAppointment}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Book Appointment</button>
        </form>
      )}

      {submitted && (
        <div className="confirmation-message">
          <h3>✅ Appointment Submitted</h3>
          <p>We will contact you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Appointments;
