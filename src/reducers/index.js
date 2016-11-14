"use strict";

import { combineReducers } from "redux";
import articlesReducer from "./articlesReducer";
import requestStatusReducer from "./requestsInProgress";

const rootReducer = combineReducers({
    articles: articlesReducer,
    requestsInProgress: requestStatusReducer
});

export default rootReducer;
