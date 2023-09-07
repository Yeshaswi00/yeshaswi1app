import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (
    <div className='mybox'>
      <h1>welcome page</h1>
      <Link to="/aboutus">ABoutUs</Link>
      &nbsp;&nbsp;
      <Link to="/courses">Courses</Link>
     <Outlet></Outlet>
    </div>
    
  );
}

export default App;
