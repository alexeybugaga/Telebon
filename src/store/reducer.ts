import { ActionCreator, AnyAction, Reducer } from "redux";

export type RooState = {
    menuNum: number;
}
const initialState: RooState = {
    menuNum: 1,
}

const SET_MENU_NUM = 'SET_MENU_NUM';

type SetMenuNumAction = {
    type: typeof SET_MENU_NUM;
    menuNum: number;
}
export const setMenuNum: ActionCreator<SetMenuNumAction> = (menuNum) => ({
    type: SET_MENU_NUM,
    menuNum,
});

type MyAction = SetMenuNumAction;

export const rootReducer: Reducer<RooState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_NUM:
            return {
                ...state,
                menuNum: action.menuNum
            }
        default:
            return state;
    }
}