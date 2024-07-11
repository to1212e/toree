import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/Torre, Romeo III.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                About Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5 mb-5">
              <div className="row">
                <div className="col-lg-4">
                  <center><img src={myImage} alt="About Me" /></center>
                </div>
                <div className="col-lg-8">
                  <div className="card box shadow mb-3 p-3 bg-dark">
                    <h4 className="text-white"><span>About Me</span></h4>
                    <p className="text-white">
                      I'm Romeo M. Torre III, 22 years of age from Brgy Gil Montilla Sipalay City Neg. Occ. taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in Networking and PC Repair.
                    </p>
                    <p className="text-white">
                      Life is a journey of self-discovery, where each step we take and each challenge we face brings us closer to understanding our true selves. Every experience, whether joyful or painful, is an opportunity to delve deeper into the essence of who we truly are and what we are capable of becoming.
                    </p>
                  </div>
                  <div className="card box shadow p-2 bg-dark">
                    <h4 className="text-dark"><span>Academic</span></h4>
                    <p className="text-white">
                      <b>Primary</b> <br />
                      Gil Montilla ElementarySchool<br />
                      <b>Secondary</b><br />
                      Junior High: Gil Montilla National High School<br />
                      Senior High: Gil Montilla High School<br />
                      <b>Tertiary</b><br />
                      Central Philippines State University (CPSU)
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
