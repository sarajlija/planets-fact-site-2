import React, { useState } from "react"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import data from "../../data.json"
//import "./Mercury.css"

function Mercury() {
  const [value, setValue] = useState(0)

  const { name, overview, structure, geology, rotation, revolution, radius, temperature, images } = data[0]

  return (
    <Container bsPrefix="container__card">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image fluid src={value === 0 ? images.planet : value === 1 ? images.internal : images.geology} />
        </Col>
        <Col md={6} className="">
          <Card>
            <Card.Body className="text-light">
              <Card.Title as="h1">{name}</Card.Title>
              <Card.Text>{value === 0 ? overview.content : value === 1 ? structure.content : geology.content}</Card.Text>
              <Card.Text>
                Source:
                <a href={overview.source} className="me-2 ms-2">
                  Wikipedia
                  <Image fluid src="./assets/icon-source.svg" />
                </a>
              </Card.Text>
            </Card.Body>

            <div className="d-grid gap-2 w-100">
              <Button variant="outline-light" className={` ${0 === value && "active"}`} bsPrefix="btn__overview__mercury" onClick={() => setValue(0)}>
                <span className="me-2">01</span>overveiw
              </Button>
              <Button variant="outline-light" className={` ${1 === value && "active"}`} bsPrefix="btn__internal__mercury" onClick={() => setValue(1)}>
                <span className="me-2">02</span>internal structure
              </Button>
              <Button variant="outline-light" className={` ${2 === value && "active"}`} bsPrefix="btn__surface__mercury" onClick={() => setValue(2)}>
                <span className="me-2">03</span>surface geology
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4 ">
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title bsPrefix="">ROTATION TIME</Card.Title>
              <Card.Footer as="h1">{rotation}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>REVOLUTION TIME</Card.Title>
              <Card.Footer as="h1">{revolution}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>radius</Card.Title>
              <Card.Footer as="h1">{radius}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>AVERAGE TEMP.</Card.Title>
              <Card.Footer as="h1">{temperature}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Mercury
