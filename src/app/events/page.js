import React from "react";
import Header from "@/components/Header";
import CalendarEvents from "@/components/events/CalendarEvents";

const Page = () => {
  return (
    <div>
      <Header text={"Events"} />
      <div className="w-full sm:w-[80%] mx-auto mb-10">
        <CalendarEvents />
      </div>
    </div>
  );
};

export default Page;
