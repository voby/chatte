import React, { Component } from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import ChatteApp from './containers/ChatteApp';
import ChatteStore from './stores/ChatteStore';
import io from 'socket.io-client';
import { addMessage, addHistory } from './actions/ChatteActions';

const redux = createRedux({ChatteStore});
export const socket = io('http://localhost:8000');

socket.on('chat history', function(messages) {
	redux.dispatch(addHistory(messages));
});

socket.on('new message', function(message) {
	redux.dispatch(addMessage(message));
});

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <ChatteApp />}
      </Provider>
    );
  }
}
