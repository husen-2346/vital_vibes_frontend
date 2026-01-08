import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <section className="appointment" id="appointment">
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <input type="date" name="date" onChange={handleChange} required />
            <input type="time" name="time" onChange={handleChange} required />
          </div>

          <textarea
            name="message"
            placeholder="Describe your problem (optional)"
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="appointment-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
