import { useState } from "react";

const Appointments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const submitAppointment = async (e) => {
    e.preventDefault();
    setSuccess("");

    try {
      const res = await fetch(
        "https://vital-vibes-backend.onrender.com/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, date, message })
        }
      );

      if (!res.ok) throw new Error();

      setName("");
      setEmail("");
      setDate("");
      setMessage("");
      setSuccess("✅ Appointment submitted successfully!");
    } catch {
      setSuccess("❌ Failed to submit appointment");
    }
  };

  return (
    <div className="appointment">
      <form className="appointment-form" onSubmit={submitAppointment}>
        <h2>Book Appointment</h2>

        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Submit</button>

        {success && <p>{success}</p>}
      </form>
    </div>
  );
};

export default Appointments;
