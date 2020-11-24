import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Error() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              We're sorry! Something went wrong.
            </h3>
            <br />
            <div>
              But never with our snacks or drinks.
            </div>
            <br />
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Error;
