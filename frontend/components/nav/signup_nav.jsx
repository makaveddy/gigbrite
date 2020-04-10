import React from 'react';
import {Link} from 'react-router-dom';

class SignupNav extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <ul className='nav-bar-main-2'>

                    <li className='logo-button'>
                        <a href="#/">
                            <img className='splash-logo' src={LogoURL} alt="" />
                        </a>
                       
                    </li>
                    <li>
                        <img className='searchbar-form' src={SearchformURL} alt="" />

                    </li>

                    <li className='navbar-button'>
                        <a href="#/signin/">Sign In</a>
                    </li>
                    <li className='navbar-button'>
                        <a href="">Help</a>
                    </li>
                    <li className='navbar-button-browse'>
                        <a href="">Browse Events</a>
                    </li>
                    
                </ul>
            </>

        )
    }

}

export default SignupNav;