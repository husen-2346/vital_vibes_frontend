import React, { useEffect, useState } from "react";

const StatsCards = () => {
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => {
        setStats({
          total: data.length,
          pending: data.filter(a => a.status === "Pending").length,
          completed: data.filter(a => a.status === "Completed").length
        });
      });
  }, []);

  return (
    <div className="admin-stats">
      <div className="stat-card"><p>Total</p><h3>{stats.total}</h3></div>
      <div className="stat-card"><p>Pending</p><h3>{stats.pending}</h3></div>
      <div className="stat-card"><p>Completed</p><h3>{stats.completed}</h3></div>
    </div>
  );
};

export default StatsCards;
