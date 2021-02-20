import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <section>
      <div className="container">
        <Row className="h1">
          <Col md={6} className= 'col'>
            <h3>Tolu and Joy's Experience</h3>
            <p>
              <Button>Customer</Button>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <p>
              <Link to="/form">SHARE YOUR OWN STORY</Link>
            </p>
          </Col>
          <Col md={6} className= 'col'>
            <Image src="image/student6.png" roundedCircle />
          </Col>
        </Row>
      </div>
      <hr />
    </section>
  );
};

export default Section4;
