import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import data from "./data.json"
function Footer() {
  return (
    <Container className="">
      {data.map((itx, index) => (
        <Row key={index} xs={1} md={4} className="g-4  overflow-hidden">
          <Col>
            <Card bsPrefix="card__footer">
              <Card.Body>
                <Card.Title bsPrefix="">ROTATION TIME</Card.Title>
                <Card.Footer as="h1">{itx.rotation}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bsPrefix="card__footer">
              <Card.Body>
                <Card.Title>REVOLUTION TIME</Card.Title>
                <Card.Footer>{itx.revolution}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bsPrefix="card__footer">
              <Card.Body>
                <Card.Title>radius</Card.Title>
                <Card.Footer as="h1">{itx.radius}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bsPrefix="card__footer">
              <Card.Body>
                <Card.Title>AVERAGE TEMP.</Card.Title>
                <Card.Footer as="h1">{itx.temperature}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Footer
