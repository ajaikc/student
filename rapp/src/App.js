import axios from 'axios';
import React from 'react';
import './App.css';


class studentInformation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        dob:'',
        genter:'',
        clas:'',
        division:'',
        errors: [],
        all:[],
        last:[],
        some:[]
      };
    
      this.initialState=this.state;
      this.handleChange = this.handleChange.bind(this);
      this.submitStudentInformation = this.submitStudentInformation.bind(this);

    };

    handleChange=(e)=>{
      const{name,value}=e.target;
      this.setState({[name]:value});

    }

    submitStudentInformation=(e)=> {
      e.preventDefault();
      console.log(this.state)
      
      if (this.validateForm()) {
          
          alert("Form submitted");

      
    
      const data = {
        name: this.state.name,
        dob: this.state.dob,
        genter:this.state.genter,
        clas:this.state.clas,
        division:this.state.division
      }; 
      axios.post("http://localhost:8080/api/students",data)
         .then(response=>{
           if(response.data!=null){
             this.setState(this.initialState);
             alert("saved successfully");
           
           }
      
      
      });
      axios.get('http://localhost:8080/api/all')
      .then(res => {
        this.setState({ all: res.data });
        console.log(this.state.all);
      });
      

      
    }
    }

    validateForm() {
      const { name, dob, division ,genter , clas } = this.state; 
      let state=this.state
      let errors = {};
      let formIsValid = true;

      if (!state["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }

      if (typeof state["name"] !== "undefined") {
        if (!name.match(/^[a-zA-Z ]*$/&&'')) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!state["dob"]) {
        formIsValid = false;
        errors["dob"] = "*Please enter your date of birth.";
      }
    if (state["clas"]===''||state["clas"]==="select") {
      formIsValid = false;
      errors["clas"] = "*Please enter your class.";
    }
      if (state["division"]===''||state["division"]==="select") {
        formIsValid = false;
        errors["division"] = "*Please enter your division.";
      
    }
    
    

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Student Information</h3>
        <form method="post"  name="studentInformation"  onSubmit= {this.submitStudentInformation} >
         <label>Name:</label>
         <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors["name"]}</div>
         <label>date of birth:</label>
         <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}  />
         <div className="errorMsg">{this.state.errors["dob"]}</div>
         <label>Genter:</label>
         <input type="radio" name="genter" value="male" onChange={this.handleChange}   />
         <label>male</label>
         <input type="radio" name="genter" value="female" onChange={this.handleChange}   />
         <label>female</label>
         
         <div></div>
         <label>Class:</label>
         <select  name="clas" value={this.state.clas} onChange={this.handleChange}>
           <option value="select">select</option>
          <option  name="clas" value="I" >I</option>
          <option name="clas" value="II" >II</option>
          <option  name="clas" value="III">III</option>
          <option  name="clas" value="IV">IV</option>
          <option  name="clas"value="V" >V</option>
          <option  name="clas"value="VI" >VI</option>
          <option  name="clas"value="VII" >VII</option>
          <option  name="clas"value="VIII">VIII</option>
          <option  name="clas"value="IX" >IX</option>
          <option  name="clas"value="X" >X</option>
          <option  name="clas"value="XI" >XI</option>
          <option  name="clas"value="XII" >XII</option>
         </select>

         <div className="errorMsg">{this.state.errors["clas"]}</div>
     
         <label>Division:</label>
         <select  name="division" value={this.state.division} onChange={this.handleChange}>
          <option value="select">select</option>
          <option name="division" value="A" >A</option>
          <option name="division" value="B" >B</option>
          <option  name="division" value="C" >C</option>
          
         </select>
         <div className="errorMsg">{this.state.errors["division"]}</div>
        
       
         <input type="submit" className="button"  value="register"/>
        </form>
        <table class="table table-stripe" align="right">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>dob</th>
                  <th>genDer</th>
                  <th>class</th>
                  <th>division</th>
                </tr>
              </thead>
              <tbody>
                {this.state.all.map(c =>
                  <tr>
                    <td>{c.id}</td>
                   <td> {c.name}</td>
                    <td>{c.dob}</td>
                    <td>{c.genter}</td>
                    <td>{c.clas}</td>
                    <td>{c.division}</td>
                  
                  </tr>
                )}
              </tbody>
            </table>


 
     </div>
   </div>
    

  );
  }

}

export default studentInformation;
