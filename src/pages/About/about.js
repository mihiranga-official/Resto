import React from "react";
import "./about.css";
import map1 from "../../../src/Assets/map1.png";
import Footer from "../Footer/Footer";
import HairImage from "../../../src/Assets/hairAb.png";
import maniPedi from "../../../src/Assets/maniPediAb.jpg";
import facial from "../../../src/Assets/facialAb.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";

function About() {
  return (
    <div>
      <div className="about-container">
        <h3 className="heading">ABOUT US</h3>
        <p className="paragraph">
          LillySalon is poised to become the premier destination for salon
          services in Sri Lanka. Our team comprises experienced professionals
          with over a decade of expertise in salon management and innovation,
          leveraging the latest technology to meet international standards. If
          you're seeking top-notch salon services, LillySalon is your go-to
          platform. We provide our customers with unparalleled service and a
          fresh online booking experience. We are committed to continuously
          enhancing our platform by introducing new features and offering an
          extensive selection of salon services, including:
          <ul>
            <li>Haircuts</li>
            <li>Styling</li>
            <li>Coloring</li>
            <li>Manicures</li>
            <li>Pedicures</li>
            <li>Facials</li>
            <li>Spa treatments</li>
          </ul>
          And much more to come in the near future. Experience the convenience
          of booking salon appointments online and enjoy a superior salon
          experience with LillySalon.
        </p>
      </div>
      <div className="image-container">
        <img className="imageMap" src={map1} alt="map" />
        <div class="contact-box">
          <div class="contact-info">
            <div class="icon">
              <PhoneIcon />
            </div>
            <p>0783342597</p>
          </div>
          <div class="contact-info">
            <div class="iconw">
              <WhatsAppIcon />
            </div>
            <p>0783342597</p>
          </div>
          <div class="contact-info">
            <div class="iconG">
              <AlternateEmailIcon />
            </div>
            <p>lilly@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="service-images-container">
        <div className="service-images">
          <div className="service-image">
            <img src={HairImage} alt="Hair Services" />
          </div>
          <div className="service-image">
            <img src={maniPedi} alt="Nail Services" />
          </div>
          <div className="service-image">
            <img src={facial} alt="Bridal Services" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
