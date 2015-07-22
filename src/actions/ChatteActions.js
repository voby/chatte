import { ADD_MESSAGE, NEW_MESSAGE, CHAT_HISTORY } from '../constants/ActionTypes';
import { socket } from '../App.js';
import moment from 'moment';

export function addMessage(message) {
	return {
		type: ADD_MESSAGE,
		message
	};
}

export function newMessage(text) {
	const time = moment().format('HH:mm:ss');
	socket.emit('new message', {time, text});
	return {
		type: NEW_MESSAGE
	};
}

export function addHistory(messages) {
	return {
		type: CHAT_HISTORY,
		messages
	};
}