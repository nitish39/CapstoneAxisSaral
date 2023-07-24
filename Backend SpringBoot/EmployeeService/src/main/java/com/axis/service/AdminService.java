package com.axis.service;

import java.util.List;

import com.axis.Response.LoginResponse;
import com.axis.model.Admin;


public interface AdminService {
		
		
		public String addAdmin(Admin customer);
	
		public LoginResponse loginAdmin(Admin login);
		

	
}

