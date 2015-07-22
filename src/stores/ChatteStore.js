import { ADD_MESSAGE, CHAT_HISTORY } from '../constants/ActionTypes';

export default function messages(state=[], action) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state, action.message];
		case CHAT_HISTORY:
			return action.messages;
		default:
			return state;
	}
}