import {PASSWORD, ERROR} from './passwordActions'


const INITIAL_STATE = {
 
  password: '',
  error: false
  
};

const passwordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
 

      case PASSWORD :
      return {
        ...state,
        password: action.payload,
      };

      case ERROR:
        return {
          ...state,
          error: !state.error,
        };
  
  



    default:
      return state;
  }
};

export default passwordReducer;