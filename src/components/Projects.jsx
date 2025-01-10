import React from "react";
import "./Projects.css"; // Custom styles

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Webpage",
      description:
        "Developed a responsive restaurant website using ReactJS, MySQL, and Bootstrap to enhance user experience and digital engagement.",
      image: "./src/assets/images/Tandoor.jpg", // Replace with actual image path
    },
    {
      title: "Health Recommendation App",
      description:
        "Integrated the Google Gemini API to deliver personalized diet and workout recommendations based on the user’s dietary habits and health details.",
      image: "./src/assets/images/Health.jpg", // Replace with actual image path
    },
    {
      title: "Bike Price Estimation App",
      description:
        "Built machine learning model to predict bike prices based on features like kms driven, year, aiming to assist buyers and sellers in making informed decisions.",
      image: "./src/assets/images/Bike.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image img-fluid"
                />
                <h5 className="mt-3">{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
