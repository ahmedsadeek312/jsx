import React from "react";

const EventBut = () => {
  const handle = () => {
    alert("hello Bro");
  };
  return (
    <div>
      <button onClick={handle}>click me</button>
    </div>
  );
};

export default EventBut;
