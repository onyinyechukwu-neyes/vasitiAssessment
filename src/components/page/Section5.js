import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import vendors from "../mockData/vendor.json";

const Section5 = () => {
  return (
    <section>
      <div className="container">
        <Row className="h1">
          {vendors.map((vendor, index) => (
            <Col md={4} className= 'col'>
              <Image src= {vendor.profilePic} roundedCircle />
              <h4>{vendor.name}</h4>
              <p>
                {vendor.location} <Button>{vendor.status}</Button>
              </p>
              <p>{vendor.quote}</p>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Section5;
