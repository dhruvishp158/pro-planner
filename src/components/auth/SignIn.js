import React, { Component } from 'react'
import {connect} from 'react-redux';
import {forSignIn} from '../../stores/actions/authAction';
import {Redirect} from 'react-router-dom';
export class SignIn extends Component {

    state={
        email:'',
        password:''
    }

    handleChange=(e)=>{
                this.setState({
                    [e.target.id]:e.target.value
                })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state);
        this.props.forSignIn(this.state);
    }

    render() {
        const {authError,auth} =this.props;
        if(auth.uid)
        {
            return <Redirect to="/" />
        }
        return (
           
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text tect-darken-3">Log In</h5>
                <div className="input-feild">
                    <label htmlFor="email">Email</label>
                    <input type="email"  id="email"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password"  onChange={this.handleChange} />
                </div>
                <div className="input-feild">
                    <button className="btn green lighten-1 z-depth-0">Log In</button>
                    <div className="red-text center">
                                {authError ? <p>{authError}</p>:null}
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebaseAuth.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        forSignIn:(credentials)=>dispatch(forSignIn(credentials))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
