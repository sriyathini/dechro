import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent page refresh

        emailjs
            .sendForm(
                "your_service_id", // Replace with your EmailJS service ID
                "your_template_id", // Replace with your EmailJS template ID
                form.current,
                "your_user_id" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again.");
                }
            );

        e.target.reset(); // Clear the form after submission
    };

    return (
        <div className="contact-form-container" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>
                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>
                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>
                <button type="submit" style={{ padding: "0.5em 1em", cursor: "pointer" }}>
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
