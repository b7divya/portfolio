import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectData from './Projectdata';
import Header from '../Header/Header';
import './Projectcards.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((item) => item.id === parseInt(id || '0', 10));

  if (!project) {
    return (
      <div className="error-container">
        <h1>Project Not Found</h1>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      <Header />
      <div className="project-container">
        <h1 className="project-title">{project.projectName}</h1>
        <img src={project.img} alt={project.projectName} className="project-img" />
        {/* Directly render the project description */}
        <div className="project-description">{project.projectDescription}</div>
        <div className="button-group">
          <a
            href={project.gitHubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
          <Link to="/" className="back-link">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
