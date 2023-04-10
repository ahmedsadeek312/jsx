import logo from "./logo.svg";
import "./App.css";
// import me from "me.jpg";
import ProfilePhoto from "./profile/ProfilePhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";
import EventBut from "./profile/EventBut";

function App() {
  return (
    <div className="App">
      <h1>Profile Task</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
      <EventBut />
    </div>
  );
}

export default App;
