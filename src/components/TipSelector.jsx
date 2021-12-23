import React from 'react'
import './Calculator.css'

function TipSelector({percentage, changeTipPercentage}) {

    function buildPercentages(){
        const percs = [5,10,15,25,50]
        return (
         <>
            {percs.map((perc,idx) => 
            perc === percentage ? 
            <div key={idx} className="tip-perc active bg-dark" onClick={() => changeTipPercentage(perc)}>{perc}%</div>
             : 
            <div key={idx} className="tip-perc bg-dark" onClick={() => changeTipPercentage(perc)} >{perc}%</div>)}
         </>   
        );
    }

    return (

        <div className='TipSelector'>
            <label htmlFor="tip selector">Select Tip %</label>
            <div className="tip-percentages">
            {buildPercentages()}
            <div className="tip-perc bg-dark">
                <input type="number" name="customTip" id="customTip" onChange={(e) => changeTipPercentage(e.target.value)} placeholder='Custom'/>
            </div>
            </div>
        </div>
    )
}

export default TipSelector
