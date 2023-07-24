package com.axis.fiegnclient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.axis.model.Employee;

@FeignClient(name="EMPLOYEE-SERVICE")
public interface EmployeeClient {
	@GetMapping("/ms2/empl/g2/{empl_id}")
	public Employee getEmployeeById(@PathVariable int empl_id);
	
	@GetMapping("/ms2/empl/g1")
	public List<Employee> getAllEmployees();

}
