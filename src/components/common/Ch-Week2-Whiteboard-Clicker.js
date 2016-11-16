"use strict";

import React, {PropTypes} from "react";

export const WhiteboardInput = ({submitForm, updateInput}) => {

    return (
        <div>
            <input onChange={updateInput} name="firstName" type="text"/>
            <input onChange={updateInput} name="lastName" type="text"/>
            <button onClick={submitForm}>Add</button>
        </div>
    );
};

WhiteboardInput.propTypes = {
    submitForm: PropTypes.func,
    updateInput: PropTypes.func
};