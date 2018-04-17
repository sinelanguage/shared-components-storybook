import React, { Component } from "react";

export default class Button extends Component {
	static defaultProps = {
		text: "Click here",
		context: "default",
		className: "default",
		theme: "default",
		style: {}
	};

	static propTypes = {
		text: PropTypes.string,
		context: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object
	};

	state = {};
	render() {
		const { text, context, className, style } = this.props;
		return (
			<button
				className={className}
				style={style}
				theme={theme}
				context={context}
			>
				{text}
			</button>
		);
	}
}

ec102912345;
