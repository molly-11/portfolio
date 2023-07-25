import { Link } from "react-router-dom";
import "./assets/styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const form = useRef();
  const recaptchaKey = "6Ld3UVInAAAAAKHd8IVXiRrNO85gC7viX6QAlCJj";
  const repatchaRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcmbzkt",
        "template_ojxptnv",
        form.current,
        "mXE4fEBeqJQcCf1q2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <nav>
        <Link to={"/"}>HOME</Link>
      </nav>
      <h2 id="contactHeader">Send me an email or contact via LinkedIn</h2>
      <form
        ref={form}
        action="submit"
        id="contactForm"
        onSubmit={sendEmail}
        method="SEND"
      >
        <h6>Provide your data here and send message</h6>

        <input
          type="text"
          id="nameContact"
          name="user_name"
          placeholder="First name, last name"
          required
          size={100}
        />

        <input
          type="text"
          id="emailContact"
          placeholder="test@email.com"
          name="user_email"
          required
          size={100}
        />

        <input
          type="text"
          id="subjectContact"
          placeholder="Subject"
          name="subject"
          required
          size={120}
        />
        <input
          type="text"
          id="messageContact"
          placeholder="Type your message here"
          name="message"
          required
          size={1000}
        />
        <label htmlFor="messageContact" id="maxChar">
          Max. 1000 characters
        </label>

        <ReCAPTCHA
          ref={repatchaRef}
          sitekey="6Ld3UVInAAAAAOSf3-M3TTbPROYYPVZjycvSZ3Bp"
          onChange={updateRecaptchaToken}
        />
        <button>Send</button>
      </form>
    </>
  );
}

export default Contact;
