package com.axis.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.StakeHolder;
import com.axis.model.StakeHolderPost;
import com.axis.service.StakeHolderService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ms1")
public class StakeHolderController {
	
	@Autowired
	StakeHolderService stakeHolderService;
	
	
	//---------get all stake holders----------------
	@GetMapping("/sthd/g1")
	public List<StakeHolder> getAllSthl(){
		return stakeHolderService.getAllSthl();
	}
	
	//get single stake holder by stake holder id------------
	@GetMapping("/sthd/g2/{sthd_id}")
	public Optional<StakeHolder> getSthlById(@PathVariable int sthd_id) {
		return stakeHolderService.getSthlById(sthd_id);
		
	}
	
	//get stake holder by project id------------
	@GetMapping("/sthd/g3/{project_proj_id}")
	public List<StakeHolder> getAllByProjectId(@PathVariable int project_proj_id){
		return stakeHolderService.getAllByProjectId(project_proj_id);
		
	}
	
	//------------
	@PostMapping("/sthd/post/{proj_id}")
	public StakeHolder postStakeholder(@RequestBody StakeHolderPost stakeHolderPost,@PathVariable int proj_id) {
		return stakeHolderService.postStakeholder(stakeHolderPost,proj_id);
	}
	

//	@DeleteMapping("/delete/sthdby/{sthd_id}")
//	public void deleteStakeHolder(@PathVariable("proj_id")int sthd_id) {
//	stakeHolderService.deleteStakeholder(sthd_id);
//	}
	
	
	
	
	
	

}
