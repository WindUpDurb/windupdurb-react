"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as ArticleActions from "../../actions/ArticleActions";
import {ParallaxHeader} from "../common/ParallaxHeader";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.ArticleActions.retrieveArticles();
    }


    render() {
        return (
            <div>
                <ParallaxHeader home backgroundUrl="/images/thumbUpCompressed.jpg"/>
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
    if (state.initialState.articles) articles = state.initialState.articles;
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