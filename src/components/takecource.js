import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



// Import images from the asserts folder
import s1 from './../asserts/IMG-20240828-WA0017.jpg';
import s2 from './../asserts/IMG-20240828-WA0013.jpg';
import s3 from './../asserts/IMG-20240828-WA0008.jpg';
import s4 from './../asserts/IMG-20240828-WA0010.jpg';
import s5 from './../asserts/IMG-20240828-WA0011.jpg';
import s6 from './../asserts/WhatsApp Image 2024-08-28 at 22.01.09_308cf2f7.jpg'
import s7 from './../asserts/IMG-20240828-WA0006.jpg';
import s8 from './../asserts/IMG-20240828-WA0007.jpg';
import s9 from './../asserts/IMG-20240828-WA0005.jpg';
import s10 from './../asserts/IMG-20240828-WA0020.jpg';

const Takecource = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand logo" href="/">
            <i className="bi bi-mortarboard-fill"></i> Flexi Verse
          </a>
          <form className="d-flex search-form" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-links">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Take a Course
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Skill Spectrum
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-question-circle"></i> Help
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/faq">
                      FAQ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-cart"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person"></i> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link login-btn" href="/public/sign.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Free Courses Section */}
      <section className="course-section mt-5 pt-3">
        <div id="free-courses" className="container mt-5">
          <h2>Free Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <img src={s1} alt="Free Course 1" />
              <h5>Java Programming</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s2} alt="Free Course 2" />
              <h5>Digital Marketing</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s3} alt="Free Course 3" />
              <h5>Prompt Engineering</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s4} alt="Free Course 4" />
              <h5>Backend Courses</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s5} alt="Free Course 5" />
              <h5>Data Analytics</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s6} alt="Free Course 6" />
              <h5>UI/UX Design</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s7} alt="Free Course 7" />
              <h5>E-Vehicles</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s8} alt="Free Course 8" />
              <h5>Natural Language Processing</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s9} alt="Free Course 9" />
              <h5>AI Ethics and Rules</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
            <div className="course-card">
              <img src={s10} alt="Free Course 10" />
              <h5>SEO Marketing</h5>
              <button className="btn btn-primary">Enroll</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="footer-content">
          <p>&copy; 2024 Flexi Verse</p>
        </div>
      </footer>
    </div>
  );
};

export default Takecource;
