"use strict";

import React, {PropTypes} from "react";
import * as HelperFunctions from "../../actions/HelperFunctions";

export const ArticleBody = ({body}) => {
    let articleText;
    if (body) articleText = HelperFunctions.generateArticleBody(body);
    return (
        <div>
            {articleText}
        </div>
    );
};

ArticleBody.propTypes = {
    body: PropTypes.array
};