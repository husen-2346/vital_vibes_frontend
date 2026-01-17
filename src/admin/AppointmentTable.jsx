import { useState } from "react";

const Appointments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const submitAppointment = async (e) => {
    e.preventDefault();
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://vital-vibes-backend.onrender.com/appointments",
        {
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
        }
      );

      if (!res.ok) {
        throw new Error("Failed to submit appointment");
      }

      // ✅ success
      setName("");
      setEmail("");
      setDate("");
      setMessage("");
      setSuccess("✅ Appointment submitted successfully!");
    } catch (err) {
      console.error(err);
      setSuccess("❌ Failed to submit appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment">
      <form className="appointment-form" onSubmit={submitAppointment}>
        <h2>Book an Appointment</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Book Appointment"}
        </button>

        {success && <p className="appointment-message">{success}</p>}
      </form>
    </div>
  );
};

export default Appointments;
