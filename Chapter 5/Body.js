import { useState } from "react";
import { seeAllRestaurants } from "../config";
import { RestaurantCards } from "./RestaurantCard"; 
import { useState } from "react";

function filterData(searchText, allRestaurants){
    // const filterData = allRestaurants.filter((seeAllRestaut) => seeAllRestaut.data.name.includes(searchText));
    // return filterData();
    return   allRestaurants.filter((seeAllRestaut) => seeAllRestaut.data.name.includes(searchText));
    }

const Body = () => { 
    
    // What is State?
    // What is React Hook? // Hook is basically a function which use to create a local Variable
    // what is useState? why do we need a useState()
    // what is databinding in React?

    //const searchTxt = "KFC"; // this is js to create a variable
    //searchText is a Local State Variable

    //const [searchText, setSearchText] = useState("KFC"); // To create state Variable // this is React to create a variable //"KFC" is the default value of Search Textbox
    //useState() this function returns an array, return = [variable name, Function to update the variable]
                        // setSearchText - IT coulb be any name for searchText before this we just adding set and as setSearchText

    //const [searchText, setSearchText] = useState("KFC"); 
    // here this is two-way binding - because update "value={searchText}" and putting the value inside it setSearchText(e.target.value) 
    // reading as well as writing both happens so it is 2way binding

    //const [searchText, setSearchText] = useState("KFC");
    //(or)

    // const searchVar = useState("KFC"); 
    // const [searchText, setSearchText] = searchVar; 

    const [allRestaurants, setAllRestaurants] = useState(seeAllRestaurants);
    const [searchText, setSearchText] = useState("Restaurant Name")

    return ( <> <div className="body">
                    {/*  now we need a search bar */}
                    <div className="search-wrap">
                        
                         <input 
                            className="search-input" 
                            type="text" 
                            placeholder="Search" 
                            value={searchText} // here we need to data binding 
                            /* value={searchTxt} it brings the value from let searchTxt = "KFC"; this is not editable in textbox 
                             onChange = ""  It will change by the value when something action done inside the text box  
                            onChange = {(e) => console.log("kdjfhkjsdf")}
                            onChange = {(e) => console.log(e.target.value)} (whatever we write inside the text box ie - e.target.value) which goes in inside the const [searchText] */
                            // we have to change the value which we target
                            onChange = {(e) =>{ // e means we can read it
                                setSearchText(e.target.value); // putting the setSearchText value inside the value = {searchText}
                            }}
                            >
                                {/* for example: we can see the reconciliation happens in using the useState()
                                const [searchClicked, setSearchClicked] = useState("False")
                                <h1>False</h1> // for each click it will switch to False:True it reconciliate the H1 tag alone
                                <button onClick{()=> setSearchClicked("True")}>Search</button>
                                (or)
                                <button onClick{()=> 
                                    if(setSearchClicked === "true") {
                                        setSearchClicked("False");
                                    } else {
                                        setSearchClicked("True");
                                    }
                                }>Search</button>
                                */}
                        </input>  
                        {/* <button>Search {searchText}</button> */}
                        <button onClick={()=> {
                            //need to filter while Click the button
                            const restData = filterData(searchText, allRestaurants);
                            setAllRestaurants (restData);
                        }}>Search</button>
                    </div>
                    <div className="restaurantCards"> 
                        {/* // now we are using for loop function for map() */}
                        {allRestaurants.map((restaurantcard) => {
                            return <RestaurantCards {...restaurantcard.data} key={restaurantcard.data.id} />
                        })}
                    </div>
                </div> </> ); 
} 

export default Body;