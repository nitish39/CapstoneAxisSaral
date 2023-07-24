import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../images/62.jpg';


function AddProject() {
  const [projectName, setProjectName] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectStartDate, setProjectStartDate] = useState('');
  const [projectStatus, setProjectStatus] = useState('');
  const [projectEndDate, setProjectEndDate] = useState('');
  const [projectOwnerCode, setProjectOwnerCode] = useState('');
  const [projectOwnerName, setProjectOwnerName] = useState('');
  const [projectOwnerDescription, setProjectOwnerDescription] = useState('');
  const [deptId, setDeptId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data here
    if (!projectName || !projectCode || !projectDescription || !deptId) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = {
      proj_name: projectName,
      proj_code: projectCode,
      proj_desc: projectDescription,
      proj_startdate: projectStartDate,
      proj_status: projectStatus,
      proj_enddate: projectEndDate,
      proj_owner_code: projectOwnerCode,
      proj_owner_name: projectOwnerName,
      proj_owner_desc: projectOwnerDescription,
    };

    try {
      await axios.post(`http://localhost:9091/ms1/proj/post/${deptId}`, formData);
      alert('Project added successfully!');
      window.location.href = '/AdminDashboard';

      // We can Perform any additional actions upon successful submission
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'  }}>

    <div style={{ width: '400px', margin: '0 auto', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '' }}>
      <div>
        <br />
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-white">
          <a className="navbar-brand" href="/"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link font-weight-bold" href="/Projects">
                  Go Back
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <h2  align="center" > Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(event) => setProjectName(event.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectCode">Project Code:</label>
          <input
            type="text"
            id="projectCode"
            value={projectCode}
            onChange={(event) => setProjectCode(event.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Project Description:</label>
          <input
            type="text"
            id="projectDescription"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectStatus">Project Status:</label>
          <input
            type="text"
            id="projectStatus"
            value={projectStatus}
            onChange={(event) => setProjectStatus(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectStartDate">Project Start Date:</label>
          <input
            type="date"
            id="projectStartDate"
            value={projectStartDate}
            onChange={(event) => setProjectStartDate(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectEndDate">Project End Date:</label>
          <input
            type="date"
            id="projectEndDate"
            value={projectEndDate}
            onChange={(event) => setProjectEndDate(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectOwnerCode">Project Owner Code:</label>
          <input
            type="text"
            id="projectOwnerCode"
            value={projectOwnerCode}
            onChange={(event) => setProjectOwnerCode(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectOwnerName">Project Owner Name:</label>
          <input
            type="text"
            id="projectOwnerName"
            value={projectOwnerName}
            onChange={(event) => setProjectOwnerName(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectOwnerDescription">Project Owner Description:</label>
          <input
            type="text"
            id="projectOwnerDescription"
            value={projectOwnerDescription}
            onChange={(event) => setProjectOwnerDescription(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="deptId">Department Id:</label>
          <select
            id="deptId"
            value={deptId}
            onChange={(event) => setDeptId(event.target.value)}
            className="form-control"
          >
            <option value="">Select Department Id</option>
            <option value="1">1 - Quality Assurance</option>
            <option value="2">2 - IT</option>
            <option value="3">3 - Development</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Add Project
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddProject;
