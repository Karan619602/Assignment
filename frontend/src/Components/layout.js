import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';

export const Layout=()=> {
  return (
    <div className="Layout">
          <h1> Welcome To APP</h1>
          <h2>Click Here to Submt the form</h2>
          <Link to="/form"> Form</Link>
          <Link to="/getuser"> Get User</Link>
          
    </div>
  );
}

