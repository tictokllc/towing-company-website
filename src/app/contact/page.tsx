'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Contact Us</h1>
      {submitted && <p>Thank you! We got your message.</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input name="name" value={formData.name} onChange={handleChange} required /><br />
        <label>Email:</label><br />
        <input name="email" value={formData.email} onChange={handleChange} required /><br />
        <label>Message:</label><br />
        <textarea name="message" value={formData.message} onChange={handleChange} required /><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
