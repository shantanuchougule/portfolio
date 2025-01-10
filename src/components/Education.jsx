import React from "react";
import "./Education.css"; // Custom styles

const Education = () => {
  const educationData = [
    {
      date: "Nov 2022 - May 2025",
      institution: "D. Y. Patil College of Engineering and Technology, Kolhapur.",
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      result: "Aggregate CGPA: 8.7",
    },
    {
      date: "August 2019 - May 2022",
      institution: "Sanjay Ghodawat Polytechnic, Atigre.",
      degree: "Diploma in Computer Science and Engineering (CSE)",
      result: "Aggregate Percentage: 86.91",
    },
    {
      date: "May 2018 - March 2019",
      institution: "Shri Hanumantrao Chate School, Kolhapur.",
      degree: "SSC",
      result: "Aggregate Percentage: 87.20",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="education text-center mb-3">Education</h2>
      <div className="container">
        {educationData.map((item, index) => (
          <div key={index} className="education-card mb-4">
            <div className="row align-items-center">
              <div className="col-md-3 text-md-left text-center">
                <p className="text mt-0">{item.date}</p>
              </div>
              <div className="col-md-9">
                <h5 className="font-weight-bold mb-1">{item.institution}</h5>
                <p className="mb-0">{item.degree}</p>
                <p className="mb-0">{item.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
