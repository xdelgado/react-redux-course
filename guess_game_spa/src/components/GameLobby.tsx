import * as React from 'react';

export interface IGameLobbyProps {
    gameId:number;
    players:string[];
}

export const GameLobby:React.FC<IGameLobbyProps> = (props:IGameLobbyProps) => {
    return (
        <>
            {props.players.map((item,idx) => {
                return <div key={item}>{item}</div>
            })}
        </>
    )
}
