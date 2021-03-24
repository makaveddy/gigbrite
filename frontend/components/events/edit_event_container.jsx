import { connect } from 'react-redux';
import { updateEvent, requestEvent} from '../../actions/event_actions';
import EditEventForm from './edit_event_form';

const msp = (state, ownProps) => {
    return ({
        
        event: state.entities.events[ownProps.match.params.eventId] || {}
    })
}

const mdp = (dispatch) => {
    return ({
        updateEvent: event => dispatch(updateEvent(event)),
        requestEvent: eventId => dispatch(requestEvent(eventId))
    })
}

export default connect(msp, mdp)(EditEventForm);