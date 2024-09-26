import React, { ReactNode } from "react";
import { StoreType } from "./redux/redux-store";

const initialContext: StoreType = {} as StoreType;

export const StoreContext = React.createContext<StoreType>(initialContext);

type Props = {
    store: StoreType
    children: ReactNode
} 

export const Provider = (props: Props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
