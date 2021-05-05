import React from "react"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar expand="sm" className="justify-content-between" style={{fontFamily: "Arial Black", background: "#737B80"}} >
      <Navbar.Brand as={Link} to="/" style={{ color: "#F2F2F2"}}>
        <FontAwesomeIcon icon={faCode} style={{color: "#7AADCC"}} />
        Dev Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" style={{ color: "#F2F2F2"}}>
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
