
const jsonPost ={
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },            
    method:"POST"
};

export const START_BOOTSTRAP="START_BOOTSTRAP";
export const startBootstrap = () => {
    return {
        type:START_BOOTSTRAP
    } 
}

export const END_BOOTSTRAP="END_BOOTSTRAP";
export const endBootstrap = (username:string | null) => {
    return {
        type:END_BOOTSTRAP,
        username:username
    } 
}

export const bootstrap = () => {
    return async (dispatch:any) => {
        dispatch(startBootstrap());
        let username:string | null = localStorage.getItem("username");
        const res = await fetch('http://localhost:3001/users');
        let users:[string] = await res.json();
        if (users.find((item) => username=== item)) dispatch(endBootstrap(username));
        else dispatch(endBootstrap(null));    
    }
}

export const ON_REGISTER="ON_REGISTER";
export const onRegister = () => {
    return{
        type:ON_REGISTER
    }
}

export const START_REGISTRATION = "START_REGISTRATION";
export const startRegistration = () => {
    return { 
        type:START_REGISTRATION
    }
}

export const END_REGISTRATION = "END_REGISTRATION";
export const endRegistration = (error:string | undefined,username?:string) => {
    return {
        type:END_REGISTRATION,
        error:error,
        username:username
    }
}

export const registration = (username:string) => {
    return async (dispatch:any) => {
        dispatch(startRegistration());
        try {
            const res = await fetch('http://localhost:3001/register',{...jsonPost,body:JSON.stringify({"username":username})});

            if (res.status==200) {
                localStorage.setItem('username',username);
                dispatch(endRegistration(undefined,username));
            }
            else if (res.status==500) {
                dispatch(endRegistration('Seleccione otro usuario. El usuario ya existe.'));
            }

        } catch(error){
            dispatch(endRegistration(error));
        }
    }
}

export const START_PLAY = "START_PLAY";
export const startPlay = () => {
    return {
        type:START_PLAY
    }
}

export const END_PLAY = "END_PLAY";
export const endPlay = (game:any) => {
    return {
        type:END_PLAY,
        game:game
    }
}

export const play = (username:string) => {
    return async (dispatch:any) => {
        dispatch(startPlay());
        let res = await fetch("http://localhost:3001/play",{...jsonPost,body:JSON.stringify({username:username})});
        let game = await res.json();
        dispatch(endPlay(game));
    }
}

export const GAME_STARTED="GAME_STARTED";
export const gameStarted = () => {
    return {
        type:GAME_STARTED
    }
}

export const waitForGameStart = (dispatch:any,gameId:number) => {
    setTimeout(async () => {
        let res = await fetch("http://localhost:3001/game",{...jsonPost,body:JSON.stringify({gameId:gameId})})
        let game = await res.json();
        if (game.status==="waiting") waitForGameStart(dispatch,gameId);
        else dispatch(gameStarted());         
    },1000);
}

export const GUESS_RESULT="GUESS_RESULT";
export const guessResult = (result:any)=> {
    return {
        type:GUESS_RESULT,
        message:result.message,
        game:result.game
    }
}

export const guess = (username:string,gameId:number,value:number) => {
    return async (dispatch:any) => {
        let res = await fetch("http://localhost:3001/guess",{...jsonPost,body:JSON.stringify({gameId:gameId,username:username,guess:value})});
        let result = await res.json();
        dispatch(guessResult(result))
    }
    
}
