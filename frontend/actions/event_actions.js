
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
import * as EventApiUtil from './../util/event_api_util';

const receiveEvents = (events) => {
    return {
        type: RECEIVE_EVENTS,
        events
    }
}

const receiveEvent = event => {
    return {
        type: RECEIVE_EVENT,
        event
    };
};

const removeEvent = ({ id }) => {
    return {
        type: REMOVE_EVENT,
        eventId: id
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_EVENT_ERRORS,
        errors: errors
    };
};

export const requestEvents = () => dispatch => {
    return EventApiUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)),
            err => dispatch(receiveErrors(err.responseJSON)))
}


export const createEvent = (event) => dispatch => {
    return EventApiUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)),
            err => dispatch(receiveErrors(err.responseJSON)))
}

export const requestEvent = (id) => dispatch => {
    return EventApiUtil.fetchEvent(id)
        .then(event => dispatch(receiveEvent(event)),
            err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateEvent = (event) => dispatch => {
    return EventApiUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)),
            err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteEvent = (id) => dispatch => {
    return EventApiUtil.deleteEvent(id)
        .then(id => dispatch(removeEvent(id)),
            err => dispatch(receiveErrors(err.responseJSON)))
}