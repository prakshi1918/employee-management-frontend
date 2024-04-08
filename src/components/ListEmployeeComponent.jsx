import React, {useState, useEffect} from 'react'
import { listEmployees , deleteEmployee} from '../services/EmployeeService'
import { useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();      
    }, [])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
       deleteEmployee(id).then((response)=>{
        getAllEmployees();
       })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <button  className = "btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                    <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                <button className = "btn btn-info" onClick = {()=> updateEmployee(employee.id)}>Update</button>
                                <button className = "btn btn-danger" onClick = {() => removeEmployee(employee.id)}
                                style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent
