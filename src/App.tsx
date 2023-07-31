import { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet, useLocation, useNavigate, Link} from 'react-router-dom';
import './main.global.scss';
import { hot } from "react-hot-loader/root";

import React from "react";
import { Home } from "./shared/Pages/Home";

import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./store/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function AppComponent() {
    return (
        <Provider store={store}>
            <Home />
            {/* <Login /> */}
        </Provider>
        
    );
}

export const App = hot(() => <AppComponent />);
