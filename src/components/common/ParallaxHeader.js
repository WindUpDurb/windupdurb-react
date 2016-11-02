"use strict";

import React, {PropTypes} from "react";
import {MyCard} from "./MyCard";

export const ParallaxHeader = ({home, backgroundUrl}) => {
    let mycard, url = `url('${backgroundUrl}')`;
    if (home) mycard = <MyCard/>;
    return (
            <div style={{backgroundImage: url}} id="parallaxHome">
                <div className="navbarMine">
                    <div className="container-fluid navbarInnerContainer">
                        <div className="col-xs-12 col-sm-4"><span>Wind-UpDurb</span></div>
                        <a className="col-xs-6 col-sm-1 col-sm-offset-6" >Home</a>
                        <a className="col-xs-6 col-sm-1">About</a>
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