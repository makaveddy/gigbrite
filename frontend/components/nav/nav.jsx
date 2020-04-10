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
                        <li><img className='splash-logo' src={LogoURL} alt="" /></li>
                    
                        <li>
                            <button className='navbar-logout' onClick={this.props.logout}>
                            Log out(placeholder for image dropdown)
                            </button>
                        </li>
                    </ul>
                </>
            )
        } else {
            return (
                <>
                    <ul className='nav-bar-main-2'>
                        <li><img className='splash-logo' src={LogoURL} alt="" /></li>

                        <li className='navbar-button'>
                            <Link to='/signin/'>Sign in</Link>
                        </li>
                    </ul>
                </>
                
            )
        }
    }
}

export default Nav;