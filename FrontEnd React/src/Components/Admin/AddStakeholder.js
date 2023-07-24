import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../images/60.jpg';


function AddStakeholder() {
  const [stakeholderName, setStakeholderName] = useState('');
  const [stakeholderCode, setStakeholderCode] = useState('');
  const [stakeholderDesignation, setStakeholderDesignation] = useState('');
  const [stakeholderEmail, setStakeholderEmail] = useState('');
  const [stakeholderContact, setStakeholderContact] = useState('');
  const [projectId, setProjectId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data here
    if (!stakeholderName || !stakeholderCode || !stakeholderDesignation || !projectId) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = {
      sthd_name: stakeholderName,
      sthd_code: stakeholderCode,
      sthd_desg: stakeholderDesignation,
      sthd_email: stakeholderEmail,
      sthd_contact: stakeholderContact,
    };

    try {
      await axios.post(`http://localhost:9091/ms1/sthd/post/${projectId}`, formData);
      alert('Stakeholder added successfully!');
      window.location.href = '/StakeHolders';

      // Perform any additional actions upon successful submission
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>

    <div style={{ width: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '' }}>
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
                <a className="nav-link font-weight-bold" href="/StakeHolders">
                  Go Back
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <h2>Add Stakeholder </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="stakeholderName">Stakeholder Name:</label>
          <input
            type="text"
            id="stakeholderName"
            value={stakeholderName}
            onChange={(event) => setStakeholderName(event.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stakeholderCode">Stakeholder Code:</label>
          <input
            type="text"
            id="stakeholderCode"
            value={stakeholderCode}
            onChange={(event) => setStakeholderCode(event.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
            <label htmlFor="stakeholderDesignation">Stakeholder Designation:</label>
            <select
              id="stakeholderDesignation"
              value={stakeholderDesignation}
              onChange={(event) => setStakeholderDesignation(event.target.value)}
              required
              className="form-control"
            >
              <option value="">Select Designation</option>
              <option value="Investor">Investor</option>
              <option value="Shareholder">Shareholder</option>
              <option value="Managing director">Managing director</option>
              <option value="Creative Manager">Creative Manager</option>
            </select>
         </div>

        <div className="form-group">
          <label htmlFor="stakeholderEmail">Stakeholder Email:</label>
          <input
            type="text"
            id="stakeholderEmail"
            value={stakeholderEmail}
            onChange={(event) => setStakeholderEmail(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stakeholderContact">Stakeholder Contact:</label>
          <input
            type="text"
            id="stakeholderContact"
            value={stakeholderContact}
            onChange={(event) => setStakeholderContact(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Project :</label>
          <select
            id="projectId"
            value={projectId}
            onChange={(event) => setProjectId(event.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Project </option>
            <option value="1">1-Software Bug Fixing</option>
            <option value="2">2-Data Analysis and Reporting</option>
            <option value="3">3-E-commerce Website Development</option>
            <option value="4">4-Software Testing and QA Enhancement</option>
            <option value="5">5-Mobile App Development</option>
            <option value="6">6-Saral Portal Enhancement</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Add Stakeholder
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddStakeholder;
