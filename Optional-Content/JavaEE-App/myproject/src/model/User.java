package model;

import java.io.Serializable;

public class User implements Serializable{
	private long id;
	private String username;
	
	public User(String username) {
		super();
		this.id=System.currentTimeMillis();
		this.username = username;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

}
