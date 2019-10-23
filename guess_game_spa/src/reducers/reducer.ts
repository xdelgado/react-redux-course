import { START_BOOTSTRAP, END_BOOTSTRAP, ON_REGISTER, END_REGISTRATION, END_PLAY, GAME_STARTED, GUESS_RESULT } from "../actions/actions";

export const reducer = (state:any,action:any) => {
    switch(action.type){
        case START_BOOTSTRAP:
            return {...state, page:'splash'};
        case END_BOOTSTRAP:
            return {...state, username:action.username, page:'main'};
        case ON_REGISTER:
            return {...state, page:'register'};
        case END_REGISTRATION:
            if (action.error) return {...state,error:action.error};
            else return {...state,error:undefined,page:'main',username:action.username};
        case END_PLAY:
            return {...state, page:'lobby', currentGame:action.game};
        case GAME_STARTED:
            return {...state, page:'game'};
        case GUESS_RESULT:
            return {...state,currentGame:action.game,message:action.message}
        default:
            //DO NOT FORGET
            return state;
    }
}