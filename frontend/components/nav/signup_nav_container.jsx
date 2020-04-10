import {logout} from './../../actions/session_actions';
import {connect} from 'react-redux';
import SignupNav from './signup_nav';

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
}

export default connect(msp, mdp)(SignupNav);