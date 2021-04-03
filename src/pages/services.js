import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Carousel } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import slide1 from "../images/bbf1.jpeg";
import slide2 from "../images/image2.jpeg";
import slide3 from "../images/image3.jpeg";
import slide4 from "../images/image4.jpeg";
import slide5 from "../images/steelfixing/sf1.jpeg";
import slide6 from "../images/steelfixing/sf2.jpeg";
import slide7 from "../images/steelfixing/sf3.jpeg";
import slide8 from "../images/steelfixing/sf4.jpeg";
import slide9 from "../images/steelfixing/sf5.jpeg";
import image5 from "../images/image5.jpeg";
import slide10 from "../images/steelfixing/wsf1.jpeg";

export default function Services() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "image3.jpeg" }) {
        publicURL
        name
      }
    }
  `);
  return (
    <Layout>
      <Row className="no-gutters">
        <Col xs={12} sm={6} className="p-5">
          <h1>Services That We Offer</h1>
          <div className="offset-1">
            <h2>Electrical Services</h2>
            <ul>
              <li>Electrical Panel Upgrade</li>
              <li>Circuit Installations & Upgrades</li>
              <li>Phase Balancing</li>
              <li>MV Cable Joints and Cable Termination</li>
              <li>House Tubing and wiring</li>
              <li>Power Consumption Meters</li>
              <li>Tankless Water Heaters</li>
              <li>Electric Fencing</li>
              <li>Commercial Electrical Panel Upgrades etc...</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={6} style={{ backgroundColor: "#94CDD5" }}>
          <Carousel fade interval={1000} indicators={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide2} alt="second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide4} alt="fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide5} alt="fifth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide6} alt="sixth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide7} alt="seventh slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide8} alt="eighth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide9} alt="ninth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide10} alt="tenth slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row
        className="no-gutters"
        style={{ backgroundColor: "#95B34F", color: "#fff" }}
      >
        <Col className="col-12 col-md-7">
          <img src={image5} alt="Construction" className="img-fluid" />
        </Col>
        <Col className="col-12 col-md-5 align-self-center ">
          <div className="offset-1">
            <h2>Other Services</h2>
            <ul>
              <li>Bricklaying</li>
              <li>Steel Fixing</li>
              <li>Roofing</li>
              <li>Renovations</li>
              <li>Plumbing</li>
              <li>Painting</li>
              <li>Dry Walling</li>
              <li>Door Fittings</li>
              <li>Camera Installations</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}
