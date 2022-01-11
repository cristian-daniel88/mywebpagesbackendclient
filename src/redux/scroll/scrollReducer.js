import { SCROLL, SCROLL_ERROR, SCROLL_MENOS5 } from "./scrollActions";
import { utilScroll } from "./scrollUtils";



const INITIAL_STATE = {
 
  scroll: 0,
  error: false,
  scrollDown: null,
 
  
};

const scrollReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
 

      case SCROLL :
      return {
        ...state,
        scroll: action.payload - 5,
        scrollDown: action.payload - 5
      };

      case SCROLL_ERROR:
        return {
          ...state,
          error: !state.error,
        };

      case SCROLL_MENOS5: 
        return {
          ...state,
          scrollDown: utilScroll(state.scrollDown)
        }
       
  
  



    default:
      return state;
  }
};

export default scrollReducer;