"use strict";

import React, {PropTypes} from "react";
import {MyCard} from "./MyCard";
import {Link} from "react-router";

export const ParallaxHeader = ({home, backgroundUrl}) => {
    let mycard, url = `url('${backgroundUrl}')`;
    if (home) mycard = <MyCard/>;
    return (
            <div style={{backgroundImage: url}} id="parallaxHome">
                <div className="navbarMine">
                    <div className="container-fluid navbarInnerContainer">
                        <div className="col-xs-12 col-sm-4 whiteText"><span>Wind-UpDurb</span></div>
                        <Link to="/home" className="col-xs-6 col-sm-1 col-sm-offset-6 whiteText">Home</Link>
                        <Link to="/about" className="col-xs-6 col-sm-1 whiteText">About</Link>
                    </div>
                </div>
                {mycard}
            </div>
    );

};

ParallaxHeader.propTypes = {
    home: PropTypes.bool,
    backgroundUrl: PropTypes.string
};