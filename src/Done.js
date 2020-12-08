import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Done() {
  return (
    <section className="col-12 col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h4>check your email in a few mins</h4>
            <p>if this saved you time or money please consider donating to us at </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Done;