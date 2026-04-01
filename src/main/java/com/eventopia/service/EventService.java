package com.eventopia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventopia.model.Event;
import com.eventopia.repository.EventRepository;

@Service
public class EventService {

 @Autowired
 EventRepository repo;

 public List<Event> getAllEvents(){
  return repo.findAll();
 }

 public Event saveEvent(Event e){
  return repo.save(e);
 }

}