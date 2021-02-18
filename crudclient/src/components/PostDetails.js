import React, { Children, Component } from 'react';
import axios from 'axios';

export default class PostDetails extends Component {
   
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidCatch(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }
    render() {

        const {companyName,description,phoneNumber,email,logo,stateS,city} = this.state;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{companyName}</h4>
                <hr></hr>


                <dl className="row">

                    <dt className="col-sm-3">Description</dt>
                    <dd className="col-sm-9">{description}</dd>

                    <dt className="col-sm-3">Phone Number</dt>
                    <dd className="col-sm-9">{phoneNumber}</dd>

                    <dt className="col-sm-3">Email Id</dt>
                    <dd className="col-sm-9">{email}</dd>

                    <dt className="col-sm-3">Logo</dt>
                    <dd className="col-sm-9">{logo}</dd>

                    <dt className="col-sm-3">States</dt>
                    <dd className="col-sm-9">{stateS}</dd>

                    <dt className="col-sm-3">City</dt>
                    <dd className="col-sm-9">{city}</dd>

                </dl>

            </div>
        )
    }
}
