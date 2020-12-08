import React from "react";
import txtpic from "./txtpic.png"
import { Card, CardBody, CardTitle } from 'reactstrap';

function Help() {
  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle >
            <h3 className="font-weight-bold">
              how to use this
            </h3>
          </CardTitle>
            <p className="help">1. enter the email address you want your index delivered to</p>
            <p className="help">2. upload the book as a pdf file</p> 
            <p className="help">3. upload the words you want indexed as txt file</p>
            <p className="help">4. done! check your email in a few minutes</p>   
            <br />
            <p className="help">your txt file should look like this:</p>
            <br />
            <img className="txtpic" src={txtpic} alt="txt format" />
            <br />
            <br />
            <p className="help">entries on new line</p>
            <p className="help">separated from subentries with : </p>
            <p className="help">subentries separated with ;</p> 
        </CardBody >
      </Card >
    </section >
  );
}

export default Help

