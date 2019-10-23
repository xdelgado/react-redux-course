import { existsUser } from "./UserManagement.mjs";

let games = [];
let gamecounter=0;

const ERR_INVALID_USER='ERR_INVALID_USER';

const NUM_PLAYERS=2;

const WAITING='waiting';
const RUNNING='running';
const FINISHED ='finished';

export const play = (username) => {
    if (existsUser(username)){
        let game = getFirstWaitingGame();
        if (!game) game = createGame(username);
        else game = addUser(game,username);
        return game;
    } else {
        throw ERR_INVALID_USER;
    }
}

const getFirstWaitingGame = () => {
    return games.find((item) => item.status == WAITING);
}

const createGame = (username) => {
    const game = {
        id:++gamecounter,
        status:WAITING,
        players:[{username:username,tries:0}],    
        guess: parseInt(Math.random()*100)
    };
    games.push(game);
    return game;
}

const addUser = (game,username) => {
    game.players.push({username:username,tries:0});
    if (game.players.length >= NUM_PLAYERS) game.status = RUNNING;
    return game;
}

export const getAllGames = () => {
    return games;
}

export const getGame = (gameId) =>{
    const game = games.find((item)=> item.id==gameId);    
    return game;
}

export const guess = (username,guess,gameId) => {
    const game = getGame(gameId);
    let message ="";
    if (game.status == FINISHED){
        message=`${game.winner} ha ganado la partida`
    } else if (game.guess == guess) {
        game.status = FINISHED;
        game.winner = username;
        message="Ganador!!!!!"
    } else {
        let player = game.players.find((item) => username == item.username);
        message = (game.guess > guess? "Prueba con un número mayor":"Prueba con un número menor");
        player.tries++;
    }
    return {game:game,message:message};
}