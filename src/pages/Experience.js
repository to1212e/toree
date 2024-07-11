import React, { useEffect } from 'react';
import './Experience.css';
import Navbar from './Navbar';
import boy2Image from './img/1700723859876.jpg';
import boy3Image from './img/IMG_20231006_162114.jpg';
import jov2Image from './img/IMG_20231108_234043.jpg';
import certificateImage from './img/IMG_20240126_125407.jpg';
import certificate1Image from './img/IMG_20240708_150253_915.jpg';

const Experience = () => {
  useEffect(() => {
    const experienceInfo = document.getElementById('experience-info');

    // Function to create a twinkling circle
    const createCircle = () => {
      const circle = document.createElement('div');
      circle.className = 'twinkle-circle';

      // Randomize size, position, and animation duration
      const size = Math.random() * 5 + 2; // size between 2px and 7px
      const posX = Math.random() * experienceInfo.offsetWidth;
      const posY = Math.random() * experienceInfo.offsetHeight;
      const duration = Math.random() * 5 + 3; // duration between 3s and 8s

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${posX}px`;
      circle.style.top = `${posY}px`;
      circle.style.animationDuration = `${duration}s`;

      experienceInfo.appendChild(circle);
    };

    // Create multiple circles
    for (let i = 0; i < 100; i++) {
      createCircle();
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="experience-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold text-white display-1 text-center mt-5 pt-5">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <div id="exp">
        <div className="container mt-5 bg-dark">
          <h1 className="text-white text-center">Work Experience</h1>
          <div className="row mt-5 justify-content-center">
            <hr />
            <div className="col mr-5 portfolio-item d-flex flex-column align-items-center">
              <img className="one" src={boy2Image} alt="Compiling Documents" />
              <h4 className="mt-5 text-white">Compiling Documents</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={boy3Image} alt="Ring Binding" />
              <h4 className="mt-5 text-white">Ring Binding</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="four" src={jov2Image} alt="Documents" />
              <h4 className="mt-5 text-white">Documents</h4>
            </div>
          </div>
          <hr />
          <h1 className="text-white text-center">Certificates</h1>
          <div className="row mt-5 justify-content-center">
            
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="two" src={certificateImage} alt="OJT Certificate" />
              <h4 className="mt-5 text-white">OJT Certificate</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={certificate1Image} alt="Colloquium Certificate" />
              <h4 className="mt-5 text-white">Colloquium Certificate</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
