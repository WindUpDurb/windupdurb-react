"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {WhiteboardInput} from "./Ch-Week2-Whiteboard-Clicker";

// let initialState = {
//     names: [{firstName: "Joe", lastName: "Mama}]
// };

class WhiteboardChallenge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputForm: {}
        };

        this.updateInputForm = this.updateInputForm.bind(this);
        this.submitNewForm = this.submitNewForm.bind(this);
    }


    componentWillMount() {
        // let options = {
        //     method: "GET"
        // };
        // fetch("/api/my", options)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(parsedResponse => {
        //
        //     })
        //     .catch(error => {
        //         console.lohttps://www.google.com/search?q=timer&oq=timer&aqs=chrome.0.69i59j69i65j0l4.921j0j9&sourceid=chrome&ie=UTF-8&pws=1g("Error: ", error);
        //     });
        console.log("check: ", this.props);
    }

    dispatchAddNewNameSuccess(totalNames) {
        return {type: "NEW_NAME_SUCCESS", totalNames};
    }

    updateInputForm (event) {
        let inputForm = this.state.inputForm;
        console.log("Event.target.name:", event.target.name);
        console.log("Event.target.value:", event.target.value);
        let updatedInputForm = Object.assign({}, inputForm, {[event.target.name]: event.target.value});
        this.setState({inputForm: updatedInputForm});
    }

    submitNewForm() {
        if (this.state.inputForm.firstName && this.state.inputForm.lastName) {
            console.log("Check: ", this.state.inputForm);
            // let options = {
            //     method: "POST",
            //     body: JSON.stringify(this.state.inputForm),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // };
            // fetch("/api/addNewName", options)
            //     .then(response => {
            //         return response.json();
            //     })
            //     .then(parsedResponse => {
            //         this.props.dispatch(this.dispatchAddNewNameSuccess());
            //     })
            //     .catch(error => {
            //         console.log("Error: ", error);
            //     });
        } else {
            alert("You need both a first and last name");
        }
    }




    render() {
        let totalNames;
        if (this.props.totalNames) totalNames = this.props.totalNames.map((name, index) => {
            return <li key={index}>{`${name.lastName}, ${name.firstName}`}</li>;
        });
        ////////below is representation of above, and it works.
        // totalNames = [{firstName: "David", lastName: "Urbina"}, {firstName:"Joe", lastName: "Mama"}].map((name, index) => {
        //     return <li key={index}>{`${name.lastName}, ${name.firstName}`}</li>;
        // });
        return (
            <div>
                <ul>
                    {totalNames}
                </ul>
                <WhiteboardInput updateInput={this.updateInputForm} submitForm={this.submitNewForm}/>
            </div>
        );
    }
}

WhiteboardChallenge.propTypes = {
    //an array of objects {firstName: "David", lastName: "Urbina"}
    totalNames: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    // let totalNames;
    // if (state.initialState.totalNames) clicker = state.initialState.totalNames;
    return {
        // totalNames
    };
}

//example of functional currying
export default connect(mapStateToProps)(WhiteboardChallenge);