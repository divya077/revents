import React, { Component, Fragment } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    return (
      <div>
        <Fragment>
          {this.props.events.map(event=>(
             <EventListitem key={event.id} event={event}/>
          ))}
          
        </Fragment>
      </div>
    );
  }
}
export default EventList;
