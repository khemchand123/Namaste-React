import React from 'react'
import ReactDOM from 'react-dom/client'
/**
 * 
 * 
 *   <div id="parent">
 *       <div id="child">
 *         <h1>h1 content for heading!<h1>
 *       </div>
 *   </div>
 * 
 * 
 * 
 * 
 */
const parent = React.createElement(
    "div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "h1 content for heading !"),
            React.createElement("h2", {}, "h2 content for heading !")
            ]),
            React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "h1 content for heading !"),
            React.createElement("h2", {}, "h2 content for heading !")
            ])
    ]
);

const heading = React.createElement("h1",
    {
        id: "heading",
        xyz: "key001"
    },
    "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

