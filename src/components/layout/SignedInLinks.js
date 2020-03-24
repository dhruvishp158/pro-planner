import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {forlogOut} from  '../../stores/actions/authAction';

const SignedInLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to='/createProject'>New Project</NavLink></li>
            <li><a onClick={props.forlogOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1" >{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        forlogOut:()=>dispatch(forlogOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);