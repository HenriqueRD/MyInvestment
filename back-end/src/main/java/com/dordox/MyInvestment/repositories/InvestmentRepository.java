package com.dordox.MyInvestment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.MyInvestment.entities.Investment;

public interface InvestmentRepository extends JpaRepository<Investment, Long>{

}
