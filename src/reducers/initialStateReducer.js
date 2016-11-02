"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function initialStateReducer (state = initialState.articles, action) {
    switch(action.type) {
        case types.RETRIEVE_ALL_ARTICLES:
            return (
                Object.assign({}, state, {articles: action.articles})
            );

        default:
            return state;
    }
}