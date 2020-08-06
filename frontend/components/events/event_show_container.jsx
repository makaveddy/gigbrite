import {connect} from 'react-redux';
import {requestEvents, requestEvent} from '../../actions/event_actions';
import EventShow from './event_show';

const msp = (state, ownProps) => {
    return ({
        events: Object.values(state.entities.events),
        event: state.entities.events[ownProps.match.params.eventId] || {}
    })
}

const mdp = (dispatch) => {
    return ({
        requestEvent: (eventId) => dispatch(requestEvent(eventId)),
        requestEvents: () => dispatch(requestEvents())
    })
}

export default connect(msp, mdp)(EventShow);