import { Link } from "react-router-dom";
import "./assets/styles/Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "./components/Alerts";

function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isUserRobot, setUserValid] = useState(true);
  const form = useRef();

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
    setUserValid(false);
  };

  return (
    <div id="contactSection">
      <nav>
        <Link to={"/"}>HOME</Link>
      </nav>
      <h2 id="contactHeader">
        Send me an email or contact via{" "}
        <a href="https://www.linkedin.com/in/edit-elmeczi"> LinkedIn </a>
      </h2>
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
          type="email"
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
          sitekey={import.meta.env.VITE_SITEKEY}
          onChange={updateRecaptchaToken}
          required
        />
        <button disabled={isUserRobot}>
          Send{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Contact;
