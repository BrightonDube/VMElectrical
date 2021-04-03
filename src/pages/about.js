import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Button } from "react-bootstrap";
import video from "../images/video2.mp4";
export default function About() {
  return (
    <Layout>
      <Row className="no-gutters">
        <Col xs={12} sm={5} className="px-4">
          <h1>About Us!</h1>
          <p>
            IME Solutions is the go-to provider for all things
            electrical and construction in South Africa. Servicing the
            commercial and residential markets, we are an electrical and
            construction company that offers repairs, installations and upgrades
            – delivering excellent work, at competitive prices, every time!
            Whether it’s rewiring an entire office block or installing a ceiling
            fan, our happy customers know that VM Electrical is the one to call.
          </p>
          <h3>Get a FAST and FREE Quote</h3>
          <Button variant="success" href="tel: 081 703 9117">
            Call us now!
          </Button>
        </Col>
        <Col xs={12} sm={7}>
          <video
            className="video-fluid w-100"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Layout>
  );
}
