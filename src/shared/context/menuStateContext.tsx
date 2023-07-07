import React from "react";
import { useMenuState } from "../hooks/useMenuState";

interface IMenuStateContext {
    menuNum: number;
    changeMenuNum: (menuNum: number) => void;
}

export const menuStateContext = React.createContext<IMenuStateContext>({menuNum: 1, changeMenuNum:()=>{}});

// export function MenuStateContextProvider({ children }: { children: React.ReactNode }) {
//     const [menuNumber] = useMenuState();

//     return (
//         <menuStateContext.Provider value={{
//             menuNum: 1,

//         }}>
//             { children }
//         </menuStateContext.Provider>
//     )
// }
