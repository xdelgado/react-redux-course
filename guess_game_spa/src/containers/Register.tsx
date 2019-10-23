import {connect} from 'react-redux';
import { registration } from '../actions/actions';
import { Register } from '../components/Register';

const mapStatesToProps = (state:any) => {
    return {
        error:state.error
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        registerUser:(username:string) => dispatch(registration(username))
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Register);