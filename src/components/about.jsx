import React from "react";

const doctors = [
  {
    name: "Dr. Siddiq Khan",
    degree: "BHMS",
    experience: "2.5+ Years Experience",
    desc: "Specialist in chronic diseases, lifestyle disorders, and holistic homeopathic care.",
    image: "./assets/doc.jpeg"
  },
  {
    name: "Dr. Aaliyafatima Maldar",
    degree: "BHMS",
    experience: "1+ Years Experience",
    desc: "Focused on women’s health, skin conditions, and stress-related disorders.",
    image: ""
  }
];

const About = () => {
  return (
    <section className="about">
      <div className="container">

        {/* Clinic Card */}
        <div className="clinic-card">
          <div className="clinic-image">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipM3Otd2bjcoY65NDyJbVCja0qJHDXfrae7BPfgP=s1360-w1360-h1020-rw"
              alt="Vital Vibes Homeo Clinic"
            />
          </div>

          <div className="clinic-content">
            <h2>About Vital Vibes Homeo Clinic</h2>
            <p>
              Vital Vibes Homeo Clinic offers safe, natural, and personalized
              homeopathic care focused on treating the root cause of illness.
            </p>
            <p>
              With experienced doctors and a patient-first approach, we help
              individuals achieve long-term health and overall wellness.
            </p>
          </div>
        </div>

        {/* Doctors */}
        <div className="doctor-section">
          <h3>Our Doctors</h3>

          <div className="doctor-carousel">
            {doctors.map((doc, index) => (
              <div className="doctor-card" key={index}>

                <div className="doctor-image">
                  <img src={doc.image} alt={doc.name} />
                </div>

                <h4>{doc.name}</h4>
                <span className="degree">{doc.degree}</span>
                <span className="experience">{doc.experience}</span>
                <p>{doc.desc}</p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
