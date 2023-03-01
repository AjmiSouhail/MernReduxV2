import axios from "axios";
import {Get_Emp_request,Get_Api_request,Del_Emp_request, Add_Emp_request} from "../action/action"

export const Get_Emp = ()=> async (dispatch) => {
    try {
     await axios.get('/employe').then(({data}) =>{
            console.log(data)
    dispatch(Get_Emp_request(data))
    })
  }
  catch(error) 
  {
    console.log(error)
  }}
  export const Get_Api = ()=> async (dispatch) => {
    try {
     await axios.get('/getapi').then(({data}) =>{
        console.log(axios.get('/getapi'))
            console.log(data)
    dispatch(Get_Api_request(data))
    })
  }
  catch(error) 
  {
    console.log(error)
  }}
  export const Del_Emp = (id)=> async (dispatch) => {
    try {
        console.log(id)
     await axios.delete(`/delete/${id}`).then(({id}) =>{  
        console.log(axios.delete(`/delete/${id}`))
    dispatch(Del_Emp_request(id))
    
    })
  }
  catch(error) 
  {
    console.log(error)
  }}
  export const Add_Emp = (emp)=> async (dispatch) => {
    try {
        console.log( typeof emp)
        console.log(  emp)
     await fetch('/ajouter',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emp)
      }).then(response => {
        if (response) {
          return response.json();
        }}).then(data => {
            console.log(data);
            dispatch(Add_Emp_request(data))
            console.log(Add_Emp_request(data))

          })
  }
  catch(error) 
  {
    console.log(error)
  }}
