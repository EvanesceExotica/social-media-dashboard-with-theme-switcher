
import React from "react";
import iconDown from "./images/icon-down.svg";
import iconUp from "./images/icon-up.svg";

class StatShift extends React.Component{
	constructor(props){
		super()
	}

	render(){
		function determineStatShift(ourProps){
			if(ourProps.increase){
				return iconUp
			}
			return iconDown
		}
		function modifyColor(ourProps){
			if(ourProps.increase){
				return "statShift"
			}
			else{
				return "statShift statShift--negative"
			}
		}
		return(
			<div className={modifyColor(this.props)}>
				<img src={determineStatShift(this.props)} alt="" className="statShift__arrow" />
				<p className="statShift__number">{this.props.statShiftNumber}</p>
			</div>
		)
	}

}

export default StatShift