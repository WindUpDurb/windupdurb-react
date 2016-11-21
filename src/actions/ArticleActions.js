"use strict";

import * as types from "./actionTypes";

export function dispatchArticleRetrievalSuccess(articles) {
    return {
        type: types.RETRIEVE_ALL_ARTICLES,
        articles
    };
}

export function dispatchCurrentArticle(article) {
    return {
        type: types.RETRIEVED_CURRENT_ARTICLE,
        article
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

export function retrieveSingleEssay(url) {
    return function(dispatch) {
        let options = {
            method: "PUT",
            body: JSON.stringify(url.split("-")),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch("/api/essays/getSingleEssay", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                if (parsedResponse.url === url) dispatch(dispatchCurrentArticle(parsedResponse));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };
}