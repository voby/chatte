import React, { Component } from 'react';

export default class ChatteInput extends Component {
	handleSubmit = (event) => {
		event.preventDefault();
		const input = this.refs.messageInput.getDOMNode();
		this.props.newMessage(input.value.trim());
		input.value = '';
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input ref='messageInput' type="text"/>
				<button>Send</button>
			</form>
		);
	}
}
