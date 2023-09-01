import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Products from './products';
import Project from './projects';
import Reviews from './review';
function App() {
  
  return (
    <div>
      
    <Products></Products>
   <Project></Project>
   <Reviews></Reviews>
     
      
    </div>
  );
}

export default App;
