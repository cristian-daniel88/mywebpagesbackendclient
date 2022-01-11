import React, { useEffect, useRef } from "react";
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
import { scrollDownAction, scrollMenos5 } from "../../redux/scroll/scrollActions";

function Emails() {
  const emails = useSelector((state) => state.emails.emails);
  const total = useSelector((state) => state.emails.total);
  const password = useSelector((state) => state.password.password);
  const dispatch = useDispatch();

  const scroll = useSelector((state) => state.scroll);


  

  const handleDelete = async (uid) => {
    axiosDelete(uid, password);

   dispatch(emailsDeleteAction(uid))


    // const data = { password: password };
    // const config = {
    //   method: "post",
    //   url: `http://cristianherreradevapi.herokuapp.com/api/emails`,
    //   headers: {},
    //   data: data,
    // };
    // axios(config)
    //   .then(function (response) {
    //     let error = response.data.msg;

    //     if (error === "denegado") {
    //       return;
    //     }


    //     let emails = response.data.emails;
    //     dispatch(emailsAction(emails));

    //     let totalEmails = response.data.total;
    //     dispatch(totalAction(totalEmails));

    //     dispatch(scrollDownAction(totalEmails))
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });



  };

  async function scrollDown () {

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
    
   
    
      dispatch(scrollMenos5());

    
      if(scroll.scrollDown < 0) {

        return
      }
 
      
      
   
    
      console.log(scroll.scrollDown)

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
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollDown)
    return () => {
      
      window.removeEventListener('scroll', scrollDown);

    }
  }, [scrollDown])

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
    </EmailsContainer>
  );
}

export default Emails;

// useEffect(() => {
//   //
//   window.addEventListener("scroll", async () => {
//     const { scrollTop, clientHeight, scrollHeight } =
//       document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight) {
//       console.log("Estoy en el final?");

//       var data4 = { password: password };

//       var config4 = {
//         method: "post",
//         url: `http://cristianherreradevapi.herokuapp.com/api/emails?limite=&desde=${0}`,
//         headers: {},
//         data: data4,
//       };

//       axios(config4)
//         .then(function (response) {
//           let error = response.data.msg;

//           if (error === "denegado") {
//             return;
//           }

//           let emails2 = response.data.emails;
//           dispatch(emailsAction(emails2));

//           let totalEmails2 = response.data.total;
//           dispatch(totalAction(totalEmails2));
//         })
//         .catch(function (error) {
//           console.log(error);
//         });

//       //
//     }
//   });
//   return () => {

//   };
// }, []);
