import React from 'react';
// import EventIndexContainer from './event_index_container';
import NavContainer from '../nav/nav_container';


class EventIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     // debugger
    //     this.props.requestEvents();
    // }

    

    render() {
        // debugger
        return (
            <>
            <header>
                <NavContainer/>
            </header>
            <div className="events-placeholder">
                <img src={EventsURL} alt=""/>
            </div>
            <footer>
                <img src={FooterURL} alt=""/>
            </footer>
            {/* <br/>
                <div className="main">
                    <div className="main-left">
                        <div className="left-top">
                            <div className='left-top-image'>
                                <img  src={AppacademyURL} alt="" />
                            </div>
                            <div>
                                app academy grad party
                            </div>
                        </div>
                        <div className="left-bottom">
                            <div className='left-bottom-left'>
                                <div className='left-bottom-left-image'>
                                    <img src={StarkURL} alt="" />
                                </div>
                                <div>
                                    stark expo event
                                </div>
                            </div>
                            <div className='left-bottom-right'>
                                <div className='left-bottom-right-image'>
                                    <img src={TedURL} alt="" />
                                </div>
                                <div>
                                    banner gamma talk
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="right-top">
                            <div className='right-top-left'>
                                <div className='right-top-left-image'>
                                    <img src={MaybdayURL} alt=""  />
                                </div>
                                <div>
                                    aunt may party
                                </div>
                            </div>
                            <div className='right-top-right'>
                                <div className='right-top-right-image'>
                                    <img src={BaxterURL} alt="" />
                                </div>
                                <div>
                                    baxter building reopening
                                </div>
                            </div>
                        </div>
                        <div className="right-bottom">
                            <div className='right-bottom-image'>
                                <img src={CaptainURL} alt=""  />
                            </div>
                            <div>
                                captain america july 4 event
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    
    }

}

export default EventIndex;