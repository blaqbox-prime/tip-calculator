import React from 'react'

function Bill({amount, changeBillAmount}) {
    return (
        <div className='Bill'>
            <div className="form-group">
                <label htmlFor="Bill">Bill</label>
                <div className="input-container">
                    <img src="/images/icon-dollar.svg" alt="dollars" className='input-icon'/>
                    <input type="number" name="bill" id="bill" placeholder='0' value={amount} onChange={(e) => changeBillAmount(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Bill
