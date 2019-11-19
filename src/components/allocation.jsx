import React, { Component } from "react";
import ShiftPattern from "./modals/shiftPattern";
import Staffing from "./modals/staffing";
import DeviceUUID from "device-uuid";
import { Script } from "vm";



class Allocation extends Component {

	constructor(props) {
		super(props);
		this.updateShiftPattern = this.updateShiftPattern.bind(this);
	}

	//TODO: Ensure uuid is unique for each pc
	state = {
		uuid: '1',
		timeOfDay: '',
		startTime: '',
		endTime: '',
		isReadyToClose: false
	};


	
	render() {
		return (
			
			<div className="container">
				
				<ShiftPattern updateShiftPattern={this.updateShiftPattern}/>

				<h4>Test {this.state.endTime} </h4>


				<button onClick={() => this.updateIP()}>test</button>



				<Staffing />




				



    	</div>	

		);
	}


	updateShiftPattern(timeOfDay, startTime, endTime) {

		this.setState({timeOfDay: timeOfDay})
		this.setState({startTime: startTime})
		this.setState({endTime: endTime})

		console.log(this.state.timeOfDay)
		console.log(this.state.startTime)
		console.log(this.state.endTime)

		console.log(timeOfDay + startTime + endTime);
		console.log(this.state.endTime.valueOf);
	}


	

}



export default Allocation;


/*        <Popup trigger={<button>Trigger</button>} position="right center">
    <div>Popup content here !!</div>
	</Popup> */
	
	/*
	<Popup trigger={<button className="button"> Open Modal </button>} modal>
					{close => (
						<div className="modal">
							<a href="/" className="close" onClick={close}>
								&times;
        			</a>
							<div className="header"> Modal Title </div>
							<div className="content">
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
								Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
								delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
         				<br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
								commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
								explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
       			  </div>
							<div className="actions">
								<Popup
									trigger={<button className="button"> Trigger </button>}
									position="top center"
									closeOnDocumentClick
								>
									<span>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
										magni omnis delectus nemo, maxime molestiae dolorem numquam
										mollitia, voluptate ea, accusamus excepturi deleniti ratione
										sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
								</Popup>
								<button
									className="button"
									onClick={() => {
										console.log("modal closed ");
										close();
									}}
								>
									close modal
          </button>
							</div>
						</div>
					)}
				</Popup>
				*/