import {connect} from 'react-redux';
import React from 'react';
import {requestEvents, requestEvent} from '../../actions/event_actions';
import EventIndex from './event_index';

const msp = (state) => {
    return ({
        events: state.entities.events
    })
}

const mdp = (dispatch) => {
    return ({
        requestEvents: () => dispatch(requestEvents())
    })
}

export default connect(msp, mdp)(EventIndex);