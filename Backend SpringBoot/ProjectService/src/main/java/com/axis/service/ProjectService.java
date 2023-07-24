package com.axis.service;

import java.util.List;
import com.axis.model.Project;
import com.axis.model.ProjectPost;

public interface ProjectService {

	public List<Project> getAllProjects();
	public List<Project> getAllByProjectId(int proj_id);
	public Project getOneProjectById(int proj_id);
	public List<Project> getAllByDeptId(int dept_id);
	public Project postProject(ProjectPost projectPost, int dept_id);
	public List<Project> searchProject(String proj_name);
	
	public String deleteProject(int proj_id);


}
