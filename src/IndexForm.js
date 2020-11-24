import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, CustomInput, Label, Form, FormGroup, FormFeedback, Input, Card, CardBody, CardTitle } from 'reactstrap';
// import SnackOrBoozeApi from "./Api";

function IndexForm() {

  const [submission, setSubmission] = useState({email: undefined, ms: undefined, words: undefined})

  function handleChange(evt) {
     let { name, value } = evt.target;
     if (name === "manuscript" || name === "indexWords") value = evt.target.files[0];
     setSubmission(oldSubmission => ({ ...oldSubmission, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    //await IndexApi.postSubmission(submission);
    console.log("hello")
  }


  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold">
            <Form onSubmit={handleSubmit}>
              <h3 className="font-weight-bold">
                create your book index
              </h3>
              <br />
              <FormGroup>
                <Input type="email" 
                       name="email" 
                       value={submission.email}
                       placeholder="enter your email address" 
                       onChange={handleChange} 
                       />
                <FormFeedback >please enter an email</FormFeedback>
              </FormGroup>
              <FormGroup>
                <CustomInput type="file" 
                             required
                             name="ms" 
                             label="upload manuscript" 
                             onChange={handleChange}
                             />
              </FormGroup>
              <FormGroup>
                <CustomInput type="file" 
                             required name="words" 
                             label="upload index words" 
                             onChange={handleChange}
                             />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardTitle>
        </CardBody>
      </Card>
    </section>)
}

export default IndexForm;