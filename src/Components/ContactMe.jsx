import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactMe.css";

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="contact-container">
        <div className="contact-info">
          <pre className="pre-text">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            madhanmettukuru@gmail.com
            <br />
            <br />
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <b>+91 6305561973</b>
          </pre>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com/madhan.metukuru/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link link-facebook"
          >
            <FontAwesomeIcon icon={faFacebook} title="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/madhan_mettukuru/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link link-instagram"
          >
            <FontAwesomeIcon icon={faInstagramSquare} title="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/madhan-mettukuru-14a276185/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link link-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" />
          </a>
          <a
            href="https://github.com/METTUKURUMADHAN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link link-github"
          >
            <FontAwesomeIcon icon={faGithubSquare} title="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
