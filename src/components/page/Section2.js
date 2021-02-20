import React from "react";
import { Row, Col, Button } from "reactstrap";
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'


const Section2 = () => {
  return (
    <section style={{ backgroundColor: "#222222" }}>
      <div className="container">
        <Row className="h2">
          <Col md={6} className= 'col'>
          <Image src="image/teacher.png" />
          </Col>
          <Col md={6} className= 'col'>
            <h3>Tolu and Joy's Experience</h3>
            <p><Button>Customer</Button></p>
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
        </Row>
      </div><hr/>
    </section>
  );
};

export default Section2;
