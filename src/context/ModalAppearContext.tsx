import React, {  ReactNode, createContext, Dispatch, SetStateAction, useState } from 'react';

type ModalAppearContextProps = {
    appear: boolean;
    setAppear: Dispatch<SetStateAction<boolean>>;
}

const ModalAppearContext = createContext<ModalAppearContextProps>({
    appear: false,
    setAppear: () => {}
});

type ChildrenType = {
  children?: ReactNode;
}

export const ModalAppearContextProvider = (props: ChildrenType) => {
    const [appear, setAppear] = useState(false);
    return (
        <ModalAppearContext.Provider
            value={{ appear, setAppear }}
        >
            {props.children}
        </ModalAppearContext.Provider>
    );
}

export default ModalAppearContext;
