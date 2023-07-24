package com.axis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



import com.axis.Response.LoginResponse;

import com.axis.model.Admin;

import com.axis.repository.AdminRespository;



@Service

public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminRespository customerRepository;

	@Override
	public String addAdmin(Admin employee) {

		// TODO Auto-generated method stub

		return null;

	}
	@Override
	public LoginResponse loginAdmin(Admin login) {
	    String msg = "";
	    Admin admin1 = customerRepository.findByEmail(login.getEmail());
	    if (admin1 != null) {
	        String password = login.getPassword();
	        String databasePassword = admin1.getPassword(); // Get the encoded password from the database

	        boolean isPwdRight =  password.equals(databasePassword);

	        if (isPwdRight) {

	            // Password matches, perform additional logic if needed

	            return new LoginResponse("Login Success", true);

	        } else {

	            return new LoginResponse("Invalid password", false);
	        }

	    } else {
	        return new LoginResponse("Email not found", false);

	    }

	}

}