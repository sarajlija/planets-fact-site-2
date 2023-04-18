import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./Header.css"
import { LinkContainer } from "react-router-bootstrap"

function Header() {
  return (
    <Navbar bg="" expand="sm">
      <Container className="align-items-center d-flex justify-content-center">
        <Navbar.Brand href="#" className="text-light">
          The planets
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "85px" }} navbarScroll>
            <LinkContainer to="/">
              <Nav.Item>
                <Nav.Link href="/" bsPrefix="nav-link__mercury ">
                  Mercury
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/venus">
              <Nav.Item>
                <Nav.Link href="/venus" bsPrefix="nav-link__venus">
                  Venus
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/earth">
              <Nav.Item>
                <Nav.Link href="/earth" bsPrefix="nav-link__earth">
                  Earth
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/mars">
              <Nav.Item>
                <Nav.Link href="/mars" bsPrefix="nav-link__mars">
                  Mars
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/jupiter">
              <Nav.Item>
                <Nav.Link href="/jupiter" bsPrefix="nav-link__jupiter">
                  Jupiter
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/saturn">
              <Nav.Item>
                <Nav.Link href="/saturn" bsPrefix="nav-link__saturn">
                  Saturn
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/uranus">
              <Nav.Item>
                <Nav.Link href="/uranus" bsPrefix="nav-link__saturn">
                  Uranus
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/neptune">
              <Nav.Item>
                <Nav.Link href="/neptun" bsPrefix="nav-link__neptun">
                  Neptune
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
