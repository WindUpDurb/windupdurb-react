"use strict";

import React from "react";
import { Route, IndexRedirect } from "react-router";
import App from "./components/App";
import HomePage from "./components/Home/HomePage";
import ArticleComponent from "./components/Article/ArticleComponent";



//bring in react router redux
export const generateRoutes = (store) => {

    return (
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="/home" component={HomePage} />
            <Route path="/writing/:articleTitle" component={ArticleComponent} />
        </Route>
    );

};

