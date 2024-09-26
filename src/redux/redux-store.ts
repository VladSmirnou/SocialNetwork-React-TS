import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = legacy_createStore(reducers);

export type StoreType = typeof store;
export type StateType = ReturnType<typeof store.getState>;
