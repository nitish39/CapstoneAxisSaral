import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import backgroundImage from '../../images/10.jpg';
import { Link } from 'react-router-dom';



function UpdateEmployee() {
  const { empl_id } = useParams();
  const [employee, setEmployee] = useState({
    empl_id: '',
    empl_name: '',
    empl_code: '',
    empl_role: '',
    empl_email: '',
    empl_contact: '',
    empl_uname: '',
    empl_pswd: '',
    empl_exp: '',
    empl_team: '',
    empl_salary: '',
    empl_address: '',
    empl_location: '',
    empl_dob: '',
    empl_gender: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        "http://localhost:9092/ms2/updated/empl_id",
        employee
      );

      alert('Employee updated successfully!');
      window.location.href = '/AdminDashboard';

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9092/ms2/empl/g2/${empl_id}`
        );
        const employeeData = response.data;

        setEmployee({
          empl_id: employeeData.empl_id,
          empl_name: employeeData.empl_name,
          empl_code: employeeData.empl_code,
          empl_role: employeeData.empl_role,
          empl_email: employeeData.empl_email || '',
          empl_contact: employeeData.empl_contact || '',
          empl_uname: employeeData.empl_uname || '',
          // empl_pswd: employeeData.empl_pswd || '',
          empl_exp: employeeData.empl_exp.toString(),
          empl_team: employeeData.empl_team.toString(),
          empl_salary: employeeData.empl_salary.toString(),
          empl_address: employeeData.empl_address || '',
          empl_location: employeeData.empl_location || '',
          empl_dob: new Date(employeeData.empl_dob)
            .toISOString()
            .split('T')[0],
          empl_gender: employeeData.empl_gender || '',
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEmployeeData();
  }, [empl_id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
    setIsUpdated(true); // Mark the form as updated
  };


  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }} >

    <div className="container mt-4">
      <div >
        <br />
        <Link to="/AdminDashboard">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button type="submit" className="btn btn-dark">
          Go Back
        </button>
        </div>
        </Link>
     

      <div style={{margin :"1"}}>
       <h2 text align="center">Edit Employee Form</h2>
       </div>
       <br></br>

       <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="employeecode">Employee Id:</label>
              <input
                type="text"
                id="empl_id"
                name="empl_id"
                value={employee.empl_id}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeename">Employee Name:</label>
              <input
                type="text"
                id="empl_name"
                name="empl_name"
                value={employee.empl_name}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeerole">Employee Role:</label>
              <input
                type="text"
                id="empl_role"
                name="empl_role"
                value={employee.empl_role}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeemail">Employee Email:</label>
              <input
                type="text"
                id="empl_email"
                name="empl_email"
                value={employee.empl_email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeecontact">Employee Contact:</label>
              <input
                type="text"
                id="empl_contact"
                name="empl_contact"
                value={employee.empl_contact}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeuname">Employee Username:</label>
              <input
                type="text"
                id="empl_uname"
                name="empl_uname"
                value={employee.empl_uname}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="employeeexp">Employee Experience:</label>
              <input
                type="text"
                id="empl_exp"
                name="empl_exp"
                value={employee.empl_exp}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeteam">Employee Team:</label>
              <input
                type="text"
                id="empl_team"
                name="empl_team"
                value={employee.empl_team}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeesalary">Employee Salary:</label>
              <input
                type="text"
                id="empl_salary"
                name="empl_salary"
                value={employee.empl_salary}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeeaddress">Employee Address:</label>
              <input
                type="text"
                id="empl_address"
                name="empl_address"
                value={employee.empl_address}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="employeelocation">Employee Location:</label>
              <input
                type="text"
                id="empl_location"
                name="empl_location"
                value={employee.empl_location}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <br></br>
        <div text align="center">
        <button type="submit" className="btn btn-primary">
          Update Employee
        </button>
        </div>
       </form>
      </div>
    </div>
    </div>
  );
}

export default UpdateEmployee;
