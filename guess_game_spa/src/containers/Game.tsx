import {connect} from 'react-redux';
import { Game } from '../components/Game';
import { guess } from '../actions/actions';

const mapStatesToProps = (state:any) => {
    return {
        username:state.username,
        game:state.currentGame,
        message:state.message || ""
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        guess: (username:string, gameId:number, value:number) => dispatch(guess(username,gameId,value)),
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(Game);