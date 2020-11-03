import React from 'react';
import {Component} from 'react';
import '../Css/App.css';
import SingleTrip from '../Components/Trips/SingleTrip/SingleTrip';

class App extends Component{

  state = {
    trips:[
      {
        id:1,
        gasFilled:0,
        milesCovered:0,
        calculatedMileage:0
      }
    ]
  }

  inputsChange = (event, type) => {
    let newVal = {...this.state.trips};
    console.log("new val ", newVal);
    console.log("type :", type);
    console.log("target :", event.target.value);
    if(type === 'gas'){
      newVal[0].gasFilled = event.target.value;
    }
    if(type=== 'miles'){
      newVal[0].milesCovered = event.target.value;
    }

    this.setState({
      trips : newVal
    });

    console.log("new state : ", this.state.trips);

  }

  calculateAvg = () =>{
    let newVal = {...this.state.trips};
    console.log("new val in calculate avg ", newVal);
    let mileage = newVal[0].milesCovered / newVal[0].gasFilled;
    newVal[0].calculatedMileage = mileage;
    this.setState({
      trips : newVal
    })

    console.log("new state in clicked funcc ", this.state);

  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
  
        <content>
          <SingleTrip 
            gas = {this.state.trips[0].gasFilled}
            miles={this.state.trips[0].milesCovered}
            clicked = {this.calculateAvg}
            gasVal = { (event) => this.inputsChange(event, 'gas')}
            milesVal = { (event) => this.inputsChange(event, 'miles')}
            mileage = {this.state.trips[0].calculatedMileage}
          />
        </content>
      </div>
    );
  }
  
}

export default App;
