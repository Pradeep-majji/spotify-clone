package com.spotify.clone.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="admin")
@Entity
public class AdminEntity {
	@Id
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	public AdminEntity() {}
	public AdminEntity(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

}
