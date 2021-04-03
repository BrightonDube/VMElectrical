//jshint esversion: 9
import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import image1 from "../images/danger.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import video from "../images/video.mp4";
import video3 from "../images/video1.mp4";
import slide5 from "../images/krugersdorp.jpeg";
import slide6 from "../images/lights.jpeg";
import slide7 from "../images/lights2.jpeg";
import slide8 from "../images/steelfixing/sf1.jpeg";
import slide9 from "../images/meh1.jpeg";
import slide10 from "../images/meh2.jpeg";
import slide11 from "../images/bbf1.jpeg"
import slide12 from "../images/box.jpeg";
import slide13 from "../images/bricklayers.jpeg";
import slide14 from "../images/steelfixing/sf2.jpeg";

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row className="no-gutters">
          <Col xs={12} md={8}>
            <video
              className="w-100 video-fluid"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </Col>
          <Col className="p-4 text-center align-self-center col-12 col-md-4 order-xs-last order-sm-first">
            <h1>IME Solutions</h1>
            <h3 className="text-justify">
              IME Solutions is the go-to electrician and
              construction services provider in South Africa. Servicing the
              commercial and residential markets we offer repairs, installations
              and upgrades – delivering excellent work, at competitive prices,
              every time!
            </h3>
          </Col>
        </Row>
        <Row
          className="no-gutters"
          style={{ backgroundColor: "#3A7A82", color: "#F6CA9D" }}
        >
          <Col className="text-center p-4 col-12 col-md-4 order-last align-self-center">
            <h1>The Best Electrical Services Provider in Gauteng</h1>
            <h3>
              We offer phase balancing, MV Cable Joints and cable termination,
              house tubing and wiring.
            </h3>
            <h5 className="text-justify">
              Electrical installations and complex electrical wiring and
              dangerous activities are best left to trained experts. IME Solutions has licensed electricians in electrical installations
              and complex electric wiring, with years of experience. we are
              available 24/7 to assist you – be it at home or your business
              installation requirements.
            </h5>
          </Col>
          <Col xs={12} lg={8}>
            <Carousel fade interval={1000} indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide8} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide10}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row
          className="no-gutters"
          style={{ backgroundColor: "#95B34F", color: "#fff" }}
        >
          <Col className="col-12 col-md-6">
            <img src={image5} alt="" className="img-fluid" />
          </Col>
          <Col className="col-12 order-md-first col-md-4 text-center align-self-center ">
            <h2>Construction Services</h2>
            <h4>
              For all your building concerns from setting out columns, offices,
              block houses, setting out bases, shuttering, stair-cases, dry
              walling door fittings, wooden floors and tiles, we have the best
              professionals to do the job for you at the most competetive
              prices.
            </h4>
          </Col>

          <Col
            className="col-12 col-md-2 text-center align-self-center h-100 order-md-last"
            style={{ backgroundColor: "#3D550C" }}
          >
            <h1>Steel Fixing</h1>
            <h5>
              We offer quality yet affordable steel fixing solutions in and around Gauteng. Out personnel is highly trained and experienced to deal with any project size.
            </h5>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={6} md={4} className="order-md-last">
            <video
              className="video-fluid w-100"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src={video3} type="video/mp4" />
            </video>
          </Col>

          <Col xs={6} md={4} className="order-md-first">
            <Carousel fade interval={1000} indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide5} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide6} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image4} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide7} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide9} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide10} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide11} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide12} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide13} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide14} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            xs={12}
            md={4}
            className="text-center align-self-center text-warning"
          >
            <h1>Fast and Efficient Service </h1>{" "}
            <h5>
              We believe in providing the best service to our valued clients and
              speed and efficiency are our main strength.
            </h5>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
