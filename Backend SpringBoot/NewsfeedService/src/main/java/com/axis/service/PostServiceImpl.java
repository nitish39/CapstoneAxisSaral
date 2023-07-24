package com.axis.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.fiegnclient.EmployeeClient;
import com.axis.model.Employee;
import com.axis.model.Posts;
import com.axis.model.PostsPost;
import com.axis.model.PostsResponse;
import com.axis.repository.PostRepository;
import com.axis.repository.PostsResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	PostRepository postRepository;

	@Autowired
	EmployeeClient employeeClient;

	@Autowired
	PostsResponseRepository postsResponseRepository;

//--------Get All Posts------
	@Override
	public List<PostsResponse> getAllPosts() {
		// TODO Auto-generated method stub
		return postsResponseRepository.getAllPosts();
	}

//--------Get All Posts by EmployeeID------	
	@Override
	public List<Posts> getAllPostByEmplId(int empl_id) {
		// TODO Auto-generated method stub
		return postRepository.getAllPostByEmplId(empl_id);
	}

//Get Post By Post Category-------
	@Override
	public List<Posts> getPostByPostCategory(String epost_category) {
		// TODO Auto-generated method stub
		return postRepository.getPostByPostCategory(epost_category);
	}

//Get Posts by Content--------
	@Override
	public Posts getPostByPostContent(String epost_content) {
		// TODO Auto-generated method stub
		return postRepository.getPostByPostContent(epost_content);
	}

//Get Post by PostId----
	@Override
	public Posts getPostByPostId(int epost_id) {
		return postRepository.getPostByPostId(epost_id);
	}

//Get Likes By PostId----
	public int getLikesByPostId(int epost_id) {
		return postRepository.getLikesByPostId(epost_id);
	}

	// ---------Post_id,empl_name,post_content-------
	@Override
	public String post(PostsPost postsPost,int empl_id) {
		
		Employee employee = employeeClient.getEmployeeById(empl_id);
		Posts posts=new Posts();
		
		posts.setEpost_content(postsPost.getEpost_content());
//		posts.setEpost_datetime(postsPost.getEpost_datetime());
		posts.setEpost_likes(postsPost.getEpost_likes());
		posts.setEpost_category(postsPost.getEpost_category());
		posts.setEmployee(employee);
		postRepository.save(posts);
		
		PostsResponse pr=new PostsResponse();
		pr.setEmpl_name(employee.getEmpl_name());
		pr.setEmpl_role(employee.getEmpl_role());
		pr.setEpost_content(posts.getEpost_content());
//		pr.setEpost_datetime(posts.getEpost_datetime());
		pr.setEpost_id(posts.getEpost_id());	
		postsResponseRepository.save(pr);
		
		String Subject="SARAL AXIS PORTAL : New Post From "+ employee.getEmpl_name();
		String Body= employee.getEmpl_name() + " has Posted : " + postsPost.getEpost_content();
		sendSimpleEmail(Body,Subject);

	return"posted";
	}
	
	@Override
	public int likesInc(int epost_id) {

		return postRepository.getLikesInc(epost_id);
	}
	
	public void sendSimpleEmail(String body,String subject) 
	{
		List<Employee> employees = employeeClient.getAllEmployees();
		List<String> employeeEmails = new ArrayList<>();
		for (Employee employee : employees) {
		    employeeEmails.add(employee.getEmpl_email());
		}
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("manishamusti@gmail.com");
		message.setBcc(employeeEmails.toArray(new String[0]));
		message.setText(body);
		message.setSubject(subject);
		mailSender.send(message);
	}


}
