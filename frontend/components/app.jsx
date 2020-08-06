import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import EmailFormContainer from "./session_form/email_form_container";
import EventIndexContainer from "./events/event_index_container";
import EventShowContainer from "./events/event_show_container";
import { AuthRoute } from '../util/route_util';
// import NavContainer from '../components/nav/nav_container';
import { Splash } from "../components/splash/splash";

const App = () => (
    <div>
        <Route exact path="/" component={Splash} />
        <Route exact path="/events" component={EventIndexContainer} />
        <Route exact path="/signin" component={EmailFormContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />
        <AuthRoute exact path="/signin/login" component={SessionFormContainer} />
        <AuthRoute exact path="/signin/signup" component={SignupFormContainer} />
    </div>
);

export default App;

