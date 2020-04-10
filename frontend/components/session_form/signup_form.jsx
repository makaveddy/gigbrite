import React from 'react';
import SignupNavContainer from '../nav/signup_nav_container';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
        //     <div className="signup-form-container">
        //         <form onSubmit={this.handleSubmit} className="signup-form-box">
        //   <br />
        //   Please {this.props.formType} or {this.props.navLink}
        //             {this.renderErrors()}
        //             <div className="signup-form">
        //                 <br />
        //                 <label>Email:
        //       <input type="text"
        //                         value={this.state.email}
        //                         onChange={this.update('email')}
        //                         className="signup-input"
        //                     />
        //                 </label>
        //                 <br />
        //                 <br />
        //                 <label>First name:
        //       <input type="text"
        //                         value={this.state.first_name}
        //                         onChange={this.update('first_name')}
        //                         className="signup-input"
        //                     />
        //                 </label>
        //                 <br />
        //                 <br />
        //                 <label>Last name:
        //       <input type="text"
        //                         value={this.state.last_name}
        //                         onChange={this.update('last_name')}
        //                         className="signup-input"
        //                     />
        //                 </label>
        //                 <br />
        //                 <label>Password:
        //       <input type="password"
        //                         value={this.state.password}
        //                         onChange={this.update('password')}
        //                         className="signup-input"
        //                     />
        //                 </label>
        //                 <br />
        //                 <input className="signup-submit" type="submit" value={this.props.formType} />
        //             </div>
        //         </form>
        //     </div>
        <>
            <header>
                <SignupNavContainer />
            </header>
            <div className="email-form">
                <h3 className="email-form-head">
                    {<img className="email-logo" src={WelcomeLogoURL} alt="" />}
                    <div className='h1'>
                        Welcome
                    </div>
                    <div className='h2'>
                        Create an account.
                    </div>
                </h3>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="login-form">
                            <br />
                            <div className="login-input">
                                <span>Email address</span>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </div>
                            <div className="login-input">
                                <span>First Name</span>
                                <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                />
                            </div>
                            <div className="login-input">
                                <span>Last Name</span>
                                <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                />
                            </div>
                            <div className="login-input">
                                <span>Password</span>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>
                            <br />
                            <div className="hover">
                                <input className="session-submit"
                                    type="submit"
                                    value='Sign Up'
                                />
                            </div>
                            <div className='login-link'>
                                <a  href="#/signin/login">Log In Instead</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default SignupForm;
