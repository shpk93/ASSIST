import {
  ADD_CREATETEAM,
  ADD_GETSTARTED,
  ADD_JOINTEAM,
  ADD_MATCH_ID,
  ADD_SCHEDULEMANAGE,
  CLEAR_ALL,
  PropsAction,
} from '../actions/propsAction';
import { propsState } from '../initialState';

export default function propsReducer(state = propsState, action: PropsAction): typeof propsState {
  switch (action.type) {
    case ADD_CREATETEAM:
      return Object.assign(state, { createTeam: { ...state.createTeam, ...action.payload } });
    case ADD_GETSTARTED:
      return Object.assign(state, { getStarted: { ...state.getStarted, ...action.payload } });
    case ADD_JOINTEAM:
      return Object.assign(state, { joinTeam: { ...state.joinTeam, ...action.payload } });
    case ADD_SCHEDULEMANAGE:
      return Object.assign(state, {
        scheduleManage: { ...state.scheduleManage, ...action.payload },
      });
    case ADD_MATCH_ID:
      return Object.assign(state, { matchId: action.payload });
    case CLEAR_ALL:
      return Object.assign({}, state, { matchId: -1 });
    default:
      return state;
  }
}
