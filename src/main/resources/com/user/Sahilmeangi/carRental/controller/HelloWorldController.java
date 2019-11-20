package com.user.Sahilmeagi.carRental.controller;

import java.time.LocalDateTime;
import java.time.LocalDateTime;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.user.Sahilmeangi.carRental.demo.model.HelloWorld;
@Controller

public class HelloWorldController {
	@RequestMapping("/helloworld")
	
	public String handler(Model model) {
	HelloWorld helloWorld = new HelloWorld();
	helloWorld.setMessage("Hello World Example Using Spring MVC 5!!!");
	helloWorld.setDateTime(LocalDateTime.now().toString());
	model.addAttribute("helloWorld",helloWorld);
	return "helloworld";
	}

}