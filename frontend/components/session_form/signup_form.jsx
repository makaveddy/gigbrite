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
        // this.renderError = this.renderError.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFirstname = this.handleFirstname.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentWillUnmount() {
        if (this.props.errorslength) {
            this.props.clearErrors();
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        if (this.errors) {
            
        } else {

            this.props.processForm(user);
        }
    }

    handleEmail(message) {
        let allErrors = this.props.errors
        // debugger
        if (allErrors.includes(message)) {
            debugger
            return (
                <div>
                    <span className="error-messages">{message}</span>
                </div>
            )
        }
    }
    handlePassword(message) {
        let allErrors = this.props.errors
        // debugger
        if (allErrors.includes(message)) {
            debugger
            return (
                <div>
                    <span className="error-messages">{message}</span>
                </div>
            )
        }
    }
    handleFirstname(message) {
        let allErrors = this.props.errors
        // debugger
        if (allErrors.includes(message)) {
            return (
                <div>
                    <span className="error-messages">{message}</span>
                </div>
            )
        }
    }

    handleLastname(message) {
        let allErrors = this.props.errors
        if (allErrors.includes(message)) {
            return (
                <div>
                    <span className="error-messages">{message}</span>
                </div>
            )
        }
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
                                {this.handleEmail("Email can't be blank")}
                            <div className="login-input">
                                <span>First Name</span>
                                <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                />
                            </div>
                                {this.handleFirstname("First name can't be blank")}
                            <div className="login-input">
                                <span>Last Name</span>
                                <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                />
                            </div>
                                {this.handleLastname("Last name can't be blank")}
                            <div className="login-input">
                                <span>Password</span>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>
                                {this.handlePassword("Password is too short (minimum is 6 characters)")}
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
                <footer>
                    <div className="foot-box">
                        <div className="social-links">
                            <a href="https://github.com/makaveddy">{<i class="fa fa-github" aria-hidden="true"></i>}</a>
                            <a href="https://www.linkedin.com/in/eddy-flores-2794951a9/">{<i class="fa fa-linkedin-square" aria-hidden="true"></i>}</a>
                            <a href="https://angel.co/u/eddy-flores">{<i class="fa fa-angellist" aria-hidden="true"></i>}</a>
                            <a className="port" href="https://makaveddy.github.io/">Portfolio</a>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default SignupForm;
