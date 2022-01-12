import { axiosDelete } from '../../axios/axios';
import { DELETE, EMAILS, TOTAL } from './emailsAction';
import { deleteUtil } from './emailUtils';



const INITIAL_STATE = {
 
  total: null,
  emails: null,
 
  
};


const emailsReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
 

      case TOTAL :
      return {
        ...state,
        total: action.payload,
      };

      case EMAILS:
        return {
          ...state,
          emails: action.payload,
        };

       case DELETE:
         return {
           ...state,
           emails: deleteUtil( state.emails,action.payload),
           total : state.total - 1
         }
  
  



    default:
      return state;
  }
};

export default emailsReducer;