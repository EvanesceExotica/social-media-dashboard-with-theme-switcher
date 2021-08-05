
import React from "react"
import Username from "./Username"
import StatShift from "./StatShift"

class CardHeader extends React.Component{
	constructor(props){
		super()
	}
	render(){
		function determineHeader(ourProps){
			var string = "cardHeader cardHeader"
			switch(ourProps.site){
				case "facebook":
					return string+"__border-top-facebook"
				case "insta":
					return string+"__border-top-instagram"
				case "twitter":
					return string+"__border-top-twitter"
				case "youtube":
					return string+"__border-top-youtube"
				default:
					return string
			}
		}
		return(
			<div className={determineHeader(this.props)}>
				<Username userName={this.props.userName} site={this.props.site}/>
				<h1 className="cardHeader__statNumber">{this.props.statNumber}</h1>
				<h2 className="cardHeader__statType">{this.props.statType}</h2>
				<StatShift statShiftNumber={this.props.statShiftNumber} increase={this.props.increase}/>
			</div>
		)
	}
}

export default CardHeader