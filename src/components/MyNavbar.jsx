// First way
import { Navbar, Nav, Container } from "react-bootstrap";
// Second way
// import Navbar from 'react-bootstrap/Navbar'

const MyNavbar = ({ title, color }) => {
  // props is an object
  // {
  //   title: 'Strivestaurant'
  //   color: 'dark
  // }
  return (
    <Navbar
      onClick={(e) => console.log("clicked!", e)}
      collapseOnSelect
      expand="lg"
      bg={color}
      variant={color}
    >
      <Container>
        <Navbar.Brand href="#home">
          {title} - bookstore for the soul
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
