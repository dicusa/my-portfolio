import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <section className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="4" required></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: your-email@example.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            your-profile
          </a>
        </p>
        <p>Phone: +1234567890</p>
      </section>
    </div>
  );
};

export default Contact;
