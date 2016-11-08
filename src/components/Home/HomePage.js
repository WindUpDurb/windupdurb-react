"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ArticleActions from "../../actions/ArticleActions";
import {browserHistory} from "react-router";
import {ParallaxHeader} from "../common/ParallaxHeader";
import {ArticleCard} from "../common/ArticleCard";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.goToArticle = this.goToArticle.bind(this);
    }

    componentWillMount() {
        this.props.ArticleActions.retrieveArticles();
    }

    goToArticle(article) {
        browserHistory.push(`/writing/${article.url}`);

    }


    render() {
        let articleCards;
        if (this.props.articles) articleCards = this.props.articles.map((article, index) => <ArticleCard goToArticle={this.goToArticle} key={index} article={article} index={index} />);
        return (
            <div>
                <ParallaxHeader home backgroundUrl="/images/thumbUpCompressed.jpg"/>
                <div className="container">
                    {articleCards}
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    ArticleActions: PropTypes.object,
    articles: PropTypes.array
};

function mapStateToProps (state, ownProps) {
    let articles;
    if (state.initialState && state.initialState.articles) articles = state.initialState.articles;
    return {
        articles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ArticleActions: bindActionCreators(ArticleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);