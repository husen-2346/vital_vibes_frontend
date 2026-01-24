import React from "react";
import treatments from "../data/treatments";

const Treatments = () => {
  return (
    <section className="treatments">
      <div className="container">

        <h2 className="section-title">Treatments</h2>

        <div className="treatment-grid">
          {treatments.map((item, index) => (
            <div className="treatment-card" key={index}>
              
              <div className="treatment-image">
                <img src={item.image} alt={item.title} />
              </div>

              <h4>{item.title}</h4>

               <button
                className="treatment-btn"
                onClick={() => {
                  const section = document.getElementById("appointment");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Appointment
              </button>

            </div>
          ))}
        </div>

        <div className="show-more">
          <button>Show More</button>
        </div>

      </div>
    </section>
  );
};

export default Treatments;
