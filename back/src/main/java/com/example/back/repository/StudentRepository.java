package com.example.back.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.back.model.Student;
@Repository
public interface StudentRepository extends MongoRepository<Student, String>{
}
