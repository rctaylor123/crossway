import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ContactUsForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const [showToast, setShowToast] = useState(false);

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setShowToast(true);
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setServerState({
      submitting: true,
      status: null
    });
    
    submitForm(e.target);
  };

  const submitForm = form => {
    axios({
      method: "post",
      url: "https://getform.io/f/880fd919-603b-4597-aa78-b945c9bd785c",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <section>
      <ToastContainer className="p-3" position="top-center">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={4000} autohide bg="secondary">
          <Toast.Header closeButton={true}>
            <strong className="me-auto">Thank you!</strong>
          </Toast.Header>
          <Toast.Body>Your message has been recieved. We will contact you shortly!</Toast.Body>
        </Toast>
      </ToastContainer>

      <Form className="contact-form" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="fullName" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="emailAddress" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" name="comments"/>
        </Form.Group>

        {!serverState.submitting && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}

        {serverState.submitting && (
          <Spinner animation="border" variant="primary" />
        )}
      </Form>
    </section>
  )
}

export default ContactUsForm;