import "./App.css";
import { Weather } from "./Weather.js";
import {BrowserRouter, Route, Redirect} from "react-router-dom"

export function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/weather/:locationId">
            <Weather />
          </Route>
          <Route path="/" exact>
            <Redirect to="/weather/615702"/>
          </Route>
        </div>
      </BrowserRouter>
    );
}
