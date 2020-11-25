import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';

function Help() {
  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle >
            <h3 className="font-weight-bold">
              How to Use This
            </h3>
          </CardTitle>
            <p>enter the email you want to recieve index</p>
            <p>upload your awesome book as a pdf file</p> 
            <p>upload words you want indexed as txt file</p>
            <p>done! check your email in a few minutes</p>     
        </CardBody >
      </Card >
    </section >
  );
}

export default Help

