import React, { Component } from "react";
import Popup from "reactjs-popup";

import Staffing from "./staffing";
import "../../modal.css";
import { existsTypeAnnotation } from "@babel/types";


class ShiftPattern extends Component {

	constructor(props) {
		super(props);
		this.handleShiftTypeChange = this.handleShiftTypeChange.bind(this);
		this.handleContinue = this.handleContinue.bind(this);
	}

	state = {
		shiftTimeOfDay: "Day",
		shiftStartTime: "08:00",
		shiftEndTime: "20:00",
		isReadyToClose: false
	};
	

	render() {
		return (
			
			<div className="container">

				<Popup 
					trigger={<button className="button"> Open Modal </button>}
					modal
					closeOnDocumentClick
				>

				{close => ( 
					

				<div>

				<div className="text-center header">
					<h3>Progress</h3>
					<progress value="0" max="100"></progress>
				</div>

				<div>
					<br></br>
					<h5>Please fill in all fields.</h5>
					<br></br>
					<br></br>
				</div>

				<div className="wrapper">
					<div className="inline">
						<h6>Day or Night shift:</h6>
					</div>
					<div className="inline">
						<select selected={this.state.shiftTimeOfDay} onChange={this.handleShiftTypeChange} name="Shift type">
							<option value="Day">Day</option>
							<option value="Night">Night</option>
						</select>
					</div>
				</div>


				<div className="wrapper">
					<div className="inline">
						<h6>Shift start time:</h6>
					</div>
					<div className="inline">
							<input ref={value => this.shiftStartTime = value} step="3600" type="time"/>
					</div>
				</div>

				<div className="wrapper">
					<div className="inline">
						<h6>Shift end time:</h6>
					</div>
					<div className="inline">
							<input ref={value => this.shiftEndTime = value} step="3600" type="time"/>
					</div>
				</div>


				<div className="wrapper text-center">
					<div className="inline">
						<button disabled>Previous</button>
					</div>
					<div className="inline">
							<button onClick={() => {
								this.handleContinue();
								this.state.isReadyToClose === true && close();
							}}>Continue
							</button>
					</div>
				</div>

	

				</div>	
				)} 
				</Popup>

    	</div>	

		);
	}

	handleShiftTypeChange(uiObj) {
		//Day/Night from UI element
		const value = uiObj.target.value;

		//Set user input to state
		this.setState({shiftTimeOfDay: value});	
		//TODO: ShiftPattern.jsx --> Set default time
	}

	handleContinue() {
		const shiftTimeOfDay = this.state.shiftTimeOfDay;
		//Get values from UI element
		const shiftStartTime = this.shiftStartTime.value;
		const shiftEndTime = this.shiftEndTime.value;

		console.log(shiftStartTime + " - " + shiftEndTime);

		//Validation
		if (this.state.shiftTimeOfDay === "Day") {
			if (shiftStartTime > shiftEndTime) {
				console.log("End time can't be before start time with current shift type. Solution: 1. You may have put wrong shift type (day/night). 2. You may switched AM/PM at time box. 3. Times may be incorrect.");
				return;
			}
		} else {
			if (shiftStartTime < shiftEndTime) {
				console.log("Start time can't be before end time with current shift type. Solution: 1. You may have put wrong shift type (day/night). 2. You may switched AM/PM at time box. 3. Times may be incorrect.");
				return;
			}
		}
		
		//Save variables to state
		this.setState({shiftStartTime: shiftStartTime})
		this.setState({shiftEndTime: shiftEndTime})		
		this.props.updateShiftPattern({shiftTimeOfDay}, {shiftStartTime}, {shiftEndTime});

		//Flag to allow user to close modal
		this.setState({isReadyToClose: true});
		
	}


}
export default ShiftPattern;






