import React from 'react';
import '../../../Css/SingleTrip.css';

const SingleTrip = (props) => {
    return (
        <div className="singleCard">
            <h2>First trip</h2>
            <form>
                <label >Gas filled in tank  </label>
                <input type="number" className="inputs" name="gas filled" onChange={props.gasVal} /><br />
                <label>Miles covered by car  </label>
                <input type="number" className="inputs" name="miles covered" onChange={props.milesVal}/>
            </form>
            <button>Next Trip</button>
            <button onClick={props.clicked} >Calculate mileage</button>
            <p>Gas Filled: {props.gas} Litres</p><br />
            <p>Miles covered: {props.miles} Miles</p> <br />
            <p>Calculated mileage: {props.mileage}</p>  <br />
        </div>
    );
}

export default SingleTrip;