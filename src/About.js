import React from "react";
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle } from "reactstrap";

function About() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              About
            </h3>
            <p>this machine will make an index for your book. 
              it was built in a day by ty and ting.</p>
            <br />
            <p>want to learn how to create much more, even quicker? 
              go to <Link to="https://www.rithmschool.com/">rithmschool</Link>. drop our names</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default About;
