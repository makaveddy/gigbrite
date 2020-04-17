import { verify } from '../../util/session_api_util';
import { login, removeErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import EmailForm from './email_form';

const msp = (state) => {
    return ({
        errors: state.errors.session,
        currentUser: state.session.id,
    })
}

const mdp = (dispatch) => {
    return {
        verify: email => verify(email),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(removeErrors())
    };
};

export default connect(msp, mdp)(EmailForm)