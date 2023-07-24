package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.axis.Response.LoginResponse;
import com.axis.model.Admin;
import com.axis.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/AdminPage")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping
	public ResponseEntity<?> loginCustomer(@RequestBody Admin login){
		LoginResponse loginResponse= adminService.loginAdmin(login);
		return ResponseEntity.ok(loginResponse);
	}
}