import { SET_EMP } from '../action/typeaction';

export default function ReducerEmp(state = {}, action) { 
  switch (action.type) {
    case SET_EMP: 
      console.log(action.employe)
      return action.employe;
    default:
      return state;
  }
};