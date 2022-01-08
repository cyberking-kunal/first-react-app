import React from "react";

function InputField({ ...rest }) {
    return (
        <input
            placeholder="Please enter here"
            {...rest}
        />
    )
}

export default InputField;