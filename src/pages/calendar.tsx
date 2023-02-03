import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [{ title: "Meeting", start: new Date() }];

function Calendar() {
  return (
    <div>
      <Navbar />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        aspectRatio={2}
        // height={"100%"}
        editable={true}
        selectable={true}
        events={events}
        // eventContent={renderEventContent}
      />
      <Footer />
    </div>
  );
}

export default Calendar;

// a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }
