"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ParallaxHeader} from "../common/ParallaxHeader";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
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

};

function mapStateToProps (state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(HomePage);