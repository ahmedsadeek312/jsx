import React from "react";
import me from "../me.jpg";

const ProfilePhoto = (props) => {
  props = { name: "ahmed", age: 23  };
  return (
    <>
      <div>
        <div>your age is {props.age}</div>
        <img height={300} src={me} />
      </div>
    </>
  );
};

export default ProfilePhoto;
