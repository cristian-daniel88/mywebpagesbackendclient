import { EMAILS, TOTAL } from './emailsAction';



const INITIAL_STATE = {
 
  total: null,
  emails: null
  
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
  
  



    default:
      return state;
  }
};

export default emailsReducer;