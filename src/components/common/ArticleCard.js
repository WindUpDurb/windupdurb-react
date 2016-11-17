"use strict";

import React, {PropTypes} from "react";

export const ArticleCard = ({index, article, goToArticle}) => {
    let toArticle = () => goToArticle(article);

    if (index === 0) {
        return (
            <div onClick={toArticle} style={{cursor: "pointer"}} className="row cardEffect">
                <div className="text-center paddingImage col-sm-6 col-lg-4">
                    <img className="img-responsive firstPageImage" src={article.photoHeader}/>
                </div>
                <div className="col-sm-6 col-lg-8 firstPageDetailDiv">
                    <span className="firstPageTitle">{article.title}</span>
                    <br/><span className="firstPageIntro">{article.introduction}</span>
                    <br/><br/><br/>
                    <span className="firstPageDate">{article.datePosted}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div onClick={toArticle} style={{cursor: "pointer"}} className="cardEffect smallArticleCard col-sm-6 col-lg-4">
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
    index: PropTypes.number,
    goToArticle: PropTypes.func
};