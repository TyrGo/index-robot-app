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
          <p className="help">❶ enter the email address you want your index delivered to</p>
          <p className="help">❷ upload the book as a pdf file</p> 
          <p className="help">❸ upload the words you want indexed as txt file</p>
          <p className="help">❹ done! check your email in a few minutes</p>   
          <br />
          <p className="help">your txt file should look like this:</p>
          <br />
          <img className="txtpic" src={txtpic} alt="txt format" />
          <br />
          <br />
          <p className="help">each entry should be on new line, and subentries should be seperated with commas. there's no need to order entries or subentries alphabetically; the index robot will do that for you. the index returned should look like this, with pages ranged and subentries separated by semi-colons:</p>
          <br />
          <img className="txtpic" src={txtpic} alt="txt format" />
          <br />
          <br />
          <p className="help"><b>note:</b> the robot errs on the generous side; it will sooner find entries where there aren't, than not find entries where there are. for example, it might find 'king' on a page that contains 'baking'</p>
          <br />
          <p className="help"><b>another note:</b> the robot detects pages of the pdf, and doesn't seperate front-matter from the rest of the book. so it might count a page numbered with the roman numeral 'i' as page '1'. it's usually a good idea to remove front-matter from the pdf first</p>
          <br />
          <p className="help"><b>and another:</b> sorry about that! but the robot was built in a few hours. if you'd like it to be cleverer, you could pay us enough to make it cleverer :) meanwhile, it won't do all the work for you, and is no substitute for a professional indexer, but should save some time</p>
          <br />
        </CardBody >
      </Card >
    </section >
  );
}

export default Help

