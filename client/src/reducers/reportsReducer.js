import { FETCH_REPORT, DELETE_REPORT } from '../actions/types';

export default function reportsReducer(reports = [], action) {
  switch(action.type) {
    case FETCH_REPORT:
      return [...action.reports, ...reports];
    case DELETE_REPORT:
      return reports.filter(report => report._id !== action.id);
    default:
      return reports;
  }
}
