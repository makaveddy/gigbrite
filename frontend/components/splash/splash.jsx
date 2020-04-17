import React from 'react';
import NavContainer from '../nav/nav_container';
import EventIndex from '../events/event_index';


export const Splash = () => {
    return (
        <>
        <header>
            <NavContainer/>
        </header>
        <div className='splash-image'>
            <img src={SplashURL} alt=""/>
        </div>
        <div className='category'>
            <img src={CategoryURL} alt=""/>
        </div>
        <div>
            <EventIndex/>
        </div>
        </>
    )
}