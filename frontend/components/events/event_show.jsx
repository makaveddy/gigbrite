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
                                <h2>{event.description}</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac auctor dolor. Donec auctor, velit vel congue fermentum, massa est posuere diam, sed pretium diam ante eget dolor. Morbi id libero a purus efficitur venenatis. Phasellus eleifend rhoncus semper. Sed rhoncus ullamcorper leo, in tempus nisi vulputate eu. Nulla viverra, ligula ac consectetur tincidunt, libero justo euismod dolor, ut maximus velit nibh non nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consequat venenatis nibh, a vestibulum felis rhoncus in. Ut finibus dui et consequat volutpat. Donec maximus auctor luctus. Integer elementum at lectus eget tempor. Ut condimentum nunc purus, nec hendrerit ipsum placerat id. Proin blandit varius velit nec mollis. Ut pellentesque nibh a libero fringilla venenatis. Sed eget auctor massa, ut tempus erat.

                                In maximus varius mattis. Nunc diam risus, mollis ac erat sit amet, tincidunt luctus velit. Ut sit amet mi euismod, sagittis urna accumsan, feugiat augue. Etiam egestas consectetur pulvinar. Cras vestibulum felis auctor massa eleifend mollis. Etiam quis faucibus ligula, ac finibus sem. Curabitur pharetra nec augue vitae finibus. Quisque tincidunt interdum porttitor. Sed eget turpis odio. Proin sollicitudin ullamcorper ipsum id iaculis. Cras id ornare urna. Curabitur est tellus, bibendum vitae nunc id, molestie molestie nunc.

                                Suspendisse nisl eros, posuere non elementum eget, interdum ut nibh. Nullam tristique, justo dignissim vulputate suscipit, enim felis imperdiet tortor, eu dictum erat dui posuere magna. Nunc blandit nulla in mattis luctus. Proin eu nulla posuere, bibendum leo et, faucibus ligula. Duis quis dolor condimentum, tempor odio et, cursus magna. Vestibulum vel ornare turpis. In hac habitasse platea dictumst. Fusce eget mauris quis quam auctor porta. Suspendisse potenti. Nulla justo risus, ornare a ligula sed, efficitur tincidunt ex. Etiam faucibus fringilla erat a facilisis. Duis ac laoreet erat, id efficitur magna. Duis id neque ut dolor semper venenatis. Cras hendrerit urna risus, at facilisis purus efficitur in. Nunc et congue enim, id sagittis magna.
                                </p>
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
                <br />

            </>
        )
       
    }
}

export default EventShow;