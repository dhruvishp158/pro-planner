import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {forSignUp} from '../../stores/actions/authAction'
export class SignUp extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
       e.preventDefault();
        // console.log(this.state);
        this.props.forSignUp(this.state);
    }

    render() {
        if(this.props.auth.uid)
        {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text tect-darken-3">Sign Up</h5>
                <div className="input-feild">
                    <label htmlFor="email">Email</label>
                    <input type="email"  id="email"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"  id="firstName"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"  id="lastName"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                <button className="btn green lighten-1 z-depth-0">Sign Up</button>
                    <div className="red-text center">
                         {this.props.authError ? <p>{this.props.authError}</p>:null}
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToprops=(state)=>{
    return{
        auth:state.firebaseAuth.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    forSignUp:(newUser)=>dispatch(forSignUp(newUser)),
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(SignUp);
