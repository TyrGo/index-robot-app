import { BrowserRouter, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Video from "./Video"
import Home from "./Home";
import Done from "./Done";
import About from "./About";
import Help from "./Help";
import Error from "./Error";
import NavBar from "./NavBar"


function App() {
  return (
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
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/help">
              <Help />
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
  );
}

export default App;
