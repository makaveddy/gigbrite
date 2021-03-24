import React from 'react';
import NavContainer from '../nav/nav_container';

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestEvent(this.props.match.params.eventId);
        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateEvent(this.state)
        .then(e => this.props.history.push(`/events/${e.event.id}`));
    }

    update(field) {
        return e=> this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        let event = this.props.event;
        let picture = "";
        if (event.title == "Aunt May Bday") {
            picture = window.MaybdayURL
        } else if (event.title == "Gamma Ray Ted Talk") {
            picture = window.TedURL
        } else if (event.title == "July 4th Party") {
            picture = window.CaptainURL
        } else if (event.title == "Stark expo") {
            picture = window.StarkURL
        } else if (event.title == "Baxter Reopening") {
            picture = window.BaxterURL
        } else if (event.title == "App Academy Grad Party!") {
            picture = window.AppacademyURL
        }
        return (
            <>
                <header>
                    <NavContainer />
                </header>

                <div className="event-show-box">
                    <div className="event-show-image-detail">
                        <div className="event-image">
                            <img src={picture} alt=""/>
                        </div>
                        <div className="event-details">
                            <h1>{event.title}</h1>
                        </div>
                    </div>
                    <div className="event-summary">
                        <div className="event-info-details">
                            <form className="event-form" onSubmit={this.handleSubmit}>
                                <textarea value={this.state.description}
                                    onChange={this.update('description')}
                                />
                                <button>Save</button>
                            </form>    
                        </div>
                        <div className="event-time-info">
                                <h3>Date and time</h3>
                                <p>{event.start_time}</p>
                            </div>
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
                <br/>
            </>
        )
    }
}

export default EditEventForm;