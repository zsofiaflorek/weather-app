import "./App.css";
import { Weather } from "./Weather.js";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { SearchPage } from "./SearchPage";

export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/weather/:locationId">
                    <Weather />
                </Route>
                <Route path="/" exact>
                    <Redirect to="/search" />
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
            </div>
        </BrowserRouter>
    );
}
