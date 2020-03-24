import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import rootReducer from './stores/reducers/rootReducer'
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { getFirestore, reduxFirestore } from 'redux-firestore';
// import { getFirebase } from 'react-redux-firebase';
// import fbconfig from './config/fbconfig';
// import firebase from 'firebase/app'


// const store = createStore(rootReducer,compose
//   (
//   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//   reduxFirestore(firebase,fbconfig),
//   )
// );

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
