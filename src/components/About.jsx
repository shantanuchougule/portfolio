import React from 'react';
import './About.css'; // Include custom CSS for additional styling

function About() {
    return (
        <section className="about-section container-fluid">
            <h2 className="aboutname text-center">About me</h2>
            <div className="row mt-4">
                {/* About Description */}
                <div className="info col-md-6">
                    <h3 className="about-subtitle">GET TO KNOW ME!</h3>
                    <p className="about-text">
                        Hello! I am a B.Tech student in Computer Science and Engineering, currently in my final year
                        at D.Y. Patil College of Engineering and Technology, Kolhapur. My specialization lies in
                        Artificial Intelligence and Machine Learning (AI & ML), and I have built a strong academic
                        foundation with a CGPA of 8.7.
                    </p>
                    <p className="about-text">
                        I have gained hands-on experience in Python, SQL, HTML, CSS, and ReactJS, and I have applied
                        these skills to real-world projects such as a Bike Price Prediction System. I have also worked
                        on an AI-powered Diet and Workout Recommendation App that integrated CNN models and APIs for
                        personalized fitness solutions.
                    </p>
                    <p className="about-text">
                        During my internship as a ReactJS developer, I developed a restaurant website, showcasing my
                        web development skills using technologies like ReactJS, MySQL, and Bootstrap. I am seeking a
                        career that combines my passion for AI & ML with my software development skills.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="col-md-4">
                    <h3 className="about-subtitle">MY SKILLS</h3>
                    <div className="skills-container">
                        {['HTML 5', 'CSS 3', 'JavaScript', 'React', 'Bootstrap', 'UI/UX', 'Git', 'Java', 'SQL', 'Python', 'Data Science', 'Machine Learning'].map((skill, index) => (
                            <span key={index} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
