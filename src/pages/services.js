import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Carousel } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import slide1 from "../images/image1.jpeg";
import slide2 from "../images/image2.jpeg";
import slide3 from "../images/image3.jpeg";
import slide4 from "../images/image4.jpeg";
import slide5 from "../images/image5.jpeg";

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
          <h1>What we Can do for you.</h1>
        </Col>
        <Col xs={12} sm={6} style={{ backgroundColor: "#94CDD5" }}>
          <Carousel fade interval={1000} indicators={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide5} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Layout>
  );
}
