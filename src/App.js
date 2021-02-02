import { BrowserRouter, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Video from "./Video"
import Home from "./Home";
import Done from "./Done";
import Help from "./Help";
import Donate from "./Donate";
import Error from "./Error";
import NavBar from "./NavBar"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Thanks from "./Thanks.js"

const stripePromise = loadStripe('pk_test_51HwFmRIk1oqEqzSasZRetlDGpjvYJjqzDzh6n1Bc6zkri3t8xBVPg6DcKzPcfpBR4mSbPZu1NlEfWwb565Lorixh00VmYg0yNj');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Video />
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/done">
                <Done />
              </Route>
              <Route exact path="/help">
                <Help />
              </Route>
              <Route path="/donate">
                <Donate />
              </Route>
              <Route path="/thanks">
                <Thanks />
              </Route>
              <Route path="/error">
                <Error />
              </Route>
              <Route>
                <Redirect to="/error" />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </Elements>
  );
}

export default App;
