package com.spotify.clone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotify.clone.entity.SongEntity;


public interface SongRepository extends JpaRepository<SongEntity,String>{

}