import { useState } from "react";
import { seeAllRestaurants } from "../config";
import { RestaurantCards } from "./RestaurantCard"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, allRestaurants){
    return   allRestaurants.filter((seeAllRestaut) => seeAllRestaut?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    }

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")
    
    // when does the components re-render?
    // When the useState and props changes then the components re-render.
    // how to fix the error handlng ?
    // what is the difference between the JS Expression and JS Statement?
    // for ex: 
    /*
        { // this dont work JS Statement inside the JSX
            const a = 10;
            console.log(a)
        }
        but 
        {   // this is will work - JS Expression inside the JSX
            ((a=10), console.log(a))
        }
    */
        // Micro services Architectures for a Single Project
        // - UI - react
        // - Backend API - may be in angular,
        // - notification - in python
        // etc like this so many micro services are covered in this kind of projects
        
    // useEffect(()=>{
    //     console.log("render");
    // }, []);

    // useEffect() is a function of hook giving 2 parameters 1. is ()=>{ callback function } 2. [dependency Array]
    // Empty dependency array ==> once after render
    // Dependency array [searchText] => once after initial render + everytime after re-render (When my searchText has changed)
    
    // useEffect(()=>{
    //     console.log("Whenever the dependency {searchText} is changed the callback will be called");
    //   }, [searchText]);

    useEffect(()=>{
        //API call
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json(); // to convert the api code in json 
        console.log(json)
        //optional chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    console.log("render");


    // how to avoid rendering a component? use optional chaining
    // not render components (Early return)
    if(!allRestaurants) return null;
    // (or)
    // return (allRestaurants?.length === 0 ) ? <Shimmer/> : ( 

   /*
    Conditional Rendering:
    ---------------------
    - if restaurant is empty till loading => shimmer ui
    - if restaurant rendered then => actual ui
   */
    return (allRestaurants?.length === 0 ) ? <Shimmer/> : ( 
                <>
                <div className="body">
                    {/*  now we need a search bar */}
                    <div className="search-wrap">
                        
                         <input 
                            className="search-input" 
                            type="text" 
                            placeholder="Search" 
                            value={searchText}
                            onChange = {(e) =>{ // e means we can read it
                                setSearchText(e.target.value); // putting the setSearchText value inside the value = {searchText}
                            }}
                            ></input>
                        {/* <button>Search {searchText}</button> */}
                        <button onClick={()=> {
                            //need to filter while Click the button
                            const restData = filterData(searchText, allRestaurants);
                            setFilteredRestaurants (restData);
                        }}>Search</button>
                    </div>
                    <div className="restaurantCards"> 
                        {/* write logic for No Restaurant found here it is a home work */}
                        {/* // now we are using for loop function for map() */}
                        {filteredRestaurants.map((restaurantcard) => {
                            return <RestaurantCards {...restaurantcard.data} key={restaurantcard.data.id} />
                        })}
                    </div>
                </div> 
                </> ); 
} 

export default Body;