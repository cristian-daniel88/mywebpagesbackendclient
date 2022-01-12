import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  EmailsContainer,
  Li,
  MessageContainer,
  TotalContainer,
} from "./EmailsStyles";
import { FaTrashAlt } from "react-icons/fa";

import { axiosDelete } from "../../axios/axios";
import { passwordAction } from "../../redux/password/passwordActions";
import { emailsAction, emailsDeleteAction, totalAction } from "../../redux/emails/emailsAction";
import axios from "axios";
import { scrollErrorAction, scrollMenos5 } from "../../redux/scroll/scrollActions";
import Loading from "../Loading/Loading";
import AlertDelete from "../AlertDelete/AlertDelete";
import { idAction } from "../../redux/deleteQuestion/deleteOkActions";

function Emails() {
  const emails = useSelector((state) => state.emails.emails);
  const total = useSelector((state) => state.emails.total);
  const password = useSelector((state) => state.password.password);
  const dispatch = useDispatch();
  const ok = useSelector(state => state.ok.ok)


  const scroll = useSelector((state) => state.scroll);


  

  const handleDelete = async (uid) => {
    dispatch(scrollErrorAction())
    dispatch(idAction(uid))
  

    if (ok) {
      
      axiosDelete(uid, password);
      
      dispatch(emailsDeleteAction(uid))
      
    }
   
    
  };



  async function scrollDown () {

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      
      if(scroll.scrollDown < 0) {
        return
      }
    
      dispatch(scrollMenos5());

      var data = { password: password };
      var config = {
        method: "post",
        url: `http://cristianherreradevapi.herokuapp.com/api/emails?limite=${total}&desde=${scroll.scrollDown}`,
        headers: {},
        data: data,
      };
      axios(config)
        .then(function (response) {
          let error = response.data.msg;
  
          if (error === "denegado") {
            return;
          }
  
          dispatch(passwordAction(password));
  
          let emails = response.data.emails;
          dispatch(emailsAction(emails));
  
          let totalEmails = response.data.total;
          dispatch(totalAction(totalEmails));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollDown)
    return () => {
      window.removeEventListener('scroll', scrollDown);
    }
  }, [scrollDown]);
  
  return (
    <EmailsContainer>
      <TotalContainer>Total Emails: {total}</TotalContainer>
      <h1>Emails: </h1>
      <MessageContainer>
        {emails?.map((value, i) => {
          return (
            <Li key={value.uid}>
              <AlertDelete uid={value.uid}/>
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

              <div>Date: {value.fecha}</div>

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
      <Loading/>
    </EmailsContainer>
  );
}

export default Emails;

