"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function articlesReducer (state = initialState.articles, action) {
    switch(action.type) {
        case types.RETRIEVE_ALL_ARTICLES:
            return (
                Object.assign({}, state, {articles: action.articles})
            );

        case types.RETRIEVED_CURRENT_ARTICLE:
            return (
                Object.assign({}, state, {currentArticle: action.article})
            );

        default:
            return state;
    }
}