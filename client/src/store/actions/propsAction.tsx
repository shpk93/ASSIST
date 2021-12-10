import { propsState } from '../initialState';

export const ADD_GETSTARTED = 'ADD_GETSTARTED';
export const ADD_CREATETEAM = 'ADD_CREATETEAM';
export const ADD_JOINTEAM = 'ADD_JOINTEAM';
export const CLEAR_ALL = 'CLEAR_ALL';

export type PropsAction =
  | ReturnType<typeof addGetStarted>
  | ReturnType<typeof addCreateTeam>
  | ReturnType<typeof addJoinTeam>
  | ReturnType<typeof clearAll>;

export const addGetStarted = (props: object) => {
  return { type: ADD_GETSTARTED, payload: props };
};

export const addJoinTeam = (props: object) => {
  return { type: ADD_JOINTEAM, payload: props };
};

export const addCreateTeam = (props: object) => {
  return { type: ADD_CREATETEAM, payload: props };
};

export const clearAll = () => {
  return { type: CLEAR_ALL, payload: propsState };
};