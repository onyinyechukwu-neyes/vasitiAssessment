import React from "react";
import { Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";

const Section = () => {
  return (
    <div className="container">
      <section>
        <Row>
          <Col md={6} className= 'col'>
            <h1>
              Amazing <br /> Experience from Our <br /> Wonderful Customers
            </h1>
          </Col>
          <Col md={6} >
            <Image src="image/student5.png"  />
          </Col>
        </Row>
      </section>
      <hr />
    </div>
  );
};

export default Section;
