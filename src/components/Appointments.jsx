import { useState } from "react";



const Appointments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const submitAppointment = async (e) => {
    e.preventDefault();
    console.log("🔥 FRONTEND SUBMIT CLICKED");

    await fetch("http://localhost:5000/appointments", {
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

    setName("");
    setEmail("");
    setDate("");
    setMessage("");

    alert("Appointment submitted");
  };

  return (
    <form onSubmit={submitAppointment}>
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
  );
};

export default Appointments;
