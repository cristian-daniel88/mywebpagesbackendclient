import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import {
  EmailsContainer,
  Li,
  MessageContainer,
  TotalContainer,
} from "./EmailsStyles";
import { FaTrashAlt } from "react-icons/fa";
import { emailsAction, totalAction } from "../../redux/emails/emailsAction";
const axios = require("axios");

function Emails() {
  const emails = useSelector((state) => state.emails.emails);
  const total = useSelector((state) => state.emails.total);
  const password = useSelector(state => state.password.password);
  const dispatch = useDispatch()

  const handleDelete = (uid) => {
    
    if (uid) {
      

    }

   
    var data = {
       password: password, 
       id: uid
       }

    var config = {
      method: "delete",
      url: "http://cristianherreradevapi.herokuapp.com/api/emails",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {

        var data2 = {password: password }

        var config2 = {
          method: "post",
          url: "http://cristianherreradevapi.herokuapp.com/api/emails?limite=20&desde=0",
          headers: {},
          data: data2,
        };
    
        axios(config2)
          .then(function (response) {
           let error = response.data.msg;
    
           if (error === 'denegado') {
               
               return
           }
    
           let emails = response.data.emails;
           dispatch(emailsAction(emails))
    
           let totalEmails = response.data.total;
           dispatch(totalAction(totalEmails));
    

          })
          .catch(function (error) {
            console.log(error);
          });
     
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <EmailsContainer>
      <TotalContainer>Total Emails: {total}</TotalContainer>
      <h1>Emails: </h1>

      <MessageContainer>
        {emails?.map((value, i) => {
          return (
            <Li key={value.uid}>
              <div
                style={{
                  cursor: "pointer",
                  textAlign: "right",
                  fontSize: "1.5em",
                  background: "#d8f6ff",
                }}
              >
                <div>
                  <FaTrashAlt
                    onClick={() => {
                      handleDelete(value.uid);
                    }}
                  />
                </div>
              </div>
              <div>Email: </div>
              <div>{value.email} </div>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              ></div>

              <div>Subject: {value.subject}</div>
              <div>Text:</div>
              <div>{value.text}</div>
            </Li>
          );
        })}
      </MessageContainer>
    </EmailsContainer>
  );
}

export default Emails;
