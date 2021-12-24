import React, {useEffect} from 'react'
import './Calculator.css'

function TipSelector({percentage, changeTipPercentage}) {

     // Add focus and blur events for Input to add border on its parent
     useEffect(()=>{
        const customTipContainer = document.getElementById('customTip-container');
    const customTipInput = document.getElementById('customTip-input');

    customTipInput.addEventListener('focus',()=>{
        customTipContainer.classList.add('active');
    });
    customTipInput.addEventListener('blur',()=>{
        customTipContainer.classList.remove('active');
    })
    },[])

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
            <div className="tip-perc bg-dark input-container" id="customTip-container">
                <input type="number" name="customTip" id="customTip-input" onChange={(e) => changeTipPercentage(e.target.value)} placeholder='Custom'/>
            </div>
            </div>
        </div>
    )
}

export default TipSelector
