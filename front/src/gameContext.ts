import React from "react";

export interface IGameContextProps {
    isInRoom: boolean;
    setInRoom: (inRoom: boolean) => void;
    playerSymbol: string;
    setPlayerSymbol: (symbol: string) => void;
    isPlayerTurn: boolean;
    setPlayerTurn: (turn: boolean) => void;
    isGameStarted: boolean;
    setGameStarted: (started: boolean) => void;
    isWaiting: boolean;
    setWaiting: (waiting: boolean) => void;
    data : any;
    setdata: (data: any) => void;
    roomName : string;
}

const defaultState: IGameContextProps = {
    isInRoom: false,
    setInRoom: () => { },
    playerSymbol: "",
    setPlayerSymbol: () => { },
    isPlayerTurn: false,
    setPlayerTurn: () => { },
    isGameStarted: false,
    setGameStarted: () => { },
    isWaiting: false,
    setWaiting: () => { },
    data: {},
    setdata: () => { },
    roomName : ""
};

export default React.createContext(defaultState);