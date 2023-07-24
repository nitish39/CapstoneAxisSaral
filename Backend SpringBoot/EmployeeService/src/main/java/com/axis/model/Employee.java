package com.axis.model;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(nullable=false)
	private int empl_id;
	
	@Column(nullable=false)
	private String empl_name;
	
	@Column(nullable=false)
	private String empl_code;
	
	@Column(nullable=false)
	private String empl_role;
	
	@Column(name="empl_email",unique=true)
	private String empl_email;
	
	@Column(name="empl_contact",unique=true)
	private String empl_contact;
	
	@Column(nullable=false)
	private String empl_uname;
	
	@Column(nullable=false)
	private String empl_pswd;
	
	@Column(nullable=false)
	private float empl_exp;
	
	@Column(nullable=false)
	private int empl_team;
	
	@Column(nullable=false)
	private int empl_salary;
	
	@Column(nullable=false)
	private String empl_address;
	
	@Column(nullable=true)
	private String empl_gender;
	
	@Column(nullable=false)
	private Date empl_dob;
	
	@Column(nullable=false)
	private String empl_location;
	
	@Column
	private String active;
	
	
	  public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	@ManyToOne(fetch=FetchType.EAGER)
	  @JoinColumn(name="project_proj_id" ,referencedColumnName="proj_id") private
	  Project project;
	
	  @ManyToOne(fetch=FetchType.EAGER)
	  @JoinColumn(name="project_manager_pmng_id" ,referencedColumnName="pmng_id")
	  private ProjectManager projectManager;
	 
	
	public String getEmpl_gender() {
		return empl_gender;
	}

	public void setEmpl_gender(String empl_gender) {
		this.empl_gender = empl_gender;
	}

	public Date getEmpl_dob() {
		return empl_dob;
	}

	public void setEmpl_dob(Date empl_dob) {
		this.empl_dob = empl_dob;
	}

	public int getEmpl_id() {
		return empl_id;
	}

	public void setEmpl_id(int empl_id) {
		this.empl_id = empl_id;
	}

	public String getEmpl_name() {
		return empl_name;
	}

	public void setEmpl_name(String empl_name) {
		this.empl_name = empl_name;
	}

	public String getEmpl_code() {
		return empl_code;
	}

	public void setEmpl_code(String empl_code) {
		this.empl_code = empl_code;
	}

	public String getEmpl_role() {
		return empl_role;
	}

	public void setEmpl_role(String empl_role) {
		this.empl_role = empl_role;
	}


	public String getEmpl_email() {
		return empl_email;
	}

	public void setEmpl_email(String empl_email) {
		this.empl_email = empl_email;
	}

	public String getEmpl_contact() {
		return empl_contact;
	}

	public void setEmpl_contact(String empl_contact) {
		this.empl_contact = empl_contact;
	}

	public String getEmpl_uname() {
		return empl_uname;
	}

	public void setEmpl_uname(String empl_uname) {
		this.empl_uname = empl_uname;
	}

	public String getEmpl_pswd() {
		return empl_pswd;
	}

	public void setEmpl_pswd(String empl_pswd) {
		this.empl_pswd = empl_pswd;
	}

	public float getEmpl_exp() {
		return empl_exp;
	}

	public void setEmpl_exp(float empl_exp) {
		this.empl_exp = empl_exp;
	}

	public int getEmpl_team() {
		return empl_team;
	}

	public void setEmpl_team(int empl_team) {
		this.empl_team = empl_team;
	}

	public int getEmpl_salary() {
		return empl_salary;
	}

	public void setEmpl_salary(int empl_salary) {
		this.empl_salary = empl_salary;
	}

	public String getEmpl_address() {
		return empl_address;
	}

	public void setEmpl_address(String empl_address) {
		this.empl_address = empl_address;
	}

	public String getEmpl_location() {
		return empl_location;
	}

	public void setEmpl_location(String empl_location) {
		this.empl_location = empl_location;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public ProjectManager getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(ProjectManager projectManager) {
		this.projectManager = projectManager;
	}

	public Employee(String empl_name, String empl_code, String empl_role, String empl_email, String empl_contact,
			String empl_uname, String empl_pswd, float empl_exp, int empl_team, int empl_salary, String empl_address,
			String empl_gender, Date empl_dob, String empl_location, Project project, ProjectManager projectManager) {
		super();
		this.empl_name = empl_name;
		this.empl_code = empl_code;
		this.empl_role = empl_role;
		this.empl_email = empl_email;
		this.empl_contact = empl_contact;
		this.empl_uname = empl_uname;
		this.empl_pswd = empl_pswd;
		this.empl_exp = empl_exp;
		this.empl_team = empl_team;
		this.empl_salary = empl_salary;
		this.empl_address = empl_address;
		this.empl_gender = empl_gender;
		this.empl_dob = empl_dob;
		this.empl_location = empl_location;
		this.project = project;
		this.projectManager = projectManager;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setStatus(String string) {
		// TODO Auto-generated method stub
		
	}

	
	


	
	

}
