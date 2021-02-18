import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete = (id) =>{

    axios.delete(`/post/delete/${id}`).then((res) =>{
      alert("Delete successfully");
      this.retrievePosts();
    })
  }


  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.companyName.toLowerCase().includes(searchKey)

    )

    this.setState({posts:result})
  }

  handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;

    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
    });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Table Details</h4>
            <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Row</a></button>

          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
       <table className="table table-hover" style={{marginTop:'40px'}}>
         <thead>
           <tr>
             <th scope="col">Table-id</th>
             <th scope="col">CompanyName</th>
             <th scope="col">Description</th>
             <th scope="col">Phone Number</th>
             <th scope="col">EmailID</th>
             <th scope="col">Logo</th>
             <th scope="col">States</th>
             <th scope="col">City</th>
             <th scope="col">Action</th>
           </tr>
         </thead>
          {this.state.posts.map((posts,index) =>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                  <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                  {posts.companyName}
                  </a>
                  </td>
              <td>{posts.description}</td>
              <td>{posts.phoneNumber}</td>
              <td>{posts.email}</td>
              <td>{posts.logo}</td>
              <td>{posts.stateS}</td>
              <td>{posts.city}</td>
              <td>
                <a class="btn btn-outline-warning" href={`/edit/${posts._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a class="btn btn-outline-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}

         <tbody>

         </tbody>

       </table>
      </div>
    )
  }
}
