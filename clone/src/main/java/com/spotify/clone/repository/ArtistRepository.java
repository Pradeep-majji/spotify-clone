package com.spotify.clone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spotify.clone.entity.ArtistEntity;


public interface ArtistRepository extends JpaRepository<ArtistEntity,String>{

}