import React, { Component } from 'react';

export default class ChatteOutput extends Component {
	componentWillUpdate() {	
		let node = React.findDOMNode(this.refs.scrollbar);
		this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
	}

	componentDidUpdate() {
		if (this.shouldScrollBottom) {
			let node = React.findDOMNode(this.refs.scrollbar);
			node.scrollTop = node.scrollHeight
		}
	}

	render() {
		return (
			<ul ref='scrollbar'>
				{ this.props.messages.map((message, index) => <li key={index}><span>{message.time}</span> <span>{message.text}</span></li>) }
			</ul>
		);
	}
}
