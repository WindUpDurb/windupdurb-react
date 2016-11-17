"use strict";

import React, {PropTypes} from "react";
import * as HelperFunctions from "../../actions/HelperFunctions";

export const ArticleBody = ({body, title, datePosted}) => {
    let articleText;
    if (body) articleText = HelperFunctions.generateArticleBody(body);
    return (
        <div style={{padding: "15px 13% 15px 13%"}} className="text-center">
            <h2 className="essayTitle">{title}</h2>
            <p><b>{datePosted}</b></p>
            <br/>
            {articleText}
        </div>
    );
};

ArticleBody.propTypes = {
    body: PropTypes.array,
    title: PropTypes.string,
    datePosted: PropTypes.string
};