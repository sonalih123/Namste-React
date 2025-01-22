// now we have installed react just import it 
import React from 'react';
import ReactDOM from 'react-dom/client'
const heading=React.createElement("h1",{
    id:"heading",
}, "Hello from React js" );//{} this here is attribute we can add
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading)//it return an object
// root.render(heading)
// so now will try to create this structure in react
{/* <div id="parent">
    <div id="child">
    <h1>i am h1 tag</h1>
    </div>
    </div> */}
    // so now will create this in react
    // const heading1=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am h1 tag")));
    // now what if we have 2 heading so will do by passing the child in array
    // const heading1=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"i am heading 2")]))
    // now what if 2 div child
    {/* <div id="parent">
    <div id="child">
    <h1>i am h1 tag</h1>
    </div>
    <div id="child2">
    <h1>i am h1 tag</h1>
    </div>
    </div> */}
    const heading1=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")],
    ),React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")],
        
    )])
    // so this is actually how react works behind the scene but it's really difficult to understand this stuff and look compex so now here comes the JSX
    

    root.render(heading1)