import React from 'react';
// import EventIndexContainer from './event_index_container';
import NavContainer from '../nav/nav_container';
import {Link} from 'react-router-dom';

class EventIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestEvents();
    }

    

    render() {
        console.log("in render");
        if (this.props.eventList.length === 0 ) {return null};
        console.log('past the null')

        return (
            <>
            <header>
                <NavContainer/>
            </header>
            <div className="events-placeholder">
                {/* <img src={EventsURL} alt=""/> */}
                {this.props.eventList.map(eventItem => {
                        let picture = "";
                        if (eventItem.title == "Aunt May Bday") {
                            picture = window.MaybdayURL
                        } else if (eventItem.title == "Gamma Ray Ted Talk") {
                            picture = window.TedURL
                        } else if (eventItem.title == "July 4th Party") {
                            picture = window.CaptainURL
                        } else if (eventItem.title == "Stark expo") {
                            picture = window.StarkURL
                        } else if (eventItem.title == "Baxter Reopening") {
                            picture = window.BaxterURL
                        } else if (eventItem.title == "App Academy Grad Party!") {
                            picture = window.AppacademyURL
                        }

                    return (
                        
                        <>
                        <div className="event-box">
                            <Link to={`/events/${eventItem.id}`}>
                            <div className="event-img">
                                <img src={picture} alt="" className="image"/>
                            
                            </div>
                            <div className="event-info">
                                <p className="event-time">
                                {eventItem.start_time}
                                </p>
                                <p className="event-title">
                                    {eventItem.title}
                                </p>
                            </div>
                            </Link>
                        </div>
                        </>
                    )
                })}
            </div>
                <footer>
                    <div className="foot-box">
                        <div className="social-links">
                            <a href="">{<i class="fa fa-github" aria-hidden="true"></i>}</a>
                            <a href="">{<i class="fa fa-linkedin-square" aria-hidden="true"></i>}</a>
                            <a href="">{<i class="fa fa-angellist" aria-hidden="true"></i>}</a>
                            <a className="port" href="">Portfolio</a>
                        </div>
                    </div>
                </footer>
            <br/>
              
            </>
        )
    
    }

}

export default EventIndex;