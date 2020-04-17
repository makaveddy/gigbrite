import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import events from "./events_reducers";

const rootReducer = combineReducers({
    entities,
    session,
    errors,
    events
});

export default rootReducer;
