import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';
const ProjectList = ({Projects}) => {
    return (
        <div className="project-list section">
           {Projects && Projects.map(project=>{
               return(
                   <Link to={'project/' + project.id} key={project.id}>
                   <ProjectSummary project={project} key={project.id}/>
                   </Link>
           )
           })}
        </div>
    )
}
export default ProjectList;