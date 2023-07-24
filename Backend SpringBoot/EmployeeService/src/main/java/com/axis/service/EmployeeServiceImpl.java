package com.axis.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.axis.feignclient.ProjectClient;
import com.axis.model.Employee;
import com.axis.model.EmployeePost;
import com.axis.model.Login;
import com.axis.repository.EmployeeRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class EmployeeServiceImpl implements EmployeeService {

@Autowired
EmployeeRepository employeeRepository;

@Autowired
ProjectClient projectClient;

@Override
public List<Employee> getAllEmployees() {
return employeeRepository.getAllActiveEmployees();
}

@Override
public Employee getEmployeeById(int empl_id) {

return employeeRepository.findById(empl_id).orElse(null);
}

@Override
public List<Employee> getEmployeesByRole(String empl_role) {
// TODO Auto-generated method stub
return employeeRepository.getAllByRole(empl_role);
}

// -----------------------------------------------------------

@Override
public List<Employee> getEmployeesByTeam(int empl_team) {
// TODO Auto-generated method stub
return employeeRepository.getAllByTeam(empl_team);
}

@Override
public List<Employee> getEmployeesByProject(int proj_id) {
// TODO Auto-generated method stub
return employeeRepository.getAllByProjectId(proj_id);
}

@Override
public List<Employee> getEmployeesByName(String empl_name) {
// TODO Auto-generated method stub
return employeeRepository.getAllByName(empl_name);
}

@Override
public Employee postEmployee(EmployeePost employeePost) {
   // Create an instance of BCryptPasswordEncoder
   BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
   String encryptedPassword = passwordEncoder.encode(employeePost.getEmpl_pswd());
   Employee employee = new Employee();
   employee.setEmpl_name(employeePost.getEmpl_name());
   employee.setEmpl_code(employeePost.getEmpl_code());
   employee.setEmpl_role(employeePost.getEmpl_role());
   employee.setEmpl_email(employeePost.getEmpl_email());
   employee.setEmpl_contact(employeePost.getEmpl_contact());
   employee.setEmpl_uname(employeePost.getEmpl_uname());
   employee.setEmpl_pswd(encryptedPassword); // Set the encrypted password
   employee.setEmpl_exp(employeePost.getEmpl_exp());
   employee.setEmpl_team(employeePost.getEmpl_team());
   employee.setEmpl_salary(employeePost.getEmpl_salary());
   employee.setEmpl_address(employeePost.getEmpl_address());
   employee.setEmpl_location(employeePost.getEmpl_location());
   employee.setEmpl_dob(employeePost.getEmpl_dob());
   employee.setEmpl_gender(employeePost.getEmpl_gender());
   employee.setActive(employeePost.getActive());

   employeeRepository.save(employee);
   return employee;

}







@Override
public Employee UpdateEmployee(Employee employeePost) {
//   Employee employee;
       Optional<Employee> optionalEmployee = employeeRepository.findById(employeePost.getEmpl_id());
       if (optionalEmployee.isPresent()) {
       Employee employee = optionalEmployee.get(); 
       
   employee.setEmpl_name(employeePost.getEmpl_name());
   employee.setEmpl_code(employeePost.getEmpl_code());
   employee.setEmpl_role(employeePost.getEmpl_role());
   employee.setEmpl_email(employeePost.getEmpl_email());
   employee.setEmpl_contact(employeePost.getEmpl_contact());
   employee.setEmpl_uname(employeePost.getEmpl_uname());
   
   // Check if the password needs to be updated
   if (employeePost.getEmpl_pswd() != null) {
       BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
       String encryptedPassword = passwordEncoder.encode(employeePost.getEmpl_pswd());
       employee.setEmpl_pswd(encryptedPassword);
   }
   employee.setEmpl_exp(employeePost.getEmpl_exp());
   employee.setEmpl_team(employeePost.getEmpl_team());
   employee.setEmpl_salary(employeePost.getEmpl_salary());
   employee.setEmpl_address(employeePost.getEmpl_address());
   employee.setEmpl_location(employeePost.getEmpl_location());
   employee.setEmpl_dob(employeePost.getEmpl_dob());
   employee.setEmpl_gender(employeePost.getEmpl_gender());
   
   employeeRepository.save(employee);
       }
	return employeePost;
}



@Override
public String validate(Login login) {
	List<Employee> emp = employeeRepository.validateR(login.getLogin_email());
	if (emp.size() == 1) {
	String email = login.getLogin_email();
	String password = login.getLogin_password();
	for (Employee employee : emp) {
	if (employee.getEmpl_email().equals(email) && employee.getEmpl_pswd().equals(password)) {
	return "valid";
	}
	}
	}
	return "not valid";
	}
@Override
public Employee getEmployee(String empl_email) {
// TODO Auto-generated method stub
List<Employee> empl = employeeRepository.getEmployeeR(empl_email);
if (empl.size() == 1) {
for (Employee employee : empl) {
return employee;

}
}

return null;
}

public String deleteEmployee(int empl_id) {
Optional<Employee> employee =employeeRepository.findById(empl_id);
Employee EmployeeDelete = employee.orElse(null);
if(EmployeeDelete==null) {
return "Id provided is not Valid !!";
}
else {
	Employee e = employee.get();
	e.setActive("inactive");
	employeeRepository.save(e);
//employeeRepository.delete(EmployeeDelete);
return "Deleted Sucessfully !!";
}
}

@Override
public void saveEmployeeForm(Employee employee) {
// TODO Auto-generated method stub
employeeRepository.save(employee);

}

}