package com.spotify.clone.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="artist")
@Entity
public class ArtistEntity {
	@Id
	@Column(name="aid")
	private String aid;
	@Column(name="aname")
	private String aname;
	public String getAid() {
		return aid;
	}
	public void setAid(String aid) {
		this.aid = aid;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public ArtistEntity() {}
	public ArtistEntity(String aid, String aname) {
		super();
		this.aid = aid;
		this.aname = aname;
	}
	
}
