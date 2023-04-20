import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./Header.css"
import { LinkContainer } from "react-router-bootstrap"
import data from "../data.json"

function Header() {
  const [valueHeader, setValueHeader] = useState(0)
  const { name } = data[valueHeader]
  console.log(name)
  return (
    <Navbar bg="" expand="sm">
      <Container className="align-items-center d-flex justify-content-center">
        <Navbar.Brand href="#" className="text-light">
          The planets
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "85px" }} navbarScroll>
            {data.map((item, index) => (
              <LinkContainer key={item.name} to={`/${item.name !== "Mercury" ? item.name.toLowerCase() : ""}`} onClick={() => setValueHeader(index)}>
                <Nav.Item>
                  <Nav.Link href={`/${item.name !== "Mercury" ? item.name.toLowerCase() : ""}`} bsPrefix="nav-link__mercury" className={` ${index === valueHeader && "active"}`}>
                    {item.name}
                  </Nav.Link>
                </Nav.Item>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
