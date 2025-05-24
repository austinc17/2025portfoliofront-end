import React from 'react';

function CourseItem({ role, description }) {
  return (
    <div className="work-item">
      <h3>{role}</h3>
      <p className="desc">{description}</p>
    </div>
  );
}

export default CourseItem;