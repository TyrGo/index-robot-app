import React from "react";
import IndexForm from "./IndexForm";
import { Form } from "reactstrap";

// home now displays the number of snacks and drinks
// btw: there seems to be an error with the original design (using h3 in an h5)
function Home() {
  return (
    <section className="col-md-10">
      <div className="form">
        <IndexForm />
      </div>
    </section>
  );
}

export default Home;
