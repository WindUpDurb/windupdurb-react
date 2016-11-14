"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ArticleActions from "../../actions/ArticleActions";
import {ParallaxHeader} from "../common/ParallaxHeader";
import {ArticleBody} from "./ArticleBody";

class ArticleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.ArticleActions.retrieveSingleEssay(this.props.location.pathname.split("/")[2]);
    }

    render() {
        let backgroundUrl, textBody;
        console.log("Check: ", this.props.currentArticle)
        if (this.props.currentArticle && this.props.currentArticle.textBody) textBody = this.props.currentArticle.textBody;
        if (this.props.currentArticle && this.props.currentArticle.photoHeader) backgroundUrl = this.props.currentArticle.photoHeader;
        return (
            <div>
                <ParallaxHeader backgroundUrl={backgroundUrl}/>
                <ArticleBody body={textBody}/>
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