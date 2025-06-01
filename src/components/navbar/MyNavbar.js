import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./MyNavbar.css";
import { useContext, useEffect, useState } from "react";
import MyButton from "../button/MyButton";
import { NavLink } from "react-router-dom";
import { myContext } from "../../App";
function MyNavbar({ stickyToTop }) {
  const [isVisible, setIsVisible] = useState(true);
  const { cartCount } = useContext(myContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const expand = "lg";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className={`navbox w-100 navbar ${isVisible ? "simple" : "stick"} ${
          stickyToTop ? "sticky-top" : "normal-top"
        }`}
        variant="dark"
      >
        <Container fluid="sm">
          <Navbar.Brand
            className="brand playFair-font-semi fs-2 text-white"
            href="/"
          >
            Restaurantly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="bg-dark z-100"
            variant="dark"
          >
            <Offcanvas.Header className="text-white playFair-font">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Restaurantly
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-between">
              <Nav className="m-auto gap-5">
                <NavLink to={"/"} className="text-white" href="#action1">
                  Home
                </NavLink>
                <NavLink
                  to={"/cart"}
                  className=" position-relative text-white"
                  href="#action1"
                >
                  cart
                  {cartCount == 0 ? (
                    ""
                  ) : (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </NavLink>
                <NavLink to={"/aboutUs"} className="text-white" href="#action1">
                  about Us
                </NavLink>
                <NavLink to={"/login"} className="text-white" href="#action2">
                  login{" "}
                </NavLink>
              </Nav>
              <div className="d-flex text-center my-3">
                <NavLink to={"/bookTable"}>
                  <MyButton text={"BOOK A TABLE"} />
                </NavLink>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
