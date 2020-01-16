import React, { Component, Fragment } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    const { events, selectEvent } = this.props;
    return (
      <div>
        <Fragment>
          {events.map(event => (
            <EventListitem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
            />
          ))}
        </Fragment>
      </div>
    );
  }
}
export default EventList;
