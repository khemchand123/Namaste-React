import { Outlet } from "react-router-dom";

const About = () => {
    return (
       <div className="about-page">
            <h1>About us Page ...</h1>
            <div>From Namaste React About us for getting some fun Information aboutus</div>
            <Outlet />
       </div>
    );
}

export default About;