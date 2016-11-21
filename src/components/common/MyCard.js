"use strict";

import React, {PropTypes} from "react";

export const MyCard = () => {
    let openTwitter = () => window.open("https://twitter.com/WindUpDurb", "_blank");
    let openGithub = () => window.open("https://github.com/windupdurb", "_blank");
    return (
        <div>
            <div id="homeCard" className="container text-center">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-4 well">
                        <img id="myImage" src="/images/myphoto.jpg" className="img-circle"/>
                            <br/>
                                <div className="cardMainTextDiv">
                                    <span className="cardtextMain">Find here my meditations</span>
                                    <br/>
                                        <span className="cardtextMain">On Javascript, Web Development, and Life</span>
                                </div>
                                <div className="cardNameDiv">
                                    <span className="cardtextMain">-David</span>
                                </div>
                                <div className="row cardMainTextDiv">
                                        <img style={{cursor: "pointer"}} onClick={openTwitter} src="/images/twitter.png"/>
                                    <div style={{display: "inline-block", paddingLeft: "10px"}}>
                                        <img style={{cursor: "pointer"}} onClick={openGithub} src="/images/github-logo.png"/>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>


        </div>
    );
};