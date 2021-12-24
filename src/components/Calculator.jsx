import React, {useState,useEffect} from 'react'
import Bill from './Bill';
import './Calculator.css';
import People from './People';
import Results from './Results';
import TipSelector from './TipSelector';

function Calculator() {
    const [bill, setBill] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(10);
    const [people, setPeople] = useState(5);
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if(people > 0)
            {calculateTip();} 
    }, [bill,tipPercentage,people])


    // Calculate Tip
    function calculateTip(){
        let total = (((tipPercentage/100)*bill) + Number(bill)) / Number(people);
        let tipAmount = ((tipPercentage/100)*bill)/ Number(people);

        setTotal(total.toFixed(2));
        setTipAmount(tipAmount.toFixed(2));
    }

    // set bill amount
    function updateBill(amount){
        setBill(amount)
     }

    // set number of people
    function updatePeople(number){
    setPeople(number);
    }
    
    //  set tip percentage
    function updateTipPercentage(percentage){
        setTipPercentage(percentage);
        console.log(`Tip: ${tipPercentage}`);
    }

    //Reset Values
    function resetCalculator(){
        setBill(0);
        setPeople(1);
        setTipAmount(0);
        setTipPercentage(10);
        setTotal(0);
    }

    return (
        <div className='calculator bg-white'>
            <div className="left">
                <Bill amount={bill} changeBillAmount={updateBill}/>
                <TipSelector percentage={tipPercentage} changeTipPercentage={updateTipPercentage}/>
                <People people={people} changeNumPeople={updatePeople}/>
            </div>
            <Results tipAmount={tipAmount} total={total} reset={resetCalculator} className="right"/>
        </div>
    )
}

export default Calculator
