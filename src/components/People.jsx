import React, {useState, useEffect} from 'react'
import './Calculator.css'

function People({people, changeNumPeople}) {
    const [error, setError] = useState(false);

    // on re-render check for errors
    useEffect(() => {
        if(people < 1){
            setError(true)
        }
        else{
            setError(false);
        }

    }, [people])

     // Add focus and blur events for Input to add border on its parent
     useEffect(()=>{
        const peopleContainer = document.getElementById('people-container');
    const peopleInput = document.getElementById('people-input');

    peopleInput.addEventListener('focus',()=>{
        peopleContainer.classList.add('active');
    });
    peopleInput.addEventListener('blur',()=>{
        peopleContainer.classList.remove('active');
    })
    },[])

    return (
        <div className='People'>
            <div className="form-group">
                <div className="row">
                <label htmlFor="People">Number of People</label>
                <p className="error">{error ? "Can't be zero" : ""}</p>
                </div>
                <div className={`input-container ${error ? "error" : ''}`} id="people-container">
                <img src="/images/icon-person.svg" alt="people" className='input-icon'/>
                <input type="number" name="people" id="people-input" placeholder='0' min={0} value={people} onChange={(e) => changeNumPeople(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default People
