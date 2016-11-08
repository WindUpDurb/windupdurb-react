"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";

class ArticleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Article
            </div>
        );
    }
}

ArticleComponent.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(ArticleComponent);