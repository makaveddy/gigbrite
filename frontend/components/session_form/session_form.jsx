import React from 'react';
import SignupNavContainer from '../nav/signup_nav_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderError = this.renderError.bind(this);
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


    renderError(message) {
        let allErrors = this.props.errors.concat(this.state.errors)
        if (allErrors.includes(message)) {
            return (
                <div>
                    <span className="error-messages">{message}</span>
                </div>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.processForm(user);
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <>
                {/* <header>
                    <SignupNavContainer />
                </header>
                <div className="email-form">
                    <h3 className="email-form-head">
                        {<img className="email-logo" src={formLogoURL} alt="" />}
                        <div className='h1'>
                            Sign up or log in
                    </div>
                        <div className='h2'>
                            Use email to get started.
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
                        <br />
                            <div className="login-input">
                                <span>Password</span>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>
                        <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </>
             */}

                <header>
                    <SignupNavContainer />
                </header>
                <div className="email-form">
                    <h3 className="email-form-head">
                        {<img className="email-logo" src={WelcomeLogoURL} alt="" />}
                        <div className='h1'>
                            Welcome back
                    </div>
                        <div className='h2'>
                            Please enter your password to log in.
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
                                {this.renderError("Invalid email/password combination")}
                                <div className="login-input">
                                    <span>Password</span>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </div>
                                {this.renderError("Invalid email/password combination")}
                                <br />
                                <div className="hover">
                                    <input className="session-submit"
                                        type="submit"
                                        value='Log In'
                                    />
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

export default SessionForm;
