import { combineReducers } from 'redux';

import account from './accountReducer';
import reports from './reportsReducer';

export default combineReducers({ account, reports });
