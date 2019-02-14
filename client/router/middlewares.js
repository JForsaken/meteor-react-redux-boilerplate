import { isEmpty } from 'ramda';

import { navigate } from 'fans-router';

import { getUserById } from '../rest/user';

import { flushSession, updateFetchedUser } from '../redux/actions/user';

import { getUser,  } from '../redux/selectors/user';
import { getToken, getUserId } from '../redux/selectors/app';


const isError = e => e && e.stack && e.message;

export default [
  {
    to: ['root', 'root.login'],
    shouldNavigate: (route, state) => !getToken(state) || !getUserId(state),
    onNavigationCancelled: (route, dispatch) => dispatch(navigate('/dashboard')),
    onResolve: (response, route, dispatch, state, next, abort) => {
      if (route.name !== 'root.login') {
        abort();
        dispatch(flushSession());
        dispatch(navigate('/login'));
      } else {
        next();
      }
    },
  },
  {
    to: [
      'root.dashboard',
    ],
    call: (route, state) => {
      const user = getUser(state);
      if (isEmpty(user)) {
        return getUserById(state, getUserId(state));
      }
      return Promise.resolve({ success: true, skip: true });
    },
    onResolve: (response, route, dispatch, state, next, abort) => {
      if (isError(response) || !response.success) {
        abort();
        dispatch(flushSession());
        dispatch(navigate('/login'));
      } else {
        if (!response.skip) {
          dispatch(updateFetchedUser(response.payload));
        }
        next();
      }
    },
  },
];
