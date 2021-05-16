import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

