import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/employees';

export const createEmployee = (employee) => axios.post(EMPLOYEE_BASE_REST_API_URL, employee)

export const listEmployees = () => axios.get(EMPLOYEE_BASE_REST_API_URL);

export const getEmployee = (employeeId) => axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    
export const  deleteEmployee = (employeeId) => axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    