import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class Logo extends Component {
	render() {
		return <img src={logo} className={this.props.className} alt="logo" />;
	}
}
