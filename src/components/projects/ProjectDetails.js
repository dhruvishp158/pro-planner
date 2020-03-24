import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
function ProjectDetails(props) {
    // const id=props.match.params.id;
    const { project,auth } = props;
    if(!auth.uid)
    {
        return <Redirect to="/signIn" />
    }
    if (project) {
        return (
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>{project.title}</span>
                    <p>{project.content}</p>
                    <div className="card-action gey lighten-4 grey-text">
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        <p>4th March, 2020 at 11 pm</p>
                    </div>

                </div>
            </div>
        </div>
        )
    }
    else{
        return(
                <div className="container center">
                    <p>Loading Project.....</p>
                </div>
        )
    }
   
}
const mapStateToProps = (state, mapProps) => {
    console.log(state);
    const id = mapProps.match.params.id;
    const Projects = state.firestore.data.Projects;
    const project = Projects ? Projects[id] : null;//pull out each id and store it in project
    return {
        project: project,
        auth:state.firebaseAuth.auth
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(['Projects'])
)(ProjectDetails)
