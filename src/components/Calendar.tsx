import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [{ title: "Meeting", start: new Date() }];

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      // aspectRatio={3}
      height={"100%"}
      // height={"100%"}
      editable={true}
      selectable={true}
      events={events}
      // eventContent={renderEventContent}
    />
  );
}

export default Calendar;
