import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes/router';

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routes)} /> 
    </div>
  );
}

export default App;
