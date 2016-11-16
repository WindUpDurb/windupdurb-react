"use strict";

import React from "react";

export function generateArticleBody (arrayOfParts) {
    let toReturn = [], forward = 1;
    for (let i = 0; i < arrayOfParts.length; i += forward) {
        if (arrayOfParts[i].contentType == "Image")  {
            forward = 1;
            console.log("Image: ", arrayOfParts[i].content)
            toReturn.push(
                <div key={i}>
                    <img src={`/images/${arrayOfParts[i].content}`} className="essayImages center-block img-thumbnail img-responsive" />
                </div>
            );
            continue;
        }
        if (arrayOfParts[i].contentType === "SectionHeader") {
            forward = 1;
            toReturn.push(
                <div key={i} className="sectionHeaderDiv">
                    <span className="sectionHeader greyText">{arrayOfParts[i].content}</span>
                </div>
            );
        }
        if (arrayOfParts[i].contentType === "Text" && !arrayOfParts[i + 1] || arrayOfParts[i + 1].contentType !== "Link") {
            forward = 1;
            toReturn.push(
                <p className="essayText" key={i}>
                    {arrayOfParts[i].content}
                </p>
            );
            continue;
        }
        if (arrayOfParts[i].contentType === "Text" && arrayOfParts[i + 1] && arrayOfParts[i + 1].contentType === "Link" && arrayOfParts[i + 2] && arrayOfParts[i + 2].contentType === "TextAfterLink") {
            forward = 3;
            toReturn.push(
                <p className="essayText" key={i}>
                    {arrayOfParts[i].content}
                    <a href={arrayOfParts[i + 1].link} target="_blank">{arrayOfParts[i + 1].content}</a>
                    {arrayOfParts[i + 2].content}
                </p>
            );
            continue;
        }
        if (arrayOfParts[i].contentType === "Text" && arrayOfParts[i + 1] && arrayOfParts[i + 1].contentType === "Link" && arrayOfParts[i + 2] && arrayOfParts[i + 2].contentType !== "TextAfterLink") {
            forward = 2;
            toReturn.push(
                <p className="essayText" key={i}>
                    {arrayOfParts[i].content}
                    <a href={arrayOfParts[i + 1].link} target="_blank">{arrayOfParts[i + 1].content}</a>
                </p>
            );
            continue;
        }
    }
    return toReturn;
}