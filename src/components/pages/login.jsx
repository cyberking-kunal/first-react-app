import React, { useState } from "react";
import { InputField } from "../common";

function Login() {
    const initialData = {
        userName: "",
        password: ""
    }
    const [data, setData] = useState(initialData);

    const onChange = ({ value, name }) => {
        // setData(prevValue => ({
        //     ...prevValue,
        //     [name]: value
        // }));

        setData({
            ...data,
            [name]: value
        })
    };


    console.log(data);
    
    return (
        <>
            <div>Username*</div>
            <div>
                <InputField
                    name="userName"
                    placeholder="Enter Username"
                    value={data?.userName}
                    onChange={e => onChange(e.target)}
                />
            </div>
            <div>Password*</div>
            <div>
                <InputField
                    name="password"
                    placeholder="Enter Password"
                    value={data?.password}
                    onChange={e => onChange(e.target)}
                />
            </div>
            <button>Log In</button>
        </>
    )
}

export default Login;