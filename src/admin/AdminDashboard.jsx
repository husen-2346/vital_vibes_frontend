import React from "react";
import AdminNavbar from "./AdminNavbar";
import StatsCards from "./StatsCards";
import AppointmentTable from "./AppointmentTable";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <StatsCards />
        <AppointmentTable />
      </div>
    </>
  );
};

export default AdminDashboard;
