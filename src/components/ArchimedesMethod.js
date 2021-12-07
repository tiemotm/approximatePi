import { Container } from "react-bootstrap"
import { useState, useEffect } from "react";
import Polygon from "./Polygon"
import { Row, Col, Form, Button } from 'react-bootstrap'

// TODO: change calculation to not use pi constant
function ArchimedesMethod() {
    const [sides, setSides] = useState(3)
    const [pi, setPi] = useState(0.0)

    useEffect(() => {
        setPi(sides * Math.sin(1/sides * Math.PI))
    })

    const handleChange = (e) => {
        setSides(e.target.value)
        console.log("Changed to: " + e.target.value)
    }
    
    return (
        <Container className="p-2">
            <Row className="d-flex justify-content-center text-center p-2">
                <Container fluid className="ratio ratio-1x1 py-5">
                    <Polygon sides={sides} cx={355} cy={355} r={350}/>
                </Container>
                <h2 className="py-3 px-0">π ≈ {pi}</h2>
            </Row>
            <Row className="px-4">
                <Form>
                    <Container className="py-1 px-0">
                        <Row>
                            <Col className="py-1 px-0">
                                <Form.Label>
                                    Sides: {sides}
                                </Form.Label>
                                <Form.Range
                                    min={3}
                                    max={100}
                                    className=""
                                    type="number"
                                    value={sides}
                                    placeholder="Enter number"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Row>
        </Container>
    )
}

export default ArchimedesMethod