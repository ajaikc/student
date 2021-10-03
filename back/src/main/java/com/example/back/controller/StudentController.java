package com.example.back.controller;
import java.util.List;

import com.example.back.model.Student;
import com.example.back.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class StudentController {
    
    
  
    @Autowired
    private StudentRepository studentRepository;
    @GetMapping(value="/all")
    public List<Student> getAllStudents(){
        return studentRepository.findAll(Sort.by("name").ascending());
    }
    @PostMapping(value="/students")
    public String createStudent(@RequestBody @Valid Student student){
        Student insertedStudent=studentRepository.insert(student);
        
        return "student created" +insertedStudent.getName();

    }   
}
