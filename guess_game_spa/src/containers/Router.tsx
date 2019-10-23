import {connect} from 'react-redux';
import { Router } from '../components/Router';

const mapStateToProps = (state:any) => {
    return {
        page: state.page || 'splash'
    }
}

export default connect(mapStateToProps)(Router);