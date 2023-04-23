import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Career() {
  const careers = useLoaderData();
  const renderCareers = careers.map((career) => {
    return <Link to={career.id.toString()} key={career.id}>
    <p>{career.title}</p>
    <p>{career.location}</p>
    </Link>;
  });

  return <div className="careers">
    {renderCareers}
  </div>;
}

export default Career;
