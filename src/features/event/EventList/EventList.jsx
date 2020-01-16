import React, { Component, Fragment } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <div>
        <Fragment>
          {events.map(event => (
            <EventListitem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
            />
          ))}
        </Fragment>
      </div>
    );
  }
}
export default EventList;
