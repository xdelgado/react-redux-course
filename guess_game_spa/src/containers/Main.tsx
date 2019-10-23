import {connect} from 'react-redux';
import { Main } from '../components/Main';
import { onRegister, play } from '../actions/actions';

const mapStatesToProps = (state:any) => {
    return {
        username:state.username
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
      onRegister: () => dispatch(onRegister()),
      onPlay: (username:string) => dispatch(play(username))
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(Main);