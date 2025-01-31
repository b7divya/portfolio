import React from 'react';
import './Cards.css';
import Projectdata from '../Projectcards/Projectdata';

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards-container">
        {Projectdata.map((project) => (
          <div key={project.id} className="card">
            <img src={project.img} alt={project.projectName} className="card-image" />
            <h4 className="card-title">{project.projectName}</h4> {/* Only display project name */}
            <a href={`/project/${project.id}`} className="card-link">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
