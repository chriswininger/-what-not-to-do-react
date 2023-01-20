import {Route, Switch} from "react-router-dom";
import {ExampleOne} from "./pages/ExampleOne/ExampleOne";
import HomePage from "./pages/HomePage/HomePage";

export default function Routes() {
    return (
        <Switch>
            <Route
                path="/example-1"
                exact
                component={ExampleOne}
            />

            <Route component={HomePage} />
        </Switch>
    )
}
