import {connect} from 'react-redux';
import { GameLobby } from '../components/GameLobby';
import { waitForGameStart } from '../actions/actions';

const mapStatesToProps = (state:any) => {
    return {
        username:state.username,
        game:state.currentGame
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        waitForGameStart: (gameId:number) => waitForGameStart(dispatch,gameId),
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(GameLobby);