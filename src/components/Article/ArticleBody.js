"use strict";

import React, {PropTypes} from "react";

export const ArticleBody = ({body}) => {
    console.log("Body: ", body);
    // let articleText = body.map((textPart, index) => {
    //     if (textPart.contentType === "Image") return (
    //         <div key={index}>
    //             <img src={textPart.content} className="essayImages center-block img-thumbnail img-responsive" />
    //         </div>
    //     );
    //     if (textPart.contentType === "SectionHeader") return (
    //         <div key={index} className="sectionHeaderDiv">
    //             <span className="sectionHeader greyText">{textPart.content}</span>
    //         </div>
    //     );
    // });
    return (
        <div>
            {articleText}
        </div>
    );
};

ArticleBody.propTypes = {
    body: PropTypes.array
};