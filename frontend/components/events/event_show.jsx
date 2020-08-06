import React from 'react';
import NavContainer from '../nav/nav_container';
class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestEvent(this.props.match.params.eventId);
        this.props.requestEvents();
    }


    componentDidUpdate() {

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
        } else if (event.title == "stark expo") {
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
                                <p>{event.description}</p>
                            </div>
                            <div className="event-time-info">
                                <p>{event.start_time}</p>
                            </div>
                        </div>
                    </div>
                        
                <footer>
                    <img src={FooterURL} alt="" />
                </footer>
                <br />

            </>
        )
       
    }
}

export default EventShow;