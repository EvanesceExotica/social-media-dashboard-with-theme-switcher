import React from "react";
import StatsHeader from "./StatsHeader"
import StatShift from "./StatShift"
class CardOverview extends React.Component{
	constructor(props){
		super()
	}
	render(){
		return (
			<div className="cardOverview">
				<StatsHeader statName={this.props.statName} site={this.props.site}/>
				<div className="cardOverview__bottom">
					<p className="cardOverview__number">{this.props.statNumber}</p>
					<StatShift statShiftNumber={this.props.statShiftNumber} increase={this.props.increase}/>
				</div>
			</div>
		)
	}
}

export default CardOverview