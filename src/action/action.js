import { GET_EMP , GET_API , REM_EMP, ADD_EMP } from "./typeaction";

export const Get_Emp_request = (data) => ({
  type: GET_EMP,
  payload: data,
});
export const Get_Api_request = (data) => ({
  type: GET_API,
  payload: data,
});
export const Del_Emp_request = (id) => ({
  type: REM_EMP,
  payload: id,
});
export const Add_Emp_request = (employe) => ({
  type: ADD_EMP,
  payload: employe,
});
