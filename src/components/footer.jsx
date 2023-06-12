import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
<Container fluid className="fixed-bottom">
<Row className='footer'>
  <Col md={2} className='footer-col'>
    <button className='button-footer one'><i className="fa-solid fa-house"></i>  <span className='span-active'>Home</span></button>
  </Col>
  <Col md={2} className='footer-col'>
    <button className='button-footer two'><i className="fa-solid fa-forward"></i><span className='span-active'>Tracks</span></button>
  </Col>
  <Col md={2} className='footer-col-center d-flex justify-content-center align-items-center position-relative'>
    <button className='play-center three position-absolute top-0'><i className="fa-solid fa-circle-play fa-beat-fade"></i></button>
  </Col>
  <Col md={3} className='footer-col'>
    <button className='button-footer four'><i className="fa-solid fa-wand-magic-sparkles"></i><span className='span-active'>Identify</span></button>
  </Col>
  <Col md={3} className='footer-col'>
    <button className='button-footer five'><i className="fa-solid fa-user"></i><span className='span-active'>Perfil</span></button>
  </Col>
</Row>
</Container>
  );
};

export default Footer;