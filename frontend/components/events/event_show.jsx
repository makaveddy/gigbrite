import React from 'react';

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

        return (
        <p>{this.props.event.title}</p>
        )
       
    }
}

export default EventShow;