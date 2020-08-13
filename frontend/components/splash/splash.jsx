import React from 'react';
import NavContainer from '../nav/nav_container';
import EventIndexContainer from '../events/event_index_container';


export const Splash = () => {
    return (
      <>
        <header>
          <NavContainer />
        </header>
        <div className="browse-container">
          <div className="browse">
            <div className="browse-contents">
              {/* <div className="header-one">
                <p>Connect through</p>
              </div> */}
              <p className="header-one">Connect through</p>
              {/* <div className="header-two"> */}
                <p className="header-two">Online events</p>
              {/* </div> */}
              <div className="browse-button">
                <a href="" className="browse-link">
                  Browse events &rarr;
                </a>
              </div>
            </div>
            <div className="grey-square"></div>
          </div>
          <div className="splash-image">
            <img src={SplashURL} alt="" id="main" />
          </div>
        </div>
        {/* <div className='category'>
            <img src={CategoryURL} alt=""/>
        </div> */}
        <div>
          <EventIndexContainer />
        </div>
      </>
    );
}