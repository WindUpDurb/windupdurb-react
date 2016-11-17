"use strict";

import React from "react";
import {browserHistory} from "react-router";

export const Footer = () => {
    let toHome = () => browserHistory.push("/home");
    let toAbout = () => browserHistory.push("/about");
    let toGithub = () => window.open("https://github.com/windupdurb", '_blank');
    return (
        <div style={{paddingTop: "5%"}}>
            <div className="row">
                <div className="col-xs-1 col-xs-offset-1 col-sm-1 col-sm-offset-4">
                    <span className="footerLinks" onClick={toHome}>Home</span>
                </div>
                <div className="col-xs-1 col-xs-offset-1 col-sm-1">
                    <span className="footerLinks" onClick={toAbout}>About</span>
                </div>
                <div className="col-xs-1 col-xs-offset-1 col-sm-1">
                    <span onClick={toGithub} className="footerLinks">Github</span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-xs-offset-10 col-xs-2">
                    <div className="gearDiv">
                        <i className="fa fa-cog fa-3x fa-spin" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        </div>
    );
};