import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { getPosts } from './actions/post.action';
import { getUsers } from './actions/user.action';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getPosts());
store.dispatch(getUsers());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


