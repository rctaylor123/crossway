import * as React from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const ContactUsForm = () => {
  return (
    <section>
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  )
}

export default ContactUsForm
