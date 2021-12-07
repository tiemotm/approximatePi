import MathJax from "react-mathjax"

function MathExplanationMonteCarlo() {

    return (
        <MathJax.Provider>
            <MathJax.Node formula={
                "A_{square} = (2\\pi)^2 =  4r^2 \\iff \\frac{A_{square}}{4} = r^2"
            }/>
            <MathJax.Node formula={"A_{circle} = \\pi r^2 \\iff \\frac{A_{circle}}{4} = \\frac{\\pi r^2}{4}"}/>
            <MathJax.Node formula={"\\frac{\\frac{A_{circle}}{4}}{\\frac{A_{square}}{4}} = \\frac{\\frac{\\pi r^2}{4}}{r^2} \\iff \\frac{\\pi}{4}"}/>
            <p>
                The ratio of the areas of the square and the circle is
                equal to the ratio of the number of points that fall into the
                circle and the number of points within the square
                (total number of generated points).
            </p>
            <MathJax.Node formula={"\\frac{\\frac{A_{circle}}{4}}{\\frac{A_{square}}{4}} = \\frac{\\text{Number of points in circle}}{\\text{Total number of points}} = \\frac{\\pi}{4}"}/>
            <MathJax.Node formula={"\\iff \\pi = \\frac{\\text{Number of points in circle}}{\\text{Total number of points}} \\cdot 4"}/>
        </MathJax.Provider>
    )
}

export default MathExplanationMonteCarlo