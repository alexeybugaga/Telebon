import { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet, useLocation, useNavigate, Link} from 'react-router-dom';
import './main.global.scss';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { SideBar } from "./shared/SideBar";
import { Content } from "./shared/Content";
import { Desktop } from "./shared/Content/Desktop";
import React from "react";
import { Home } from "./shared/Pages/Home";
import { Login } from "./shared/Pages/Login";
import { useMenuState } from "./shared/hooks/useMenuState";
import { menuStateContext } from "./shared/context/menuStateContext";



function AppComponent() {
    const [menuNumber, setMenunumber] = useState(1);
    // const [menuNumber] = useMenuState();
    // const routes = useRoutes();
    const MenuStateContextProvider = menuStateContext.Provider;
    return (
        <MenuStateContextProvider value={{
            menuNum: menuNumber,
            changeMenuNum: setMenunumber,
        }}>
            <Home />
            {/* <Login /> */}
        </MenuStateContextProvider>
    );
}

export const App = hot(() => <AppComponent />);
