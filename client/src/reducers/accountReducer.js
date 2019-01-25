import { LOGIN, LOGOUT } from '../actions/types';

export default function accountReducer(state = null, action) {
  switch(action.type) {
    case LOGIN:
      return action.jwt;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
