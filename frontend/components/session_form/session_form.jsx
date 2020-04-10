import React from 'react';
import SignupNavContainer from '../nav/signup_nav_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            <>
                <header>
                    <SignupNavContainer />
                </header>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Welcome to GigBrite!
                        <br />
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
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
        );
    }
}

export default SessionForm;
