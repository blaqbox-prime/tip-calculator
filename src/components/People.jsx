import React from 'react'
import './Calculator.css'

function People({people, changeNumPeople}) {
    return (
        <div className='People'>
            <div className="form-group">
                <label htmlFor="People">Number of People</label>
                <div className="input-container">
                <img src="/images/icon-person.svg" alt="people" className='input-icon'/>
                <input type="number" name="people" id="people" placeholder='1' value={people} onChange={(e) => changeNumPeople(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default People
