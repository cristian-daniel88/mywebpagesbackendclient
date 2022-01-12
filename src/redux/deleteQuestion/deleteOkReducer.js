
import { ID, OK } from "./deleteOkActions";



const INITIAL_STATE = {
 
  ok: false,
  id: ''
  
};

const okReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
 
      case OK:
        return {
          ...state,
          ok: !state.ok,
        };
        
      case ID:
          return {
            ...state,
            id: action.payload,
          };
  



    default:
      return state;
  }
};

export default okReducer;