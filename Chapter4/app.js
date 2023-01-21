import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// default import:
//----------------
//import Header from "./components/header";

// named import
//-------------
//import { Header, Title } from "./components/header";
//import { Title } from "./components/header";
// ----------------------------------
// import * as XYZ from "./components/header";

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

/* 
For creating a swiggy kind of restaurants site: we need components like
- Header
 -- Logo
 -- Nav items
 -- Cart Icon
- Body
 -- search bar
 -- Restaurant Section
    -- Restaurant items
        -- image
        -- food name
        -- Ratings
        -- Cuisines
        -- Prices
- footer
 -- Quick Links
 -- Copyrights

*/


// const KFC = {
//     name : "KFC",
//     image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
//     cuisines : ["South Indian", "Italian", "American"],
//     ratings : "4.3"
// }


/*
const RestaurantCards = () => {
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+seeAllRestaurants[0].data?.cloudinaryImageId} />
                <h3>{seeAllRestaurants[0].data?.name}</h3>
                <h4>{seeAllRestaurants[0].data?.cuisines.join(", ")}</h4>
                <h5>{seeAllRestaurants[0].data?.avgRating} Stars</h5>
            </div>
    )
}
*/
/*
const Body = () => {
    return ( <div className="body">
                <div className="restaurantCards">
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                </div>
            </div> );
    }
*/
/*
const RestaurantCards = (props) => {
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} />
                <h3>{props.restaurant.data?.name}</h3>
                <h4>{props.restaurant.data?.cuisines.join(", ")}</h4>
                <h5>{props.restaurant.data?.avgRating} Stars</h5>
            </div>
    )
}
*/
/*
const RestaurantCards = ({restaurant}) => { // destructuring props to {restaurant}
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?.cloudinaryImageId} />
                <h3>{restaurant.data?.name}</h3>
                <h4>{restaurant.data?.cuisines.join(", ")}</h4>
                <h5>{restaurant.data?.avgRating} Stars</h5>
            </div>
    )
}
*/
/*
const RestaurantCards = ({restaurant}) => { // we can destructure even this
    const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.data;
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{avgRating} Stars</h5>
            </div>
    )
}
const Body = () => {
    return ( <div className="body">
                <div className="restaurantCards">
                    <RestaurantCards restaurant= {seeAllRestaurants[0]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[1]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[2]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[3]}/> 
                    <RestaurantCards restaurant= {seeAllRestaurants[4]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[5]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[6]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[7]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[8]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[9]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[10]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[11]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[12]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[13]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[14]}/>
                </div>
            </div> );
    }
*/

/*
const Body = () => {
    return ( <div className="body">
                <div className="restaurantCards">
                    
                    { <RestaurantCards restaurant= {seeAllRestaurants[3].data}/> 
                    <RestaurantCards restaurant= {seeAllRestaurants[4].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[5].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[6].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[7].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[8].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[9].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[10].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[11].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[12].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[13].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[14].data}/> }

                    <RestaurantCards cloudinaryImageId= {seeAllRestaurants[0].data.cloudinaryImageId} name= {seeAllRestaurants[0].data.name} cuisines= {seeAllRestaurants[0].data.cuisines}/>
                    <RestaurantCards cloudinaryImageId= {seeAllRestaurants[1].data.cloudinaryImageId} name= {seeAllRestaurants[1].data.name} cuisines= {seeAllRestaurants[1].data.cuisines}/>
                    <RestaurantCards cloudinaryImageId= {seeAllRestaurants[2].data.cloudinaryImageId} name= {seeAllRestaurants[2].data.name} cuisines= {seeAllRestaurants[2].data.cuisines}/> 
                    
                    <RestaurantCards {...seeAllRestaurants[0].data}/>
                    <RestaurantCards {...seeAllRestaurants[1].data}/>
                    <RestaurantCards {...seeAllRestaurants[2].data}/>
                    <RestaurantCards {...seeAllRestaurants[3].data}/>
                    <RestaurantCards {...seeAllRestaurants[4].data}/>
                    <RestaurantCards {...seeAllRestaurants[5].data}/>
                    <RestaurantCards {...seeAllRestaurants[6].data}/>
                    <RestaurantCards {...seeAllRestaurants[7].data}/>
                    <RestaurantCards {...seeAllRestaurants[8].data}/>
                    <RestaurantCards {...seeAllRestaurants[9].data}/>
                    <RestaurantCards {...seeAllRestaurants[10].data}/>
                    <RestaurantCards {...seeAllRestaurants[11].data}/>
                    <RestaurantCards {...seeAllRestaurants[12].data}/>
                    <RestaurantCards {...seeAllRestaurants[13].data}/>
                    <RestaurantCards {...seeAllRestaurants[14].data}/>

                </div>
            </div> );
    } */


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