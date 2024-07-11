import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-dark">
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col">
        <h1 className="fw-bold display-1 text-center mt-5 pt-5 mt-5 text-white">
          <b>Contact Me!</b>
        </h1>
      </div>
    </div>
  
          {/* Decorative elements */}
          <div className="snowflakes">
            {/* Adjust the number and positioning of elements as needed */}
            {[...Array(10)].map((_, index) => (
              <div className="snowflake" key={index}></div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact-info" className="pink-bg">
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <form className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-black fw-bold">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-black fw-bold">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-black fw-bold">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-pink fw-bold text-white"><b>Send Message</b></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section id="social-media" className="pink-bg py-5">
        <div className="container">
          <div className="card gonzaga">
            <h2 className="text-center mb-5 text-white"><b>My Social Media Accounts</b></h2>
            <div className="social-icons text-center mt-4">
              <a 
                href="https://www.facebook.com/jackierose.abadiano.3?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 text-decoration-none"
              >
                <FontAwesomeIcon className="social-icon facebook" icon={faFacebook} size="3x" />
              </a>
              <a
                href="https://www.instagram.com/jackieroseabadiano?igsh=b2xnajJmdHFmeHc2"
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 text-decoration-none"
              >
                <FontAwesomeIcon className="social-icon instagram" icon={faInstagram} size="3x" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 text-decoration-none"
              >
                <FontAwesomeIcon className="social-icon twitter" icon={faTwitter} size="3x" />
              </a>
              <a
                href="https://www.tiktok.com/@user9985202369906?_t=8nuTqcO9Wlu&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 text-decoration-none"
              >
                <FontAwesomeIcon className="social-icon tiktok" icon={faTiktok} size="3x" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
