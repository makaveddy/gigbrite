import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentUser) {
            return(
        
                <>
                    <ul className='nav-bar-main-1'>

                        <li className='logo-button'>
                            <a href="#/">
                                <img className='splash-logo' src={LogoURL} alt="" />
                            </a>

                        </li>
                        <li>
                            {/* <img className='searchbar'  src={SearchURL} alt="" /> */}

                        </li>

                        <li className='navbar-button'>
                            <a href="#/signin/" onClick={this.props.logout}>Log out</a>
                        </li>
                        <li className='navbar-button'>
                            <a href="">Help</a>
                        </li>
                        <li className='navbar-button-browse'>
                            <a href="">Create Event</a>
                        </li>

                    </ul>
                </>
            )
        } else {
            return (
                <>
                    <ul className='nav-bar-main-1'>

                        <li className='logo-button'>
                            <a href="#/">
                                <img className='splash-logo' src={LogoURL} alt="" />
                            </a>

                        </li>
                        <li>
                            {/* <img className='searchbar' src={SearchURL} alt="" /> */}

                        </li>

                        <li className='navbar-button'>
                            <a href="#/signin/" >Sign in</a>
                        </li>
                        <li className='navbar-button'>
                            <a href="">Help</a>
                        </li>
                        <li className='navbar-button-browse'>
                            <a href="">Create Event</a>
                        </li>

                    </ul>
                </>
            )
            
        }
        
    }
}

export default Nav;