import {Container, Row, Col, Form} from "react-bootstrap";
import MathJax from "react-mathjax";
import React, {useEffect, useState} from "react";
import Plot from "react-plotly.js";

function GregoryLeibnizSeries() {

    const initialData = {
        x: [],
        y: [],
        pi: 0.0,
    }

    const [data, setData] = useState(initialData);
    const [n, setN] = useState(0);

    useEffect(() => {
        console.log(n)
        var series = seriesPi(n)
        console.log(series.x, series.y, series.pi)
        setData({
            x: series.x,
            y: series.y,
            pi: series.pi
        })
    }, [n, ])

    const handleChange = (e) => {
        setN(e.target.value)
    }

    const seriesPi = (n) => {
        var sum = 0
        var x = Array(n)
        var y = Array(n)

        for (let i = 0; i <= n; i++) {
            sum += Math.pow(-1, i)/(2*i+1)
            x[i] = i
            y[i] = (4 * sum)
        }

        var pi = 4 * sum

        return {x: x, y: y, pi: pi}
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
                                mode: 'lines',
                                line: {
                                    color: 'red',
                                    width: 3
                                }
                            },
                        ]}

                        layout={{

                            autosize: true,
                            showlegend: false,
                            margin: {
                                t: 25, b: 25, l: 25, r: 25
                            },

                            xaxis: {
                                autorange: true,
                                rangemode: 'tozero',
                                ticks: 'outside',
                                showline: true,
                            },

                            yaxis: {
                                autorange: true,
                                ticks: 'outside',
                                showline: true,
                            },

                            shapes: [
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
                {data.pi ? <h2 className="py-3 px-0">π ≈ {data.pi}</h2> : ""}
            </Row>
            {/*<MathJax.Provider>
                <MathJax.Node formula={"\\pi = 4\\sum_{i=1}^{\\infty} \\frac{(-1)^{i}}{2i+1}"}/>
            </MathJax.Provider>*/}
            <Row className="px-4 py-1">
                <Form>
                    <Container className="py-1 px-0">
                        <Row>
                            <Col className="py-1 px-0">
                                <Form.Label>
                                    n: {n}
                                </Form.Label>
                                <Form.Range
                                    min={0}
                                    max={500}
                                    className=""
                                    type="number"
                                    value={n}
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

export default GregoryLeibnizSeries