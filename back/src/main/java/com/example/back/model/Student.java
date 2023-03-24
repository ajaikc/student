package com.example.back.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document(collection="students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
  
    @Id
    public String id;
    @NotNull(message="required")
    public String name;
    @NotNull(message="required")
    public String dob;
    @NotNull(message="required")
    public String clas;
    @NotNull(message="required")
    public String division;
    @NotNull(message="required")
    public String genter;
    
    public Student(){
      super();
    }


    public Student( String id,String name, String dob, String clas, String division, String genter) {
        
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.clas = clas;
        this.division = division;
        this.genter=genter;
}

public String getId(){
  return id;
}
public void setId(String id) {
  this.id = id;
}

public String getName() {
  return name;
}

public void setName(String name) {
  this.name = name;
}

public String getDob() {
  return dob;
}

public void setDob(String dob) {
  this.dob = dob;
}

public String getClas() {
  return clas;
}

public void setClas(String clas) {
  this.clas = clas;
}

public String getDivision() {
  return division;
}

public void setDivision(String division) {
  this.division = division;
}

public String getGenter() {
  return genter;
}

public void setGenter(String genter) {
  this.genter = genter;
}
}
