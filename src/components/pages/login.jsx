import React, { useState } from "react";
import { Button, InputField, Label } from "../common";

function Login() {
  const initialData = {
    userName: "",
    password: "",
  };
  const [data, setData] = useState(initialData);

  const onChange = ({ value, name }) => {
    // setData(prevValue => ({
    //     ...prevValue,
    //     [name]: value
    // }));

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Label>Username*</Label>
      <div>
        <InputField
          name="userName"
          placeholder="Enter Username"
          value={data?.userName}
          onChange={(e) => onChange(e.target)}
        />
      </div>
      <Label>Password*</Label>
      <div></div>
      <div>
        <InputField
          name="password"
          placeholder="Enter Password"
          value={data?.password}
          onChange={(e) => onChange(e.target)}
        />
      </div>
      <Button>Log In</Button>
    </>
  );
}

export default Login;
