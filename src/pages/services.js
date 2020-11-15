import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Carousel, Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

export default function Services() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "menu.jpg" }) {
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
              <img className="d-block w-100" src="" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Layout>
  );
}
