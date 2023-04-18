import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import data from "../../data.json"
import { Link } from "react-router-dom"
function Venus() {
  return (
    <Container>
      <Row>
        <Col md={6} className="vh-100 d-flex justify-content-center align-items-center">
          <Image src={data[1].images.planet} />
        </Col>
        <Col md={6} className="vh-100">
          <Card>
            <Card.Body className="text-light">
              <Card.Title as="h1">{data[1].name}</Card.Title>
              <Card.Text>{data[1].overview.content}</Card.Text>
              <Card.Text>
                Source:
                <a href={data[1].overview.source} className="me-2 ms-2">
                  Wikipedia
                  <Image fluid src="./assets/icon-source.svg" />
                </a>
              </Card.Text>{" "}
            </Card.Body>
            <Nav variant="pills" defaultActiveKey="">
              <Nav.Item>
                <Link to="/venus">
                  <span>01</span>OVERVIEW
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/venus-structure">
                  <span>02</span>Internal Structure
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/venus-geology">
                  <span>03</span>Surface Geology
                </Link>
              </Nav.Item>
            </Nav>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Venus
