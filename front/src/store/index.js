import { createStore, compose, applyMiddleware } from 'redux';

import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import signupMiddleware from 'src/middlewares/signup';
import exercisesMiddleware from 'src/middlewares/exercises';
import forgetMiddleware from 'src/middlewares/forget';
import usersMiddleware from 'src/middlewares/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    signupMiddleware,
    exercisesMiddleware,
    forgetMiddleware,
    usersMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
