import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import customers from "../mockData/customers.json";

const Section3 = () => {
  return (
    <section>
      <div className="container">
        <Row className="h1">
          {customers.map((customer, index) => (
            <Col md={4} className= 'col'>
              <Image src={customer.profilePic} roundedCircle />
              <h4>{customer.name}</h4>
              <p>
                {customer.location} <Button>{customer.status}</Button>
              </p>
              <p>{customer.quote}</p>
            </Col>
          ))}
        </Row>
      </div>
      <hr />
    </section>
  );
};

export default Section3;
