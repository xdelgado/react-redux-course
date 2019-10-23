import express from 'express';
import { register,getAllUsers } from './services/UserManagement.mjs';
import { play,getAllGames,getGame,guess  } from './services/GameManagement.mjs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req,res) => {
    try{
        register(req.body.username);
        res.sendStatus(200);
    }catch(err){
        res.status(500).send(err);
    }
});

app.get('/users', (req,res) => {
    try{
        const users = getAllUsers();
        res.send(users);
    }catch(err){
        res.status(500).send(err);
    }
});


app.post('/play', (req,res) => {
    try{
        const game = play(req.body.username);
        res.send(game);
    }catch(err){
        res.status(500).send(err);
    }
});

app.post('/game', (req,res) => {
    try {
        const game = getGame(req.body.gameId);
        res.send(game);
    } catch(err) {
        res.status(500).send(err);
    }
});

app.get('/games', (req,res) => {
    try {
        const games = getAllGames();
        res.send(games);
    } catch(err) {
        res.status(500).send(err);
    }
});

app.post('/guess', (req,res) => {
    try {
        const game = guess(req.body.username,req.body.guess,req.body.gameId);
        res.send(game);
    } catch(err) {
        res.status(500).send(err);
    }
});

app.listen(3001);
console.log('Guess game server started at port 3001');