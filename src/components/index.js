import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

	const navigate = useNavigate();
	const handleLogout =() => {
		localStorage.removeItem('login_token');
		navigate('/login');
	}
	return (
		<><div class='home-menu'>
        <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
    <svg viewBox="0 -15 1320 100" preserveAspectRatio="none">
      <text x="50%" y="20%" dy=".35em" text-anchor="middle">
        Arellano Music Studio
      </text>
    </svg>
			<Nav>
				<NavMenu>
                     <NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>  
					<NavLink to="/packages" activeStyle>
						Packages
					</NavLink>
					<NavLink to="/teachers" activeStyle>
						Teachers
					</NavLink>
					<NavLink to="/login" activeStyle>
						Login
					</NavLink>
					<Button  
					 activeStyle
					 onClick={handleLogout}
					 >
						Logout				
					</Button>
				</NavMenu>
			</Nav>
            </div>
            
		</>
	);
};

export default Navbar;
