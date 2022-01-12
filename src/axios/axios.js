import axios from "axios";
import { emailsAction } from "../redux/emails/emailsAction";



export const axiosDelete = (uid, password, dispatch)=> {
 
  
    if (uid) {
    }

    var data = {
      password: password,
      id: uid,
    };

    var config = {
      method: "delete",
      url: "https://cristianherreradevapi.herokuapp.com/api/emails",
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        

      })
      .catch(function (error) {
        console.log(error);
      });

     


}

