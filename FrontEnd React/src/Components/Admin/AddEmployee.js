import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../images/10.jpg';
import { Link } from 'react-router-dom';



function AddEmployee() {
  const [employeename, setEmployeeName] = useState('');
  const [employeecode, setEmployeeCode] = useState('');
  const [employeerole, setEmployeeRole] = useState('');
  const [employeeemail, setEmployeeEmail] = useState('');
  const [employeecontact, setEmployeeContact] = useState('');
  const [employeeuname, setEmployeeUname] = useState('');
  const [employeepswd, setEmployeePswd] = useState('');
  const [employeeexp, setEmployeeExp] = useState('');
  const [employeeteam, setEmployeeTeam] = useState('');
  const [employeesalary, setEmployeeSalary] = useState('');
  const [employeeaddress, setEmployeeAddress] = useState('');
  const [employeelocation, setEmployeeLocation] = useState('');
  const [employeedob, setEmployeeDob] = useState('');
  const [employeegender, setEmployeeGender] = useState('');
  const [employeeactive, setEmployeeactive] = useState('');
  



  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data here
    if (
      !employeename ||
      !employeecode ||
      !employeerole ||
      !employeeemail ||
      !employeecontact ||
      !employeeuname ||
      !employeepswd ||
      !employeeexp ||
      !employeeteam ||
      !employeesalary ||
      !employeeaddress ||
      !employeelocation ||
      !employeedob ||
      !employeegender ||
      !employeeactive 
    
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(employeeemail)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (employeepswd.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    // Check if email is unique
    try {
      const response = await axios.get(
        `http://localhost:9092/ms2/employee/${employeeemail}`,
        {
          params: {
            email: employeeemail,
          },
        }
      );
      if (response.data.exists) {
        alert('Email address is already in use.');
        return;
      }
    } catch (error) {
      console.error('Error:', error);
    }

    const formData = {
      empl_name: employeename,
      empl_code: employeecode,
      empl_role: employeerole,
      empl_email: employeeemail,
      empl_contact: employeecontact,
      empl_uname: employeeuname,
      empl_pswd: employeepswd,
      empl_exp: parseInt(employeeexp),
      empl_team: parseInt(employeeteam),
      empl_salary: parseFloat(employeesalary),
      empl_address: employeeaddress,
      empl_location: employeelocation,
      empl_dob: new Date(employeedob).getTime(),
      empl_gender: employeegender,
      active: employeeactive,
     

    };

    try {
      await axios.post('http://localhost:9092/ms2/empl/post', formData);
      alert('Employee added successfully!');
      window.location.href = '/AdminDashboard';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const experienceOptions = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ];

  const roleOptions = [
    'Support team', 'Business analyst', 'Quality Assurance', 'Developer', 'Data Analyst'
  ];

  const teamOptions = [
    '1', '2', '3', '4', '5'
  ];

  const genderOptions = [
    'Male', 'Female'
  ];
  const statusoptions = [
    'Active'
  ];
  

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>

    <div className="container mt-4">
      <div >
       
      <Link to="/AdminDashboard">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button type="submit" className="btn btn-dark">
          Go Back
        </button>
        </div>
        </Link> 


        <div text align="center" >
        <h2  >Add Employee Form</h2>
        </div>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="employeecode">Employee Code:</label>
                <input
                  type="text"
                  id="employeecode"
                  value={employeecode}
                  onChange={(event) => setEmployeeCode(event.target.value)}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeename">Employee Name:</label>
                <input
                  type="text"
                  id="employeename"
                  value={employeename}
                  onChange={(event) => setEmployeeName(event.target.value)}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeerole">Employee Role:</label>
                <select
                  id="employeerole"
                  value={employeerole}
                  onChange={(event) => setEmployeeRole(event.target.value)}
                  required
                  className="form-control"
                >
                  <option value="">Select Employee Role</option>
                  {roleOptions.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="employeeemail">Employee Email:</label>
                <input
                  type="text"
                  id="employeeemail"
                  value={employeeemail}
                  onChange={(event) => setEmployeeEmail(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeecontact">Employee Contact:</label>
                <input
                  type="text"
                  id="employeecontact"
                  value={employeecontact}
                  onChange={(event) => setEmployeeContact(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeeuname">Employee Username:</label>
                <input
                  type="text"
                  id="employeeuname"
                  value={employeeuname}
                  onChange={(event) => setEmployeeUname(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeepswd">Employee Password:</label>
                <input
                  type="password"
                  id="employeepswd"
                  value={employeepswd}
                  onChange={(event) => setEmployeePswd(event.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="employeeexp">Employee Experience:</label>
                <select
                  id="employeeexp"
                  value={employeeexp}
                  onChange={(event) => setEmployeeExp(event.target.value)}
                  className="form-control"
                >
                  <option value="">Select Employee Experience</option>
                  {experienceOptions.map((experience, index) => (
                    <option key={index} value={experience}>{experience}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="employeeteam">Employee Team:</label>
                <select
                  id="employeeteam"
                  value={employeeteam}
                  onChange={(event) => setEmployeeTeam(event.target.value)}
                  className="form-control"
                >
                  <option value="">Select Employee Team</option>
                  {teamOptions.map((team, index) => (
                    <option key={index} value={team}>{team}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="employeesalary">Employee Salary:</label>
                <input
                  type="text"
                  id="employeesalary"
                  value={employeesalary}
                  onChange={(event) => setEmployeeSalary(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeeaddress">Employee Address:</label>
                <input
                  type="text"
                  id="employeeaddress"
                  value={employeeaddress}
                  onChange={(event) => setEmployeeAddress(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeelocation">Employee Location:</label>
                <input
                  type="text"
                  id="employeelocation"
                  value={employeelocation}
                  onChange={(event) => setEmployeeLocation(event.target.value)}
                  className="form-control"
                />
              </div>
                <div className="form-group">
                <label htmlFor="employeedob">Employee DOB:</label>
                <input
                  type="date"
                  id="employeedob"
                  value={employeedob}
                  max="2001-12-31" // Restricts the maximum selectable date
                  min="1980-01-01" // Restricts the minimum selectable date
                  onChange={(event) => setEmployeeDob(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeegender">Employee Gender:</label>
                <select
                  id="employeegender"
                  value={employeegender}
                  onChange={(event) => setEmployeeGender(event.target.value)}
                  className="form-control"
                >
                  <option value="">Select Employee Gender</option>
                  {genderOptions.map((gender, index) => (
                    <option key={index} value={gender}>{gender}</option>
                  ))}
                </select>
              </div>


              <div className="form-group">
                <label htmlFor="employeestatus">Employee Status: </label>
                <select
                  id="employeestatus"
                  value={employeeactive}
                  onChange={(event) => setEmployeeactive(event.target.value)}
                  className="form-control"
                >
                  <option value="">Select Employee Status</option>
                  {statusoptions.map((gender, index) => (
                    <option key={index} value={gender}>{gender}</option>
                  ))}
                </select>
              </div>

              
              




            </div>
          </div>
          <br></br>
          <div align="center">
          <button type="submit" className="btn btn-primary">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
    </div>

  );
}

export default AddEmployee;
