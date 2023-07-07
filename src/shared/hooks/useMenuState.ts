import { useContext, useEffect, useState } from "react";
import { menuStateContext } from "../context/menuStateContext";

interface IMenuState {
    menuNum: number;
    changeMenuNum?: () => void;
}

export function useMenuState() {
    
    // const { menuNum, changeMenuNum } = useContext(menuStateContext);

    // const changeMenuNumber = (menuNum: number) => {
    //     setMenunumber({menuNum});
    // }

    // useEffect (() => {
    //     setMenunumber({menuNum});
    // }, [menuNum]);

    // return [menuNumber];
} 