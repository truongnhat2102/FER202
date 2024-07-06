import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
// import kl from "../assets/images/kl.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function NavbarComponent() {
  return (
    <Navbar className="container">
      <Navbar.Brand style={{ color: "white" }} href="#">
        Pizza House
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link style={{ color: "white" }} href="#" active>
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#">
            About us
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#">
            Contact
          </Nav.Link>
        </Nav>
        <Form className="d-flex" role="search">
          <FormControl type="search" placeholder="Search" aria-label="Search" />
          {/* <a
            href={kl}
            style={{
              backgroundColor: "red",
              marginTop: "2px",
              borderRadius: "20%",
              paddingTop: "2px",
            }}
          >
            <Image
              src={kl}
              alt="Search"
              width="30"
              height="30"
              className="mx-2"
            />
          </a> */}
          <button
            type="submit"
            style={{
              backgroundColor: "red",
              border: "none",
              borderRadius: "2px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginLeft: "10px",
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
