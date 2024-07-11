import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/Calcu (2).png"
import jao3Image from "./img/Screenshot 2024-07-07 123006.png"
import jao4Image from "./img/Screenshot 2024-07-11 174951.png"
import jao5Image from "./img/Screenshot 2024-05-29 005949.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React, { useRef, useEffect } from 'react';


const projects = [
  { img: calcuImage2, title: "Calculator Project" },
  { img: jao3Image, title: "My React Project" },
  { img: jao4Image, title: "Frontend Project" },
  { img: jao5Image, title: "Capstone Project" }
];

const Portfolio = () => {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateLinePosition = () => {
      const img = imgRef.current;
      const text = textRef.current;

      if (img && text) {
        const imgRect = img.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        const startX = imgRect.right - canvasRect.left;
        const startY = imgRect.bottom - canvasRect.top;
        const endX = textRect.left - canvasRect.left;
        const endY = textRect.top - canvasRect.top;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const img = imgRef.current;
    if (img) {
      img.addEventListener('mouseenter', updateLinePosition);
      img.addEventListener('mouseleave', clearCanvas);
    }

    return () => {
      if (img) {
        img.removeEventListener('mouseenter', updateLinePosition);
        img.removeEventListener('mouseleave', clearCanvas);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="portfolio-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                Projects
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


      <div id="portfolio">
          <div className="row justify-content-center">
            <div className="col-8">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
              >
                {projects.map((item, index) => (
                  <div className="portfolio-item" data-aos="flip-left" key={index}>
                    <div className="carousel-3d">
                      <h4 className="mt-5">{item.title}</h4>
                      <img src={item.img} alt={item.title} className="carousel-image" />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
      </div>

      <div id="content">
        <canvas ref={canvasRef} width="800" height="600"></canvas>
        <div className="container">
          <div className="row">
            <div className="col-4">
                <img ref={imgRef} className="four" src={calcuImage2} alt="Calculator Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">The initiation of the project was catalyzed by the specific task delegated to us by our
                instructor, setting the foundation for our collaborative endeavor. Under the guidance of our
                mentor, we embarked on the project with a clear directive and purpose, aiming to meet the objectives
                outlined in the assignment. The instructor's instructions served as a roadmap, guiding our actions and
                decisions throughout the project's development. As a team, we embraced the challenge presented to us, leveraging
                our skills and expertise to execute the assigned task effectively. The project's genesis can be traced back to the
                moment our instructor entrusted us with the responsibility, igniting our motivation and drive to deliver a successful outcome.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img ref={imgRef} className="four" src={jao3Image} alt="My React Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">This Portfolio project holds significant importance as it aligns with the grading criteria
                set forth in our PCIT 15 course, emphasizing the need for compliance and proficiency. It
                serves as a fundamental aspect of our academic evaluation, showcasing our understanding
                and application of course concepts. The project's completion is essential for demonstrating
                our mastery of the course material and meeting the academic standards established by our
                instructor. Through this project, we have the opportunity to showcase our skills, knowledge, and dedication
                to achieving excellence in our academic pursuits. The successful execution of this Portfolio
                project is crucial for ensuring our academic success and fulfilling the requirements of our PCIT 15 course.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img ref={imgRef} className="four" src={jao4Image} alt="Frontend Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">Creating a front-end design for our exam is a crucial task that involves designing the interface
                and user experience for our examination platform. This front-end design plays a vital role in
                ensuring a user-friendly and visually appealing experience for all exam takers. By focusing on
                the front-end design, we aim to enhance usability, accessibility, and overall satisfaction for
                users navigating the exam interface. Our goal is to create a seamless and intuitive design
                that facilitates a smooth exam-taking process and optimizes the user experience. Through meticulous
                attention to detail and user-centric design principles, we strive to develop a front-end interface
                that meets the needs and expectations of our exam participants.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img ref={imgRef} className="four" src={jao5Image} alt="Capstone Project" />
            </div>
            <div className="col-8 mt-5">
              <p ref={textRef} id="text" className="text-white">This project serves as our capstone endeavor, focusing on the development and implementation of
                a Project Procurement Management Plan System under the title "Project Procurement Management Plan System."
                The project aims to address the intricacies of procurement management, emphasizing the importance of
                efficient planning and execution in the procurement process. By delving into the intricacies of
                procurement management, we seek to enhance our understanding of project procurement practices and their
                impact on overall project success. The Project Procurement Management Plan System represents a culmination
                of our learning and practical application of procurement principles, showcasing our ability to strategize and
                implement effective procurement strategies. Through this capstone project, we aspire to demonstrate our proficiency
                in procurement management and contribute valuable insights to the field.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
