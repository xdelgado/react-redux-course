import express from 'express';
import { register } from './services/UserManagement.mjs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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
        res.send(err);
    }
});


app.post('/play', (req,res) => {

});

app.post('/guess', (req,res) => {

});

app.listen(3001);
console.log('Guess game server started at port 3001');