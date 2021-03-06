import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import okReducer from "./deleteQuestion/deleteOkReducer";
import emailsReducer from "./emails/emailsReducer";

//reducers
import passwordReducer from "./password/passwordReducer";
import scrollReducer from "./scroll/scrollReducer";



const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [''],
  };
  
  const rootReducer = combineReducers({
      password: passwordReducer,
      emails: emailsReducer,
      scroll: scrollReducer,
      ok: okReducer
  });
  
  export default persistReducer(persistConfig, rootReducer);
  






