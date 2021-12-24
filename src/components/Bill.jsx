import React, {useEffect}from 'react'

function Bill({amount, changeBillAmount}) {

    // Add focus and blur events for Input to add border on its parent
    useEffect(()=>{
        const billContainer = document.getElementById('bill-container');
    const billInput = document.getElementById('bill-input');

    billInput.addEventListener('focus',()=>{
        billContainer.classList.add('active');
    });
    billInput.addEventListener('blur',()=>{
        billContainer.classList.remove('active');
    })
    },[])

    return (
        <div className='Bill'>
            <div className="form-group">
                <label htmlFor="Bill">Bill</label>
                <div className="input-container" id="bill-container">
                    <img src="/images/icon-dollar.svg" alt="dollars" className='input-icon'/>
                    <input type="number" name="bill" id="bill-input" placeholder='0' value={amount} onChange={(e) => changeBillAmount(e.target.value)} min={0}/>
                </div>
            </div>
        </div>
    )
}

export default Bill
