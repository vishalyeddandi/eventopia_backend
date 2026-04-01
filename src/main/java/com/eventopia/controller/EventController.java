package com.eventopia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.eventopia.model.Event;
import com.eventopia.service.EventService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/events")
public class EventController {

 @Autowired
 EventService service;

 @GetMapping
 public List<Event> getEvents(){
  return service.getAllEvents();
 }

 @PostMapping
 public Event addEvent(@RequestBody Event event){
  return service.saveEvent(event);
 }

}