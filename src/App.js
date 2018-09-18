import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import firebaseConfig from '../firebase_config';
import reducers from './reducers';

import IndexPage from './components/IndexPage';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <IndexPage />
      </Provider>
    );
  }
}

export default App;
