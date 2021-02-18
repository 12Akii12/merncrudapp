import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {
   
    constructor(props){
        super(props);
        this.state={
            companyName:"",
            description:"",
            phoneNumber:"",
            email:"",
            logo:"",
            stateS:"",
            city:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const {companyName,description,phoneNumber,email,logo,stateS,city} = this.state;

        const data ={
            companyName:companyName,
            description:description,
            phoneNumber:phoneNumber,
            email:email,
            logo:logo,
            stateS:stateS,
            city:city
        }

        console.log(data);

        axios.post("/post/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        companyName:"",
                        description:"",
                        phoneNumber:"",
                        email:"",
                        logo:"",
                        stateS:"",
                        city:""
                    }
                )
            }
        })
    }
   
    render() {
        return (
           <div className="col-md=8 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Create new Row</h1>
               <form action="" className="was-validated">
                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >CompanyName</label>
                       <input type="text"
                       className="form-control"
                       name="companyName"
                       placeholder="Enter Company Name"
                       value={this.state.companyName}
                       onChange={this.handleInputChange} required autoComplete="off"/>
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please enter the company name</div>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Description</label>
                       <input type="text"
                       className="form-control"
                       name="description"
                       placeholder="Enter company Description"
                       value={this.state.description}
                       onChange={this.handleInputChange} required autoComplete="off"/>
                       <div className="valid-feedback">Looks Good!</div>
                       <div className="invalid-feedback">Please enter company description</div>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Phone Number</label>
                       <input type="text"
                       className="form-control"
                       name="phoneNumber"
                       pattern="[1-9]{1}[0-9]{9}"
                       placeholder="Enter phone number"
                       value={this.state.phoneNumber}
                       onChange={this.handleInputChange} required autoComplete="off"/>
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please enter valid phone number</div>                   
                    </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Email-ID</label>
                       <input type="text"
                       className="form-control"
                       name="email"
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                       placeholder="Enter email id"
                       value={this.state.email}
                       onChange={this.handleInputChange} required autoComplete="off"/>
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please enter valid emailId</div>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Logo</label>
                       <input type="text"
                       className="form-control"
                       name="logo"
                       placeholder="Upload the logo"
                       value={this.state.logo}
                       onChange={this.handleInputChange} required autoComplete="off"/>
                       <div className="valid-feedback">Valid.</div>
                       <div className="invalid-feedback">Please upload logo file</div>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >States</label>
                       <input type="text"
                       className="form-control"
                       name="stateS"
                       placeholder="Enter the states"
                       value={this.state.stateS}
                       onChange={this.handleInputChange}/>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >City</label>
                       <input type="text"
                       className="form-control"
                       name="city"
                       placeholder="Enter the city"
                       value={this.state.city}
                       onChange={this.handleInputChange}/>
                   </div>

                   <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                       &nbsp; Save
                   </button>
               </form>
           </div>
        )
    }
}
