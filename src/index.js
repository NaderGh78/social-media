import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkMoodContextProvider } from "../src/context/darkModContext";
import { AuthContextProvider } from "../src/context/AuthContext";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkMoodContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkMoodContextProvider>
  </React.StrictMode>
); 