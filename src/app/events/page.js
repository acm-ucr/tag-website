import React from "react";
import Header from "@/components/Header";
import CalendarEvents from "@/components/events/Calendar";

const Page = () => {
  return (
    <div>
      <Header text={"Events"} />
      <CalendarEvents />
    </div>
  );
};

export default Page;
