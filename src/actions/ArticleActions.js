"use strict";

import * as types from "./actionTypes";

export function dispatchArticleRetrievalSuccess(articles) {
    return {
        type: types.RETRIEVE_ALL_ARTICLES,
        articles
    };
}

export function retrieveArticles() {
    return function(dispatch) {
        fetch("/api/essays")
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(dispatchArticleRetrievalSuccess(parsedResponse));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}