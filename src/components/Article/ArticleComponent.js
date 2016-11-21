"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ArticleActions from "../../actions/ArticleActions";
import {ParallaxHeader} from "../common/ParallaxHeader";
import {ArticleBody} from "./ArticleBody";
import {Disqus} from "./Disqus";

class ArticleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.ArticleActions.retrieveSingleEssay(this.props.location.pathname.split("/")[2]);
    }

    render() {
        let backgroundUrl, textBody, title, datePosted, url;
        if (this.props.currentArticle && this.props.currentArticle.url) url = this.props.currentArticle.url;
        if (this.props.currentArticle && this.props.currentArticle.datePosted) datePosted = this.props.currentArticle.datePosted;
        if (this.props.currentArticle && this.props.currentArticle.title) title = this.props.currentArticle.title;
        if (this.props.currentArticle && this.props.currentArticle.textBody) textBody = this.props.currentArticle.textBody;
        if (this.props.currentArticle && this.props.currentArticle.photoHeader) backgroundUrl = this.props.currentArticle.photoHeader;
        return (
            <div>
                <ParallaxHeader backgroundUrl={backgroundUrl}/>
                <ArticleBody title={title} datePosted={datePosted} body={textBody}/>
                <Disqus url={url}/>
            </div>
        );
    }
}

ArticleComponent.propTypes = {
    ArticleActions: PropTypes.object,
    currentArticle: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let currentArticle;
    console.log("State: ", state);
    if (state.articles && state.articles.currentArticle) currentArticle = state.articles.currentArticle;
    return {
        currentArticle
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ArticleActions: bindActionCreators(ArticleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);