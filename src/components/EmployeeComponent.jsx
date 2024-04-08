import React, {useState, useEffect} from 'react'
// import {Link, useHistory, useParams } from 'react-router-dom';
import {useNavigate , useParams} from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee  } from '../services/EmployeeService'


const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [errors,setErrors] = useState({
        firstName:'',
        lastName:'',
        emailId:''
    })
    const {id} = useParams();

    const navigator = useNavigate();

    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId)
            })
        }
    },[])

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if(validationForm()){
            const employee = {firstName, lastName, emailId}

            if(id){
                updateEmployee(id,employee).then((response=>{
                    navigator('/employees');
                }))
            }
            else{
                createEmployee(employee).then((response) =>{
                    console.log(response.data)
                    navigator('/employees');
                })
            }
        }        
    }

   

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }


   function validationForm(e){
    let valid = true;
    const errorsCopy = {...errors}

    if(firstName.trim()){
        errorsCopy.firstName = '';
    }else{
        errorsCopy.firstName = "Name is Required."
        valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    }else{
        errorsCopy.lastName = "LastName is Required."
        valid = false;
    }

    if(emailId.trim()){
        errorsCopy.emailId = '';
    }else{
        errorsCopy.emailId = "Email ID is Required."
        valid = false;
    }
    setErrors(errorsCopy);
    return valid;

   }

    return (
            <div className = "container">
            <br /><br />
                <div className = "row">
                    <div className='card col-md-6 offest-md-3 offset-md-3'>
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = {`form-control ${errors.firstName ? 'is-invalid' :''}`}
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                    { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = {`form-control ${errors.lastName ? 'is-invalid' :''}`}
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                    { errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = {`form-control ${errors.emailId ? 'is-invalid' :''}`}
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                    { errors.emailId && <div className='invalid-feedback'>{errors.emailId}</div>}
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default EmployeeComponent
