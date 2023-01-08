import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo" onClick={useNavigate("/")}>SOYEMI HOTELS</span>
            <div className = "navitems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div> 
        </div>
    </div>
  )
}

export default Navbar