import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/DSC06653.png";
import ibisImage from "./img/icons8-chrome-240.png";
import vscodeImage from "./img/1200x630wa.png";
import gcbImage from "./img/icons8-chatgpt-100.png";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div className="container1">
            <div id="home-info">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div id="home-info" className="container mt-5">
                <div className="row ok">
                  <div className="col-lg-6">
                    <img src={myImage} className="no-animation" />
                  </div>
                  <div className="col-lg-6 jao">
                    <div className="card">
                      <h2 className="display-3 text-center text-light pt-5 mb-5">
                        Good Day... <br /> I'm Romeo M. Torre III
                      </h2>
                      <h4 className="text-light text-center mt-5">
                        I'm a Web Developer Good at Networking & An Offline Gamer
                      </h4>
                      <center>
                        <a href="/about" className="btn shadow mt-5">
                          Explore More
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <div className="image-wrapper">
                  <img src={ibisImage} alt="IbisPaintX" className="smaller-image" />
                </div>
                <h4 className="text-center title"><b>Chrome</b></h4>
                <p>Stands out as a leading web browser known for its speed, security, user-freindly interface.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <div className="image-wrapper">
                  <img src={vscodeImage} alt="Visual Studio Code" className="smaller-image" />
                </div>
                <h4 className="text-center title"><b>Cici</b></h4>
                <p>Versatile name that can serve as a nickname, a standalone name in certian culutres.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <div className="image-wrapper">
                  <img src={gcbImage} alt="Gaming Center Base" className="smaller-image" />
                </div>
                <h4 className="text-center title"><b>Chat GPT</b></h4>
                <p>Is an advanced chat box develop by openAI that utilizes large langauge modal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
