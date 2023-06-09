import { Outlet } from "react-router-dom";
import { Component } from "react";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const About = () => {
  const { user, setUser } = useContext(UserContext);
  function onChangeUserHandle(event){
    setUser({ ...user, name: event.target.value });
  }

  return (
    <div className="about-page">
      <h1>About us Page ...</h1>
      <div>
        From Namaste React About us for getting some fun Information aboutus
      </div>
      <input
        className="bg-green-200 shadow-md m-2 p-1"
        value={user.name}
        onChange={onChangeUserHandle}
      />
      <Outlet />
    </div>
  );
};

class AboutUs extends Component {
  render() {
    return (
      <div className="about-page">
        <h1>About us Page ...</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <div className="p-2 m-2 shadow-lg bg-slate-300 w-96 text-red-400 text-xl">
              <h1>{user.name}</h1>
              <h3>{user.email}</h3>
            </div>
          )}
        </UserContext.Consumer>
        <div>
          From Namaste React About us for getting some fun Information about us
        </div>
        <Outlet />
      </div>
    );
  }
}

export default About;
