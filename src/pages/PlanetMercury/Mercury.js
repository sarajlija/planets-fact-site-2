import React, { useState } from "react"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import data from "../../data.json"
import "./Mercury.css"

function Mercury() {
  const [mercury, setMercury] = useState(true)

  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image fluid src={mercury ? data[0].images.internal : data[0].images.geology ? data[0].images.planet : null} />
        </Col>
        <Col md={6} className="">
          <Card>
            <Card.Body className="text-light">
              <Card.Title as="h1">{data[0].name}</Card.Title>
              <Card.Text>{data[0].overview.content}</Card.Text>
              <Card.Text>
                Source:
                <a href={data[0].overview.source} className="me-2 ms-2">
                  Wikipedia
                  <Image fluid src="./assets/icon-source.svg" />
                </a>
              </Card.Text>
            </Card.Body>
            <div className="d-grid gap-2 w-100">
              <Button variant="outline-light" className="rounded-0" bsPrefix="btn__overview" onClick={() => setMercury(true)}>
                <span className="me-2">01</span>overveiw
              </Button>
              <Button variant="outline-light" className="rounded-0" bsPrefix="btn__internal" onClick={() => setMercury(false)}>
                <span className="me-2">01</span>internal structure
              </Button>
              <Button variant="outline-light" className="rounded-0" bsPrefix="btn__surface" onClick={() => setMercury(true)}>
                <span className="me-2">01</span>surface geology
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
              <Card.Footer as="h1">{data[0].rotation}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>REVOLUTION TIME</Card.Title>
              <Card.Footer as="h1">{data[0].revolution}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>radius</Card.Title>
              <Card.Footer as="h1">{data[0].radius}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bsPrefix="card__footer">
            <Card.Body>
              <Card.Title>AVERAGE TEMP.</Card.Title>
              <Card.Footer as="h1">{data[0].temperature}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Mercury
