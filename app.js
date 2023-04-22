import React from 'react'
import ReactDOM from 'react-dom/client'

const Heading = () => (
    <h1>Namaste React from JSX</h1>
)

//React Component
const HeadingComponent = () => (
    <div id="heading" className="heading">
        <Heading />
        <h1 tabIndex="1">Namaste React Component!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
