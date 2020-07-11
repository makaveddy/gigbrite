import {connect} from 'react-redux';
import React from 'react';
import {requestEvents, requestEvent} from '../../actions/event_actions';
import EventIndex from './event_index';

const msp = (state) => {
    // debugger
    return ({
        events: state.entities.events,
        eventList: Object.values(state.entities.events)
    })
}

const mdp = (dispatch) => {
    // debugger
    return ({
        requestEvents: () => dispatch(requestEvents())
    })
}

export default connect(msp, mdp)(EventIndex);