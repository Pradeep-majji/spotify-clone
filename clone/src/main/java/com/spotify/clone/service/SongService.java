package com.spotify.clone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spotify.clone.entity.SongEntity;
import com.spotify.clone.repository.SongRepository;

@Service
public class SongService {

	@Autowired
	SongRepository SongRepository;
	
	@Transactional(readOnly=true)
	public List<SongEntity> getsongs() {
		return SongRepository.findAll();	
	}
	@Transactional
	public boolean insertUser(SongEntity ur)
	{
		return SongRepository.save(ur)!=null;
	}
}
