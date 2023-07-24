import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Documents from './Components/Documents/Documents';
import Organization from './Components/Organization/Organization';
import Project from './Components/Project/Project';
import Profile from './Components/Profile/Profile';
import LoginPage from './Components/Login/LoginPage';
import AdminLogin from './Components/Admin/AdminPage';
import StakeHolders from './Components/Admin/StakeHolders';
import Projects from './Components/Admin/Projects';

import AdminDashboard from './Components/Admin/AdminDashboard';
import AddEmployee from './Components/Admin/AddEmployee';
import Services from './Components/Services/Services';
import Newsfeed from './Components/Newsfeed/Newsfeed';
import AddStakeholder from './Components/Admin/AddStakeholder';
import AddProject from './Components/Admin/AddProject';
import Login from './Components/Login/Login';
import UpdateEmployee from './Components/Admin/UpdateEmployee';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/documents" element={<Documents />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/stakeholders" element={<StakeHolders/>} />
          <Route path="/projects" element={<Projects/>} />

          
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/addstakeholder" element={<AddStakeholder />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/updateemployee/:empl_id" element={<UpdateEmployee />} />


  

        </Routes>
      </Router>
    </div>
  );
}

export default App;
