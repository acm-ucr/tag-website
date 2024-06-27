"use client";
import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomEvent from "./CustomEvent";
import CustomToolbar from "./CustomToolbar";
import CustomHeader from "./CustomeHeader";

const mLocalizer = momentLocalizer(moment);

const CalendarTemp = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tenWeeks = 60 * 60 * 24 * 7 * 1 * 1000;
        const currDate = new Date().getTime();
        const calendarUri =
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          )}/events?` +
          `key=${encodeURIComponent(
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
          )}` +
          `&singleEvents=true&orderBy=startTime` +
          `&timeMin=${encodeURIComponent(
            new Date(currDate - tenWeeks).toISOString()
          )}` +
          `&timeMax=${encodeURIComponent(
            new Date(currDate + tenWeeks).toISOString()
          )}`;
        console.log("calendarUri:", calendarUri);
        const response = await fetch(calendarUri);

        // const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        console.log(data);
        const items = data.items.map((item) => {
          item.allDay = !item.start.dateTime;
          (item.start = item.start.dateTime
            ? new Date(item.start.dateTime)
            : new Date(new Date(item.start.date).getTime())),
            (item.end = new Date(
              item.end.dateTime || new Date(item.end.date).getTime()
            )),
            (item.hidden = false);

          return item;
        });
        setEvents(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      <div>
        <Calendar
          date={date}
          events={events}
          localizer={mLocalizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 800 }}
          components={{
            event: CustomEvent,
            toolbar: CustomToolbar,
            header: CustomHeader,
          }}
          onNavigate={(newDate) => {
            setDate(newDate);
          }}
        />
      </div>
      {/* {events && <Modal event={events} setState={setEvents} />} */}
    </section>
  );
};

export default CalendarTemp;
