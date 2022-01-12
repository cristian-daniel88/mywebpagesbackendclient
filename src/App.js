
import { useSelector } from 'react-redux';
import './App.css';

import Emails from './Components/Emails/Emails';
import Login from './Components/Login/Login';


function App() {
  const password = useSelector(state => state.password.password);
    
  return (
    <>
    {password ? (<Emails/>) : (<Login/>)}
   
    </>
  )
  
}

export default App;
