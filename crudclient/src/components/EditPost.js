import React, { Component } from 'react';
import axios from 'axios';

export default class EditPost extends Component {
   
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
        const id = this.props.match.params.id;


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

        axios.put(`/post/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Post Updated Successfully");
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

    componentDidCatch(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    companyName:res.data.post.companyName,
                    description:res.data.post.description,
                    phoneNumber:res.data.post.phoneNumber,
                    email:res.data.post.email,
                    logo:res.data.post.logo,
                    stateS:res.data.post.stateS,
                    city:res.data.post.city,

                });

                console.log(this.state.post);
            }
        });
    }
   
    render() {
        return (
            <div className="col-md=8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit row</h1>
            <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Company Name</label>
                    <input type="text"
                    className="form-control"
                    name="companyName"
                    placeholder="Enter company Name"
                    value={this.state.companyName}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Description</label>
                       <input type="text"
                       className="form-control"
                       name="description"
                       placeholder="Enter company Description"
                       value={this.state.description}
                       onChange={this.handleInputChange}/>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Phone Number</label>
                       <input type="text"
                       className="form-control"
                       name="phoneNumber"
                       placeholder="Enter phone number"
                       value={this.state.phoneNumber}
                       onChange={this.handleInputChange}/>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Email-ID</label>
                       <input type="text"
                       className="form-control"
                       name="email"
                       placeholder="Enter email id"
                       value={this.state.email}
                       onChange={this.handleInputChange}/>
                   </div>

                   <div className="form-group" style={{marginBottom:'15px'}}>
                       <label style={{marginBottom:'5px'}} >Logo</label>
                       <input type="text"
                       className="form-control"
                       name="logo"
                       placeholder="Upload the logo"
                       value={this.state.logo}
                       onChange={this.handleInputChange}/>
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
                    &nbsp; Update
                </button>
            </form>
        </div>
        )
    }
}
