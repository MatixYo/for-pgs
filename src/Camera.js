import React, { Component } from "react";

const apiUrl = "https://makevoid-skicams.p.mashape.com/cams.json",
xMashapeKey = "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw";

class Camera extends Component {
	constructor(props) {
		super(props);
		this.state = {cityName: "", cam1: "", cam2: "", date: new Date()};
	}

	componentDidMount() {
		fetch(apiUrl, {headers: {"X-Mashape-Key": xMashapeKey}})
			.then(response => response.json()).then(response => {
				let currentCity = response[this.props.city];
				this.setState({cityName: currentCity.name, cam1: currentCity.cams[this.props.camera1].url, cam2: currentCity.cams[this.props.camera2].url});
			});
	}

	render() {
		let addZero = number => ('0' + number).slice(-2);

		return (
			<article className="section section-camera">
				<time className="camera-date">{addZero(this.state.date.getDay() + 1)}-{addZero(this.state.date.getMonth() + 1)}-{this.state.date.getFullYear()}</time>
				<h2 className="camera-title">{this.state.cityName}</h2>
				<img className="camera-image" src={this.state.cam1} alt={this.state.cityName}/>
				<img className="camera-image" src={this.state.cam2} alt={this.state.cityName}/>
			</article>
		);
	}
}
 
export default Camera;