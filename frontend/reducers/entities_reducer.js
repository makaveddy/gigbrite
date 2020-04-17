import { combineReducers } from 'redux';
import eventsReducer from "./events_reducers";
import usersReducer from './users_reducer';

export default combineReducers({
    users: usersReducer,
    events: eventsReducer
});
