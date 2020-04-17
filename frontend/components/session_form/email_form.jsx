import React from 'react';
import { Redirect } from 'react-router-dom';
import SignupNavContainer from '../nav/signup_nav_container';



class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errorMessage: ''
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demologin = this.demologin.bind(this);
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

    demologin(e) {
        
        e.preventDefault();
        this.props.login({ email: "test@email.com", password: "testing" })
        this.props.history.push("/")
        
    }

   

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.state.email == '') {
            debugger
            this.state.errorMessage = 'Please enter valid'
            
        } else {

            const props = this.props;
            const successCB = user => {
            // debugger
                if (user) {
                // return <Redirect to='/signin/login' />
                    props.history.push('/signin/login');
                } else {
                    props.history.push('/signin/signup')
                };
            };
            props.verify(this.state.email).then(successCB);
        }
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
        if (this.props.currentUser) {
            <Redirect to="/" />
        }
        return (
            <>
            <header>
                <SignupNavContainer/>
            </header>
            <div className="email-form">
                <h3 className="email-form-head">
                    {<img className="email-logo" src={formLogoURL} alt=""/>}
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
                                <div className="login-error">
                                    {this.state.errorMessage}
                                </div>
                        
                            <br/>   
                            <div className="hover">
                                <input className="session-submit" 
                                    type="submit" 
                                    value='Get Started' 
                                />
                            </div> 
                            <div className="hover">
                                    <input className="session-submit" 
                                        type="submit" 
                                        value="Demo Log In" 
                                        onClick={this.demologin} />
                                
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
              
            </>
        )
    }
}


export default EmailForm;
