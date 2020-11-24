import { BrowserRouter, Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/">
              <Home  />
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
