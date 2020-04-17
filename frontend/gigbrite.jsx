import React from "react";
import ReactDom from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import {fetchEvent, fetchEvents}from '../frontend/util/event_api_util';

document.addEventListener(`DOMContentLoaded`, () => {
    const root = document.getElementById(`root`);
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.store = store;
    window.fetchEvent = fetchEvent;
    window.fetchEvents = fetchEvents;


    ReactDom.render(<Root store={store}></Root>, root);
});

