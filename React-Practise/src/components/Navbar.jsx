import {Link} from "react-router-dom"
function Navbar(){
    return(
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Course">Course</Link></li>
        </ul>
    )
}
export default Navbar;