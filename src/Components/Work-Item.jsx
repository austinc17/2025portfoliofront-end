import React from 'react';

function WorkItem({ role, company, location, date, description }) {
  return (
    <div className="work-item">
      <h3>{role}</h3>
      <p className="company">{company} – {location}</p>
      <p className="date">{date}</p>
      <p className="desc">{description}</p>
    </div>
  );
}

export default WorkItem;
