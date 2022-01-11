import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { emailsAction, totalAction } from "../../redux/emails/emailsAction";
import { passwordAction } from "../../redux/password/passwordActions";
import { Form, FormContainer } from "./LoginStyles";
const axios = require("axios");

function Login() {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handSubmit = (e) => {
    e.preventDefault();

    var data = {password: password }

    var config = {
      method: "post",
      url: "http://cristianherreradevapi.herokuapp.com/api/emails?limite=20&desde=0",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
       let error = response.data.msg;

       if (error === 'denegado') {
           
           return
       }

       dispatch(passwordAction(password));

       let emails = response.data.emails;
       dispatch(emailsAction(emails))

       let totalEmails = response.data.total;
       dispatch(totalAction(totalEmails));




      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <Form onClick={handSubmit}>
        <label style={{ marginBottom: "10px" }}>Password</label>

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button style={{ marginTop: "50px" }}>Enter</button>
      </Form>
    </FormContainer>
  );
}

export default Login;
