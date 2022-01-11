import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import emailsReducer from "./emails/emailsReducer";

//reducers
import passwordReducer from "./password/passwordReducer";



const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [],
  };
  
  const rootReducer = combineReducers({
      password: passwordReducer,
      emails: emailsReducer
  });
  
  export default persistReducer(persistConfig, rootReducer);
  






