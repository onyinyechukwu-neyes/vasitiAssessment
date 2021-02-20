import React, { useState } from 'react'
import swal from '@sweetalert/with-react';
import { Col, Row, Button, Form, FormGroup, Label, Input,CustomInput } from 'reactstrap';

const CommentForm = (props) => {
    const [state, setState] = useState({customFile: '', firstname: '', lastname: '', text: '', customRadio: null})

    const handleChange =(e)=> {
        const {name, value} = e.target
        setState({
            ...state,
            [name]: value
        })
    }
    const handleSubmit = (e)=> {  
        e.preventDefault()
        swal({title: "Thank you for sharing your story!.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", icon: 'success', button: "Close"});
        window.location.href = '/'
    }

    const {customFile,firstname,lastname,text,customRadio} = state
  return (
    <div className= 'container'>
        
        <Form className='head' onSubmit={handleSubmit}>
        <h2 style={{marginBottom: '40px'}}>Share your amaizing story!</h2>
        
        
        <FormGroup>
        <Label for="exampleCustomFileBrowser">Upload Your Picture</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" defaultValue={customFile} onChange={handleChange} />
      </FormGroup>
        
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label >Firstname</Label>
            <Input type="text" name="firstname" placeholder="firstname" defaultValue={firstname} onChange={handleChange} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Lastname</Label>
            <Input type="text" name="latname"  placeholder="lastname" defaultValue={lastname} onChange={handleChange} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleText">Share Your Story</Label>
        <Input type="textarea" name="text" id="exampleText" defaultValue={text} onChange={handleChange} />
      </FormGroup>
      <Row form>
          <Col md={4}>What did you interact with Vasiti as?</Col>
          <Col md={8}>
          <FormGroup check inline>
        <Label radio>
        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Customer" defaultValue={customRadio} onChange={handleChange} />
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label radio>
        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Vendor" defaultValue={customRadio} onChange={handleChange} />
        </Label>
      </FormGroup>
          </Col>
      </Row>
      
      
      <Button style={{marginTop: '20px', float: 'right', backgroundColor: 'orangered'}}>Share your story</Button>
    </Form>
    </div>
  );
}

export default CommentForm;