package com.dordox.MyInvestment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.MyInvestment.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
