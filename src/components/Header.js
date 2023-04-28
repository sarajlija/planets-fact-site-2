import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
//import "./Header.css"
import { LinkContainer } from "react-router-bootstrap"
import data from "../data.json"

function Header({ windowWith }) {
  const [valueHeader, setValueHeader] = useState(0)
  const [state, setState] = useState(false)
  const { name } = data[valueHeader]
  console.log(name)

  const handleClick = index => {
    setValueHeader(index)
  }
  const showPlanet = () => {
    setState(true)
  }

  return (
    <Navbar bg="" expand="sm">
      <Container className="align-items-center d-flex justify-content-md-center flex-sm-column flex-md-row justify-content-sm-between" bsPrefix="container__header">
        <div className="wrapper">
          <Navbar.Brand href="#" className="text-light">
            The planets
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav" className={`${console.log(state)}`}>
          <Nav className="ms-auto my-2 my-lg-0">
            {data.map((item, index) => (
              <LinkContainer key={item.name} to={`/${item.name !== "Mercury" ? item.name.toLowerCase() : ""}`} onClick={() => handleClick(index)}>
                <Nav.Item>
                  <Nav.Link onClick={() => showPlanet()} href={`/${item.name !== "Mercury" ? item.name.toLowerCase() : ""}`} bsPrefix={`nav-link__${item.name.toLowerCase()}`} className={` ${index === valueHeader && "active"}`}>
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
