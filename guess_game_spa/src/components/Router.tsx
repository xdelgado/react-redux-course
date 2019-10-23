import * as React from 'react';
import { Splash } from './Splash';
import Main  from '../containers/Main';
import Register from '../containers/Register';
import GameLobby from '../containers/GameLobby';
import Game from '../containers/Game';

export interface IRouterProps {
    page:string;
}

export const Router:React.FC<IRouterProps> = (props:IRouterProps) => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'400px',height:'400px'}}>
                {props.page =='splash' && <Splash message="Cargando guess game..."/>}
                {props.page == 'main' && <Main/>}
                {props.page == 'register' && <Register/>}
                {props.page == 'lobby' && <GameLobby/>}
                {props.page == 'game' && <Game/>} 
            </div>
        </div>
    )
}