import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
//=================
import rootReducer from './stores/reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase,ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbconfig from './config/fbconfig';
import firebase from 'firebase/app';
import { createFirestoreInstance } from 'redux-firestore'

//=================== stop splashing screen
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'


// react-redux-firebase config for initials 
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
const store = createStore(rootReducer,compose
  (
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(firebase,fbconfig),
  )
);
const rrfProps = {
  firebase,
  config:rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

//This is for stop spasj=hing the screen
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebaseAuth.auth);  
  if (!isLoaded(auth)) return <div></div>;
  return children
}

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
    {/* Stop splashing the components in navbar = AuthIsLoaded */}
    <AuthIsLoaded>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/createProject" component={CreateProject}></Route>
        
        </Switch>
      </div>
      </AuthIsLoaded>
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>
      );
    }
    
    export default App;
