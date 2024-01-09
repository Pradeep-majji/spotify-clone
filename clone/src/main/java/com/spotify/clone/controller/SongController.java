package com.spotify.clone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spotify.clone.entity.SongEntity;
import com.spotify.clone.service.SongService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SongController {

	@Autowired
	SongService ClassesService;
	
	@GetMapping(value="/",produces="application/json")
	public  ResponseEntity<List<SongEntity>> getAllotedClasses(){
		return new ResponseEntity<List<SongEntity>>(ClassesService.getsongs(),HttpStatus.OK);
	}
	@PostMapping(value="/addsong",consumes="application/json")
	public HttpStatus addUser(@RequestBody SongEntity ur)
	{
		if(ClassesService.insertUser(ur))
			return HttpStatus.OK;
		return HttpStatus.NOT_FOUND;
	}
}
