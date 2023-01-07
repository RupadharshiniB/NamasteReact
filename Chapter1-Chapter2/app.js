import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = (<h2 id="title" key="h2" className="h2">Chapter - 2 - JSX, key</h2>); 
/*
 key - reconciliation key - we can parse the key in props for an element key in attribute. 
 When we have multiple children react tracks the key to match the children in unique keys like id's in HTML code

 this code is JSX - JSX is HTML code like syntax but it is not a HTML code its pure JSX / 
 behind the scenes of JSX is works as ==> createElement ==> converts as object ==> and converting into HTML(DOM)
 
 This is an Expression

 JSX Advantages=>
 - Readability
 - Less Code
 - Developer Experience
 - syntactically sugar
 - easily maintain
 - no repeatation

 Transitive Dependencies :
 There is a indirect relationship between the packages, there will be dependencies to other packages under babel.
*/
var xyz = 10;
const heal = () => {
    return ( <h1 id="test" key="test">This is a function</h1> );
};
const HeaderComponent = () => { // need to start with the first caps letter not case sensitive but for good practice need to follow in first caps letter
    return ( // no need of return() the result will come, but return () is a good practice to follow
         <div>
            {heading} 
            {xyz}
            {console.log(xyz)}
            {100*20}
            {heal()}
            <h2>Chapter - 2 - Components - Functional Components</h2>
         </div>
         );
};
/*
    Component Composition (or) Composing Component - If we use a component inside another component this is known as Component Composition (or) Composing Component
*/

const heading = React.createElement("h1",{
    id:'title', 
    className:'hedz', 
    style: {
        color:"red"
        }
    },"Chapter - 1");

   // const heading = React.createElement("h1",{},"Namaste React");
   // const heading = React.createElement("h1",null,"Namaste React");



const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading );
root.render (<HeaderComponent/>);

