import React, { useState } from 'react';
import Plot from "react-plotly.js";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

function PiPlot() {
    
    //Initial empty data (x, y, colors for markers)
    const initialData = {
        n: 0,
        hits: 0,
        x: [],
        y: [],
        colors: [],
        pi: 0.0,
    }

    //Use state for updating data
    const [data, setData] = useState(initialData)

    //Form input
    const [input, setInput] = useState("")

    //Update input if changes
    const handleChange = (e) => {
        setInput(e.target.value)
        console.log("Changed to: " + e.target.value)
    }
    
    //If submitted form check if input value is not empty, compute data and reset form
    const handleSubmit = (e) => {
        e.preventDefault()

        if(input !== "") {
            estimatePi(parseInt(input))
        }
        
        console.log("Computed data:")
        console.log(data)
        //resetInput()
    }

    const resetForm = () => {
        setData(initialData)
        setInput("")
    }

    const estimatePi = (n) => {
        //temp arrays for storing points
        let x = Array(n)
        let y = Array(n)
        let colors = Array(n)
        let hits = 0

        for (let i = 0; i < n; i++) {
            x[i] = Math.random();
            y[i] = Math.random();
            
            let norm = Math.sqrt((x[i] ** 2) + (y[i] ** 2))

            //If point inside circle color red, if outside color blue
            if(norm < 1){
                hits++
                colors[i] = "red"
            } else {
                colors[i] = "blue"
            }
        }

        let pi = (4 * (hits/n))

        //Update data
        setData({
            n: n,
            hits: hits,
            x: x,
            y: y,
            colors: colors,
            pi: pi,
        })
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center text-center">
                <Container fluid className="ratio ratio-1x1">
                    <Plot
                        data={[
                            {
                                x: data.x,
                                y: data.y,
                                type: 'scatter',
                                mode: 'markers',
                                marker: {color: data.colors},
                            },
                        ]}
                        
                        layout={{
                            
                            autosize: true,
                            showlegend: false,
                            
                            xaxis: {
                                fixedrange: true,
                                range: [0, 1],
                                mirror: true,
                                ticks: 'outside',
                                showline: true,
                            },
                            
                            yaxis: {
                                fixedrange: true,
                                range: [0, 1],
                                mirror: true,
                                ticks: 'outside',
                                showline: true,
                            },
                            
                            shapes: [
                                {
                                    type: 'circle',
                                    xref: 'x',
                                    yref: 'y',
                                    x0: '-1',
                                    y0: '-1',
                                    x1: '1',
                                    y1: '1',
                                    line: {
                                        color: 'black',
                                        width: ''
                                    }
                                },
                            ]
                        }}
                        
                        useResizeHandler={true}
                        
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                        
                        config={{
                            staticPlot: true,
                        }}
                        />
                </Container>
                {data.pi ? <h2 className="p-3">π ≈ {data.pi}</h2> : ""}
            </Row>
            <Row className="px-5">
                <Form onSubmit={handleSubmit}>
                    <Container className="py-1 px-0 d-flex justify-content-center">
                        <Row>
                            <Col className="py-1 px-0">
                                <Form.Control
                                    className=""
                                    type="number"
                                    value={input}
                                    placeholder="Enter number"
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col xl className="py-1 px-0">
                                <div className="d-flex justify-content-center">
                                    <Button className="me-2" type="submit">Calculate</Button>
                                    <Button className="px-4" onClick={resetForm}>Reset</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Row>
        </Container> 
    );
}

export default PiPlot