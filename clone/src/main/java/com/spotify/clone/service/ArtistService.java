package com.spotify.clone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spotify.clone.entity.ArtistEntity;
import com.spotify.clone.repository.ArtistRepository;


@Service
public class ArtistService {

	@Autowired
	ArtistRepository ArtistRepository;
	
	@Transactional
	public boolean insertUser(ArtistEntity ur)
	{
		return ArtistRepository.save(ur)!=null;
	}

}
