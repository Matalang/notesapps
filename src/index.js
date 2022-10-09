import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EditPage from "./pages/Edit.js";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(  
  <BrowserRouter>
   <EditPage />
  </BrowserRouter>, 
  document.getElementById('root')
);

