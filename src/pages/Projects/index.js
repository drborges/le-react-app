import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={{ pathname: `/projects/${project.id}` }}>
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
