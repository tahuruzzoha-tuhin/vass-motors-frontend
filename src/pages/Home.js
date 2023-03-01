import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/motors/m3.jpg";
import collection2 from "./../assets/images/motors/m8.jpg";
import collection3 from "./../assets/images/motors/m9.jpg";
import collection4 from "./../assets/images/motors/m10.jpg";
import Testimonials from "../components/Testimonials.js";
const Home = () => {
  const products = useProducts();
  return (
    <div className="size">
      <Slider />
      <Container className="collections my-5 mx-auto">
        {/* <Bounce bottom cascade> */}
        <h2 className="text-center ">COLLECTION FOR</h2>
        {/* </Bounce> */}
        <p
          style={{ maxWidth: "650px" }}
          className="text-center mb-2 mx-auto mt-3"
        >
          {/* <Bounce> */}
          A curated collection of comfortable shoes because your feet truly
          deserves to be in sheer comfort!
          {/* </Bounce> */}
        </p>
        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0" src={collection1} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection2} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection3} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        {/* <Bounce bottom cascade> */}
        <h2 className="text-center ">FEATURED PRODUCTS</h2>
        <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-3">
          {" "}
          A curated collection of comfortable shoes & sandals because your
          feet truly deserves to be in sheer comfort!
        </p>
        {/* </Bounce> */}
        {!products.length ? (
          <div className="text-center my-2 private-spinner py-2">
            <Spinner variant="info" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore all products
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
