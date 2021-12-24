import React from 'react'
import './Calculator.css'

function Results({reset, tipAmount, total}) {
    return (
        <div className='Results bg-dark'>
            <div className="">
            <div className="Results__row">
                <h2>Tip Amount <br /> <span className="subtext">/ person</span> </h2>
                <h1>${tipAmount}</h1>
            </div>
            <div className="Results__row">
            <h2>Total <br /> <span className="subtext">/ person</span> </h2>
                <h1>${total}</h1>
            </div>
            </div>
            <button className="btn-reset" onClick={reset}>Reset</button>
        </div>
    )
}


export default Results
