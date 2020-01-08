import React, { Component, Fragment } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <EventListitem />
          <EventListitem />
          <EventListitem />
        </Fragment>
      </div>
    );
  }
}
export default EventList;
