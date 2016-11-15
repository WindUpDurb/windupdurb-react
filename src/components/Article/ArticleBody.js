"use strict";

import React, {PropTypes} from "react";

export const ArticleBody = ({body}) => {
    console.log("Body: ", body);
    let articleText;
    if (body) articleText = body.map((textPart, index) => {
        let htmlElement, content;
        switch (textPart.contentType) {
            case "Image":
                return (
                    <div key={index}>
                        <img src={textPart.content} className="essayImages center-block img-thumbnail img-responsive" />
                    </div>
                );
            case "SectionHeader":
                return (
                    <div key={index} className="sectionHeaderDiv">
                        <span className="sectionHeader greyText">{textPart.content}</span>
                    </div>
                );
            case "Text":
                // htmlElement = document.createElement("p");
                // htmlElement.innerHTML = textPart.content;
                // console.log("Check: ", htmlElement)
                // return <span key={index}>{htmlElement}</span>;

                //////////////////Will have to restructure database/data because
                /////////////////in Angular version, I was able to parse HTML elements from a string
                //////////////////Haven't found a non-Angular alternative yet.
                return;

            case "Divider":
                return <div key={index}>Divider</div>;
        }

    });
    return (
        <div>
            {articleText}
        </div>
    );
};

ArticleBody.propTypes = {
    body: PropTypes.array
};