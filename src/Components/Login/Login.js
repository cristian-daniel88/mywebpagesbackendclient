import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { emailsAction, totalAction } from "../../redux/emails/emailsAction";
import { passwordAction } from "../../redux/password/passwordActions";
import { scrollDownAction} from "../../redux/scroll/scrollActions";
import { Button, Form, FormBack, FormContainer, Input, Label } from "./LoginStyles";
const axios = require("axios");

function Login() {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    
    return () => {
      
    }
  }, [])
 
  

  const handSubmit = (e) => {
    e.preventDefault();

    const data = {password: password }

    const config = {
      method: "post",
      url: `http://cristianherreradevapi.herokuapp.com/api/emails`,
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

       const emails = response.data.emails;
       dispatch(emailsAction(emails))

       const totalEmails = response.data.total;
       dispatch(totalAction(totalEmails));

       dispatch(scrollDownAction(totalEmails))




      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <Form onClick={handSubmit}>
  
        <Label>Password</Label>


        <Input
           type="password"
           onChange={(e) => {
             setPassword(e.target.value);
           }}
        
        />
        
      
        <Button>Enter</Button>
      </Form>
      {/* <FormBack/> */}
    </FormContainer>
  );
}

export default Login;
