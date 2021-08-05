
import React from "react";

import facebook from "./images/icon-facebook.svg"
import twitter from "./images/icon-twitter.svg"
import insta from "./images/icon-instagram.svg"
import youtube from "./images/icon-youtube.svg"

class Username extends React.Component{
	constructor(props){
		super()
	}

	render(){
function determineLogo(ourProps){
			switch(ourProps.site){
				case "youtube":
					return youtube;
				case "insta":
					return insta;
				case "twitter":
					return twitter;
				case "facebook":
					return facebook;
				default:
					return facebook
			}
		}
		return(
			<div className="username">
				<img className="username__logo" src={determineLogo(this.props)} alt="logo"/>
				<h2 className="username__text">{this.props.userName}</h2>
			</div>
		)
	}
}

export default Username