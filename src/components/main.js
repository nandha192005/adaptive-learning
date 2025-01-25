import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './main.css';
import './chat.css';
import Login from './login';
import ADDCources from './cources';

// Import all the images from the assets folder
import s1 from './../asserts/m1.jpg';
import s2 from './../asserts/s.avif';
import s3 from './../asserts/p1.jpg';
import s4 from './../asserts/offer.jpeg';
import cpImage from './../asserts/cp.png';
import pyImage from './../asserts/py.jpeg';
import jaImage from './../asserts/ja.jpeg';
import mernImage from './../asserts/MERN.webp';
import flImage from './../asserts/fl.jpeg';
import uImage from './../asserts/u.jpeg';

// Navbar Component
const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid justify-content-between">
      <Link className="navbar-brand logo" to="/">
        <i className="bi bi-mortarboard-fill"></i> Flexi Verse
      </Link>
      <form className="d-flex search-form" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
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
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/take">Take a Course</Link></li>
          <li className="nav-item"><Link className="nav-link" to="#">Skill Spectrum</Link></li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn"
              type="button"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-question-circle"></i> Help
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
              <li><Link className="dropdown-item" to="/testimonial">Testimonials</Link></li>
              <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="bi bi-cart"></i>
              <span id="cart-count" className="badge bg-danger rounded-pill">0</span>
            </Link>
          </li>
          <li className="nav-item"><Link className="nav-link" to="/profile"><i className="bi bi-person"></i> Profile</Link></li>
          <li className="nav-item"><Link className="nav-link login-btn" to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

// Carousel Component
const Carousel = () => (
  <div id="courseCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={s1} className="d-block w-100" alt="Course 1" />
      </div>
      <div className="carousel-item">
        <img src={s2} className="d-block w-100" alt="Course 2" />
      </div>
      <div className="carousel-item">
        <img src={s3} className="d-block w-100" alt="Course 3" />
      </div>
      <div className="carousel-item">
        <img src={s4} className="d-block w-100" alt="Course 4" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

// Course Card Component
const CourseCard = ({ imgSrc, title }) => (
  <div className="course-card">
    <img src={imgSrc} alt={title} />
    <h5>{title}</h5>
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary me-2 enroll-btn">Enroll</button>
      <button
        className="btn btn-secondary add-to-cart-btn"
        data-course-id="1"
        data-course-title={title}
        data-course-price="2500"
        data-course-img={imgSrc}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

// Section Component
const Section = ({ title, courses }) => (
  <div className="mt-5">
    <h2>{title}</h2>
    <div className="course-grid">
      {courses.map((course, index) => (
        <CourseCard key={index} imgSrc={course.imgSrc} title={course.title} />
      ))}
    </div>
  </div>
);

// Chatbot Component
const Chatbot = () => (
  <div className="chatbot">
    <header>
      <h2>Chatbot</h2>
      <span className="close-btn material-symbols-outlined">close</span>
    </header>
    <ul className="chatbox">
      <li className="chat incoming">
        <span className="material-symbols-outlined">smart_toy</span>
        <p>Hi there 👋<br /> How can I help you?</p>
      </li>
    </ul>
    <div className="chat-input">
      <textarea placeholder="Enter Questions..." required></textarea>
      <span className="material-symbols-outlined">send</span>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-content">
      <p>&copy; 2024 Flexi Verse</p>
    </div>
  </footer>
);

// Main Component
const Main = () => {
  const featuredCourses = [
    { imgSrc: cpImage, title: 'C Programming' },
    { imgSrc: pyImage, title: 'Python Zero to Hero' },
    { imgSrc: jaImage, title: 'Java Basic to Advanced' }
  ];

  const recommendations = [
    { imgSrc: mernImage, title: 'MERN STACK in 60 Days' },
    { imgSrc: flImage, title: 'Flutter in 45 days' },
    { imgSrc: uImage, title: 'UI/UX Designing Using Figma, Adobe' }
  ];

  return (
    <div>
      <Navbar />
      <section className="content mt-5 pt-3">
        <Carousel />
        <Section title="Featured Courses" courses={featuredCourses} />
        <Section title="Personalized Recommendations" courses={recommendations} />
      </section>
      <Chatbot />
      <Footer />
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/take" element={<div>Take a Course</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/testimonial" element={<div>Testimonials</div>} />
        <Route path="/faq" element={<div>FAQ</div>} />
        <Route path="/cart" element={<ADDCources/>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
