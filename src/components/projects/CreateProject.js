import React, { Component } from 'react'
import {createProject} from '../../stores/actions/projectActions'
import {connect} from 'react-redux';
//==Route Gaurding
import {Redirect} from 'react-router-dom';
export class CreateProject extends Component {

    state={
        title:'', 
        content:''
    }

    handleChange=(e)=>{
                this.setState({
                    [e.target.id]:e.target.value
                })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state); 
        this.props.history.push('/');      
    }

    render() {
        if(!this.props.auth.uid)
        {
            return <Redirect to="/signIn" />
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text tect-darken-3">Create Project</h5>
                <div className="input-feild">
                    <label htmlFor="title">Title</label>
                    <input type="text"  id="title"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                    <label htmlFor="content">Content</label>
                   <textarea  id="content"  className="materialize-class" onChange={this.handleChange}></textarea>
                </div>
                
                <div className="input-feild">
                    <button className="btn green lighten-1 z-depth-0">Create</button>
                </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebaseAuth.auth
    }
}
const mapDispathToProps=(dispath)=>{
    return{
        createProject:(project)=>dispath(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(CreateProject);
