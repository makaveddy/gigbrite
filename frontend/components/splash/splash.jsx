import React from 'react';
import NavContainer from '../nav/nav_container';


export const Splash = () => {
    return (
        <>
        <header>
            <NavContainer/>
        </header>
        <div className='splash-image'>
            <img src={SplashURL} alt=""/>
        </div>
        </>
    )
}