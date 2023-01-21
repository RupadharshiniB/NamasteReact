import { useState } from "react";

export const Title = () =>  ( <img alt="Food Villa Logo" className="logo_wrap" 
                            src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"/> );

const loggedInUser = () => {
    //API call check the Authentication
    return false;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">    
            <Title/> {/* const Title = () =>*/}
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            {/* lets create login and logout button here 
                - if the login shows logout should hide vice versa
                - 
            */}
            { isLoggedIn ? (
                <button onClick={()=> setIsLoggedIn(false)}>Log out</button> 
                ) : ( 
                <button onClick={()=> setIsLoggedIn(true)}>Login</button> 
                ) }
            {/* <button>Logout</button> */}
            
        </div>
    )
};

export default Header;