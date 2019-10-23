import * as React from 'react';

export interface IGameLobbyProps {
    game:any;
    username:string;
    waitForGameStart(gameId:number):void;
}

export const GameLobby:React.FC<IGameLobbyProps> = (props:IGameLobbyProps) => {
    React.useEffect(()=>{
        props.waitForGameStart(props.game.id);
    });

    return (
        <>
            Current players:
            {props.game.players.map((item:any) => {
                return <div key={item.username}>{item.username}</div>
            })}
            Waiting for more players...
        </>
    )
}
