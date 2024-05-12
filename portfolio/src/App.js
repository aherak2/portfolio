import React from 'react';
import './App.css'; 
import adna from './img/adna.png';
import parking from './img/hqdefault.jpg'
import ayana from './img/ayana.png'
import an_an from './img/an-an.png'
import pos from './img/pos.png'
import javaApp from './img/images.jpeg'
import dipl from './img/logo.png'
function App() {
  const openPosTabs = () => {
    window.open('https://github.com/nedimkrupalija/POS-manager-app-tim56.git', '_blank');
  };
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto" href="#about">About me</a></li>
              <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact info</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="index.html" className="logo"><img src={adna} alt="logo" className="img"/></a>
        </div>
      </header>

      <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-descr">
                <p className="p-heading">Hi! I'm Adna Herak, a third-year student at the Faculty of Electrical Engineering, specializing in Computer Science and Informatics.</p>
                <p className="separator">Throughout my studies, I've developed a strong passion for software development, particularly in areas such as web development, mobile app development, and data science.</p>
                <p className="separator">In my portfolio, you'll find projects that showcase my skills and expertise in various programming languages and technologies. From building responsive websites to designing mobile applications and working on embedded systems and FPGA projects, I'm committed to delivering high-quality solutions that meet the needs of clients and users.</p>
                <p className="separator">I'm always eager to learn and explore new technologies, and I'm excited about the opportunities that lie ahead in my career as a software engineer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="paddsection">
        <div className="container">
          <div className="section-title text-center">
            <h2>My Portfolio</h2>
          </div>
        </div>

        <div className="container">



            <div className="col-lg-3 portfolio-item">
            <a href="https://github.com/azunic3/Project-Flowershop-.git" target="_blank" rel="noopener noreferrer">
              <img src={ayana} className="img" alt="Flower Shop"/>
             </a> <div className="portfolio-info">
                <h4>Flower Shop</h4>
                <p>
  <strong>Project Description:</strong>
  <ul>
    <li>A web application for online flower sales, implemented in .NET C#.</li>
    <li>Technologies: .NET C#, ASP.NET, Entity Framework, SQL Server</li>
    <li>Role Description: I developed and implemented functionalities for customers and employees, enabling different user roles in the application. As part of the group, I have worked with the patterns used, as well as making UI/UX and reports and other functionalities needed for the staff</li>
  </ul>
</p>
         </div>
            </div>

            <div className="col-lg-3  portfolio-item"  onClick={openPosTabs}>
                              <img src={pos} className="img" alt="POS aplikacija"/>

              <div className="portfolio-info">
                <h4>POS aplikacija</h4>
                <p>
  <strong>Project Description:</strong>
  <ul>
    <li>An application for managing point of sale (POS) with React front-end and Node.js back-end.</li>
    <li>Technologies: React, Node.js, Express.js</li>
    <li>Role Description: I participated in the development and implementation of functionalities for inventory management, orders, and employees. I was mainly focused on front-end development, but also helped with the back-end development, mainly reports (generating the PDF) and cors needed for token extension. This website is still being developed and changed are still expected.</li>
  </ul>
</p>     </div>
            </div>

            <div className="col-lg-3 portfolio-item">
  <a href="https://github.com/nkadric1/Smart-Parking-System.git" target="_blank" rel="noopener noreferrer">
    <img src={parking} className="img" alt="Parking robot" />
  </a>
  <div className="portfolio-info">
    <h4>Parking robot</h4>
    <p>
  <strong>Project Description:</strong>
  <ul>
    <li>A robot that automatically manages parking using the mBot platform and Raspberry Pi Pico microcontroller.</li>
    <li>Technologies: Python, Arduino</li>
    <li>Role Description: I was part of the team that developed algorithms for automatic parking and implemented them on the mBot platform. This project uses the Raspberry Pi Pico for the parking system (mainly ramp and detecting the vehicle), while the mBot (Arduino Uno) is programmed to mimic a car and parks on the first available place.</li>
  </ul>
</p>  </div>
</div>


            <div className="col-lg-3 portfolio-item">
            <a href="https://github.com/azunic3/Rent-a-Car.git" target="_blank" rel="noopener noreferrer">
              <img src={an_an} className="img" alt="Rent a car"/></a>
              <div className="portfolio-info">
                <h4>Rent a car</h4>
                <p>
  <strong>Project Description:</strong>
  <ul>
    <li>A web application for car rental, implemented using HTML, CSS, and JavaScript.</li>
    <li>Technologies: HTML, CSS, JavaScript</li>
    <li>Role Description: I independently developed the application from scratch, focusing on the user interface.</li>
  </ul>
</p>  </div>
            </div>
            <div className="col-lg-3 portfolio-item">
            <a href="https://github.com/azunic3/Rent-a-Car.git" target="_blank" rel="noopener noreferrer">
                <img src={javaApp} className="img" alt="Java Desktop Application"/>
              </a>
              <div className="portfolio-info">
                <h4>Java Desktop Application</h4>
                <p>
                  <strong>Project Description:</strong>
                  <ul>
                    <li>A desktop application for managing theatre operations and ticket reservations, developed using Java and JavaFX.</li>
                    <li>Technologies: Java SE, JavaFX, MySQL</li>
                    <li>Role Description: I independently developed and implemented the desktop application, focusing on front-end design and user interface implementation using JavaFX. Designed and integrated functionality for managing theatre events and ticket sales. Implemented database connectivity using MySQL for storing and retrieving theatre and reservation data.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-lg-3 portfolio-item">
            <a href="https://github.com/aherak2/MyTaskBuddyiOS.git" target="_blank" rel="noopener noreferrer">
                <img src={dipl} className="img" alt="My Task Buddy"/>
              </a>
              <div className="portfolio-info">
                <h4>My Task Buddy</h4>
                <p>
  <strong>Project Description:</strong>
  <ul>
    <li>A mobile application for planning for individuals with Down syndrome, developed in Flutter.</li>
    <li>Technologies: Flutter, Dart</li>
    <li>Role Description: As part of my bachelor thesis, I participated in designing the user interface and implementing functionalities for managing tasks and events for individuals with Down syndrome. This app is expected to be used by the DOWNSY.</li>
  </ul>
</p>
              </div>
            </div>
          </div>
         
        </div>
         <div id="portfolio" className="paddsection">
        <div className="container">
          <div className="section-title text-center">
            <h2>Contact info</h2>
            <p>
              <ul>
                <li>
                  email: aherak2@etf.unsa.ba
                </li>
                <li>LinkedIn: <a href='https://www.linkedin.com/in/adna-herak-3abb29270' target="_blank" rel="noopener noreferrer">Adna Herak</a></li>
                             </ul>
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
