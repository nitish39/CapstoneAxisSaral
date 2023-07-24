package com.axis.service;

import java.util.List;
import com.axis.model.Employee;
import com.axis.model.EmployeePost;
import com.axis.model.Login;

public interface EmployeeService {

public List<Employee> getAllEmployees();
public Employee getEmployeeById(int empl_id);
public List<Employee> getEmployeesByRole(String empl_role);
public List<Employee> getEmployeesByTeam(int empl_team);
public List<Employee> getEmployeesByProject(int proj_id);
public List<Employee> getEmployeesByName(String empl_name);
public Employee postEmployee(EmployeePost employeePost);
public String validate(Login login);
public Employee getEmployee(String empl_email);

public String deleteEmployee(int empl_id);

public void saveEmployeeForm(Employee employee);

Employee UpdateEmployee(Employee employeePost);


}
