import './Header.css';
import { Navbar,Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

let Header = ()=>{
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>Music DB</Navbar.Brand>
        </Container>
      </Navbar>
        // <div>
        //     <ul>
        //         <li><NavLink to={"/"}>Home</NavLink></li>
        //         <li><NavLink to={"/users/"}>Users</NavLink></li>
        //         <li><NavLink to={"/users/100"}>UserDetails</NavLink></li>
        //         <li><NavLink to={"/about"}>About</NavLink></li>
        //         <li><NavLink to={"/7amada"}>Error</NavLink></li>
        //     </ul>
        // </div>
    )
}

export default Header;
