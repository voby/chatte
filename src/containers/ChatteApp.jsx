import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import ChatteOutput from '../components/ChatteOutput';
import ChatteInput from '../components/ChatteInput';
import * as ChatteActions from '../actions/ChatteActions';

@connect(state => ({
  messages: state.ChatteStore
}))

export default class ChatteApp extends Component {
	render() {
		const { messages, dispatch } = this.props;
		return (
			<div>
				<ChatteOutput messages={messages}  />
				<ChatteInput {...bindActionCreators(ChatteActions, dispatch)} />
			</div>
		);
	}
}