import React from "react";
import Home from "./pages/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Teste = () => {
    return <h1>olá teste</h1>;
};

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/teste" component={Teste} />
        </Switch>
    </BrowserRouter>
);

export default Router;
