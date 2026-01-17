import AppointmentTable from "./AppointmentTable";
import AdminNavbar from "./AdminNavbar";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />

      <div className="admin-content">
        <h2>Appointments</h2>
        <AppointmentTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
