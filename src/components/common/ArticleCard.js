"use strict";

import React, {PropTypes} from "react";

export const ArticleCard = ({index, article}) => {
    if (index === 0) {
        return (
            <div className="row cardEffect">
                <div className="text-center paddingImage col-sm-6 col-lg-4">
                    <img className="img-responsive firstPageImage" src={article.photoHeader}/>
                </div>
                <div className="hidden-xs col-sm-6 col-lg-8 firstPageDetailDiv">
                    <span className="firstPageTitle"><a>{article.title}</a></span>
                    <br/><span className="firstPageIntro">{article.introduction}</span>
                    <br/><br/><br/>
                    <span className="firstPageDate">{article.datePosted}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cardEffect smallArticleCard col-sm-6 col-lg-4">
                <div className="paddingImage">
                    <img className="img-responsive" src={article.photoHeader}/>
                </div>
                <br/><br/>
                <span className="PageTitle">{article.title}</span>
                <br/><span className="PageIntro">{article.introduction}</span>
                <span className="PageDate">{article.datePosted}</span>
            </div>
        );
    }
};

ArticleCard.propTypes = {
    article: PropTypes.object,
    index: PropTypes.number
};