import React, { useState } from 'react';
import Plot from "react-plotly.js";
import {Container, Row, Form, Button} from 'react-bootstrap'

function PiPlot() {
    
    //Initial empty data (x, y, colors for markers)
    const initialData = {
        x: [],
        y: [],
        colors: [],
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
    
    //Reset input value
    const resetInput = () => {
        setInput("")
        console.log("Resetted form")
    }

    //If submitted form check if input value is not empty, compute data and reset form
    const handleSubmit = (e) => {
        e.preventDefault()

        if(input !== "") {
            estimatePi(parseInt(input))
        }
        
        console.log("Computed data:")
        console.log(data)
        resetInput()
    }

    const estimatePi = (n) => {
        //temp arrays for storing points
        let x = Array.from({length: n}, () => Math.random())
        let y = Array.from({length: n}, () => Math.random())
        let colors = Array.from({length: n}, (v, i) => {
            //Euclidean norm of point
            let norm = Math.sqrt((x[i] ** 2) + (y[i] ** 2))
            
            //If point inside circle color red, if outside color blue
            if(norm < 1){
                return 'red'
            } else {
                return 'blue'
            }
        
        })

        //Update data
        setData({
            x: x,
            y: y,
            colors: colors
        })
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Container fluid="md" className="ratio ratio-1x1">
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
                            },
                            
                            yaxis: {
                                fixedrange: true,
                                range: [0, 1],
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
                                    }
                                }
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
            </Row>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Container className="p-2 d-flex justify-content-center">
                        <div className="me-2">
                            <Form.Control
                                type="number"
                                value={input}
                                placeholder="Enter number"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Button type="submit">Calculate</Button>
                        </div>
                    </Container>
                </Form>
            </Row>
        </Container> 
    );
}

export default PiPlot