import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectLists';
import {connect} from 'react-redux';
//  import fbconfig from '../../config/fbconfig';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
//Rote Gaurding
import {Redirect} from 'react-router-dom';
class Dashboard extends React.Component{

    render(){
        
        
        const {Projects,auth}=this.props;
        if(!auth.uid)
        {
            return <Redirect to="/signIn" />
        }
        return(

           
            <div className="dashboard container">
                <div className="row">   
                    <div className="col s12 m6">
                        <ProjectList Projects={Projects}/>
                    </div>
                    <div className="col s16 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        Projects:state.firestore.ordered.Projects,
        auth:state.firebaseAuth.auth
    }
}
export default 
compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection:'Projects'
    }]))
    (Dashboard);