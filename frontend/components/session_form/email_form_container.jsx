import { verify } from '../../util/session_api_util';
import { connect } from 'react-redux';
import EmailForm from './email_form';

const msp = (state) => {
    return ({
        errors: state.errors.session,
        currentUser: state.session.id,
    })
}

const mdp = () => {
    return {
        verify: email => verify(email)
    };
};

export default connect(msp, mdp)(EmailForm)