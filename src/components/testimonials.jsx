import React from "react";

const testimonials = [
  {
    name: "Keshava Murthy",
    rating: "★★★★★",
    text: "Easy appointment process and very polite doctor. Highly recommended."
  },
  {
    name: "Anitha S",
    rating: "★★★★☆",
    text: "Treatment was effective and the consultation felt very personal."
  },
  {
    name: "Ramesh Kumar",
    rating: "★★★★★",
    text: "Good experience overall. Clinic atmosphere is calm and clean."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">

        <h2 className="section-title">
          Trusted by Thousands of <br /> Happy Patients
        </h2>

        {/* Reviews */}
        <div className="testimonial-carousel">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <h4>{item.name}</h4>
              <span className="rating">{item.rating}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Add Review CTA */}
        <div className="review-cta">
          <p>Have you visited us?</p>
          <button>Add Your Review</button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
