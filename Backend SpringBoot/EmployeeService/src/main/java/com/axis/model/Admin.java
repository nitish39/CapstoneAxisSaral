
package com.axis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

@Table(name="admin")

public class Admin {

	  
  
	    @Id
	    @Column(name="email" ,unique=true)
		private String email;
	    
	    @Column(name="phone_number")
		private String phone_number;
	    
	    @Column(name="password")
		private String password;
	    
	    @Column(name="first_name")
	  	private String first_name; 
	  	    
	    @Column(name="last_name")
	  	private String last_name;
	

}