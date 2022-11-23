// ./src/pages/ProjectsPage.js

import { useState, useEffect } from "react";
// import projectsData from "./../projects-data.json";  // <== REMOVE

import { Link } from "react-router-dom";


function ProjectsPage (props) {                     // <== UPDATE
  const [projects, setProjects] = useState([]);
// setprojects é responsável por atualizar o estado do componente
// useState é responsável por criar o estado do componente
  
  useEffect(() => { // useEffect é um hook que é executado quando o componente é montado
    setProjects(props.projects);      // props.projects            // <== UPDATE
  }, [props.projects]);                           // <== UPDATE

  
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>

            <Link to={`/projects/${project._id}`}>
              {project.name}
            </Link>
            </h3>

            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
