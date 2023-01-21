import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/*
-----------------npm--------------------

npm init // creates package.json
npm init -Y //(-Y skip up list of option )
npm install react (or) npm i react
npm install react-dom (or) npm i react-dom
npm install parcel
npm install -D parcel (or) npm install --save-dev parcel // for DevDependencies
npx parcel index.html // to start which file should execute to create a local server
npm run start (or) npm start // to run the server

npx parcel build index.html // for build command
npm run build // for build command

uninstall parcel:-
----------------
npm uninstall parcel
npm uninstall -g parcel

*/
const AppLayout = () => (
    <React.Fragment>
        <div className="container">
            {/* <XYZ.Header/> this is for -----> import * as XYZ from "./components/header"; same as <React.Fragment>*/}
            <Header/>
            <Body/>
            <Footer/>
        </div>
   </React.Fragment>
)
const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<AppLayout/>);