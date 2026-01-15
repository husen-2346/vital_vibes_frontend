import { useEffect, useState } from "react";

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then(res => res.json())
      .then(data => {
        console.log("ADMIN DATA:", data);
        setAppointments(data);
      });
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((a) => (
          <tr key={a._id}>
            <td>{a.name}</td>
            <td>{a.email}</td>
            <td>{a.date}</td>
            <td>{a.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentTable;
