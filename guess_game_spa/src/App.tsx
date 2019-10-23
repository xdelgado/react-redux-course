import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers/reducer';
import { bootstrap } from './actions/actions';
import Router from './containers/Router';


const App: React.FC = () => {
  const initialState = {page:"splash"};
  let store = createStore(reducer,initialState,applyMiddleware(thunkMiddleware,logger));  
  
  React.useEffect(()=>{
    store.dispatch(bootstrap())
  });

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
