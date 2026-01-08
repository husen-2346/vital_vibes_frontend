import React, { useEffect, useState } from "react";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = () => {
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data));
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const markCompleted = async id => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "PUT"
    });
    fetchAppointments();
  };

  return (
    <div className="appointment-table">
      <h3>Appointments</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.phone}</td>
              <td>{a.date.split("T")[0]}</td>
              <td>{a.time}</td>
              <td>{a.status}</td>
              <td>
                {a.status === "Pending" ? (
                  <button onClick={() => markCompleted(a.id)}>Complete</button>
                ) : (
                  <span className="completed">Done</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
