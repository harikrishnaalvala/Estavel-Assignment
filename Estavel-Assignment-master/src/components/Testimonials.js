import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Stonepedia provided me with high-quality marble. Excellent service!',
      image: '/assets/images/john.jpg'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      feedback: 'The granite slabs were perfect for my kitchen countertops. Highly recommended!',
      image: '/assets/images/sarah.jpg'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      feedback: 'I love the variety and pricing of stones. The delivery was fast too!',
      image: '/assets/images/michael.jpg'
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container text-center">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3>{testimonial.name}</h3>
              <p>"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
