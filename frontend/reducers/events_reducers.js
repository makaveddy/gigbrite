import { RECEIVE_EVENTS, 
    RECEIVE_EVENT, 
    REMOVE_EVENT } from "./../actions/event_actions";


const eventsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            return Object.assign({}, state, {
                [action.event.id]: action.event
            });
        case REMOVE_EVENT:
            newState = state;
            delete newState[action.eventId];
            return newState;
        default:
            return newState;
    }
};

export default eventsReducer;