import React from 'react';
import NavContainer from '../nav/nav_container';
import EventIndexContainer from '../events/event_index_container';


export const Splash = () => {
    return (
        <>
        <header>
            <NavContainer/>
        </header>
        <div className="browse-container">
            <div className='splash-image'>
                <img src={SplashURL} alt="" id="main"/>
            </div>
            <div className='browse'>
            </div>
            

        </div>
        {/* <div className='category'>
            <img src={CategoryURL} alt=""/>
        </div> */}
        <div>
            <EventIndexContainer/>
        </div>
        </>
    )
}