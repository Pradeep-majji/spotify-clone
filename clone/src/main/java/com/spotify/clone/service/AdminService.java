package com.spotify.clone.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spotify.clone.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository AdminRepository;
	
	@Transactional(readOnly=true)
	public boolean loginAuthenticate(String email,String password) {
		int count=AdminRepository.loginAuthenticate(email,password);
		return count>0;
	}
	
}
