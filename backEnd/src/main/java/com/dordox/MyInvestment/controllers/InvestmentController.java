package com.dordox.MyInvestment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.MyInvestment.entities.Investment;
import com.dordox.MyInvestment.repositories.InvestmentRepository;

@RestController
@RequestMapping("/investment")
public class InvestmentController {

	@Autowired
	private InvestmentRepository investments;
	
	public List<Investment> listAll(){
		return investments.findAll(); 
	}
	
	@GetMapping("/id={id}")
	public Investment goForId(@PathVariable Long id) {
		return investments.findById(id).orElse(null);
	}
	
	@DeleteMapping
	public void removeInvestment(@PathVariable Long id) {
		investments.deleteById(id);
	}
	
	@PostMapping
	public Investment createInvestment(@RequestBody Investment invest) {
		return investments.save(invest);
	}
}
