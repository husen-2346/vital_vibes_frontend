import { useEffect, useState } from "react";
import "./admin.css";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://vital-vibes-backend.onrender.com/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch appointments:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading appointments...</p>;
  }

  return (
    <div className="appointment-table-wrapper">
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td colSpan="4">No appointments found</td>
            </tr>
          ) : (
            appointments.map((a) => (
              <tr key={a._id}>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.date}</td>
                <td>{a.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
