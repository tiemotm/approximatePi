import { useRef, useEffect } from "react";

function Polygon(props) {

    let points = []

    for (let i = 1; i < props.sides + 2; i++) {
        points.push({
          x:
            props.cx +
            Math.round(props.r * Math.sin((Math.PI / (props.sides / 2)) * i)),
          y:
            props.cy +
            Math.round(props.r * Math.cos((Math.PI / (props.sides / 2)) * i))
        });
    }

    let pointsStr = ""
    
    points.forEach(point => {
        pointsStr += `${point.x}, ${point.y} `
    })

    return (
        <svg viewBox="0 0 710 710" width="100%" height="100%">
            <circle r="350" cx="355" cy="355" fill="none" stroke="black" strokeWidth="3"/>
            <polygon points={pointsStr} fill="none" stroke="red" strokeWidth="3"/>
        </svg>
    )
}

export default Polygon