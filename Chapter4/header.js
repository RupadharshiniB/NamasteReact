export const Title = () =>  ( <img alt="Food Villa Logo" className="logo_wrap" 
                            src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"/> );
const Header = () => {
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
        </div>
    )
};

export default Header;