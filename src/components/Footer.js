import React from "react";
import contactNow from "./../assets/images/contact.png";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Contact with us</h4>

                <ul className="information contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Sylhet, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Email: e-shob-bd@yahoo.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Call: +8801555555555
                  </li>
                </ul>
              </Zoom>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">SERVICE</h4>
                <ul className="information">
                  <li>
                    <a href="/home">FAQs</a>
                  </li>
                  <li>
                    <a href="/home">MyBata</a>
                  </li>
                  <li>
                    <a href="/home">Store Locator</a>
                  </li>
                  <li>
                    <a href="/home">All About Feet</a>
                  </li>
                  <li>
                    <a href="/home">Contact Info</a>
                  </li>
                  <li>
                    <a href="/home">Delivery</a>
                  </li>
                </ul>
              </Zoom>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">FEATURES</h4>
                <ul className="information">
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">Payment Options</a>
                  </li>
                  <li>
                    <a href="/home">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/home">Refund Policy</a>
                  </li>
                </ul>
              </Zoom>
            </Col>


            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Want to Buy?</h4>
                <h5 className="text-muted">Sign up for our product</h5>
                <form className="d-flex">
                  <input
                    placeholder="Enter your email"
                    className="form-control rounded-0"
                    type="text"
                  />
                  <button className="btn rounded-0 btn-primary">Subscribe</button>
                </form>
                <h5 className="text-muted mt-4">Follow us on</h5>
                <div>
                  <ul className="social-icons">
                    <li>
                      <a href="/d">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">Copyright &copy; All reserved</p>
      </div>
    </>
  );
};

export default Footer;
