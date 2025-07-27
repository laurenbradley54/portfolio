import React, { useState, useEffect } from 'react';
import './App.css';

const AboutSection = () => {
    const [background, setBackground] = useState('home');
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleBackgroundChange = (target) => {
        if (target === background) return;

        setOverlayVisible(true);
        setTimeout(() => {
            setBackground(target);
            setOverlayVisible(false);
        }, 600); // match CSS transition
    };

    const backgroundImage = {
        home: `${import.meta.env.BASE_URL}home.jpeg`,
        about: `${import.meta.env.BASE_URL}about4.jpeg`,
        experience: `${import.meta.env.BASE_URL}experience.jpeg`,
        contact: `${import.meta.env.BASE_URL}contact.jpeg`
    }[background];

    const images = [
        `${import.meta.env.BASE_URL}grad.jpeg`,
        `${import.meta.env.BASE_URL}paris.jpeg`,
        `${import.meta.env.BASE_URL}newyork2.jpeg`,
        `${import.meta.env.BASE_URL}lakecomo.jpeg`,
        `${import.meta.env.BASE_URL}surfing.jpeg`
    ];

    // Experience data
    const experiences = [
        {
            title: "Senior Data Scientist",
            company: "Booz Allen Hamilton",
            duration: "2022 - Present",
            location: "Virginia Beach, VA → Stuttgart, Germany→ San Diego, CA",
            highlights: [
                "Directed development of end-to-end products including data acquisition workflows, Pyspark pipeline development, and dashboard design through balancing hands-on execution with task delegation to deliver client-facing dashboard products.",
                "Integrated multiple disparate systems through the data discovery process by using SQL methodologies to establish relationships between unique identifiers from disparate sources.",
                "Developed high-quality data pipelining solutions leveraging Databricks, Apache Spark, Python, and advanced ETL processes that exceeded client expectations and provided effective support of customers and employees for business impact.",
                "Built and optimized a Random Forest classification model to predict summary categories from textual string data, improving prediction accuracy by 10% across 1M+ records.",
                "Established GitLab for CI/CD integration and version control cloud analytics platform. Lead the training and onboarding for 100+ users, ensuring seamless adoption and long-term value."
            ]
        },
        {
            title: "Data Science & Data Engineering Intern",
            company: "Northwestern Mutual",
            duration: "2020 & 2021 Summer Internships",
            location: "Milwaukee, WI | Remote",
            highlights: [
                "Modernized data pipelines by converting legacy SQL code to Python and Pyspark, enhancing scalability and performance of data engineering solutions.",
                "Built Python utility to automate AWS infrastructure deployment, providing consistency and reducing deployment errors.",
                "Developed predictive models using XGBoost, LightGBM, and Logistic Regression to enhance underwriting processes, achieving accuracy improvements in the life insurance industry."
            ]
        }
    ];

    const projects = [
        {
            title: "Databricks Certified Data Engineer Associate",
            project: "Databricks Certification",
            duration: "February 2025",
            highlights: [
                "Obtained Databricks Certified Data Engineer Associate certification, demonstrating proficiency in the Databricks Lakehouse Platform to complete data engineering tasks.",
            ]
        },
        {
            title: "Foundry & AIP Builder Foundations",
            project: "Palantir Certification",
            duration: "February 2025",
            highlights: [
                "Obtained Foundry & AIP Builder Foundations certification, showcasing foundational knowledge in Palantir's data management systems for operationalizing data across organizations.",
            ]
        },
        {
            title: "Advana Data Engineer of the Year Award for 2023",
            project: "Booz Allen Hamilton",
            duration: "June 2023",
            highlights: [
                "Recognized as the Advana Data Engineer of the Year for 2023, highlighting exceptional contributions to pipeline projects and implementation of the GitLab cloud platform.",
            ]
        },
        {
            title: "National Health & Nutrition Examination Survey (NHANES) Capstone",
            project: "Virginia Tech Center for Biostatistics & Health Data Sciences ",
            duration: "September 2021 - December 2021",
            highlights: [
                "Developed a predictive model for diabetes using logistic stepwise regression, and train-test split methods based on questions from a survey, achieving an accuracy rate of 94%. The model served as a template for the client to replicate.",
            ]
        },
        {
            title: "IBM Accelerate",
            project: "IBM",
            duration: "May 2021 - August 2021",
            highlights: [
                "Learned fundamentals of Front-End Development using JavaScript and ReactJS, and applied skills on projects with assigned teams."
            ]

        },
        {
            title: "Heat Simulator",
            project: "Computer Science Foundations of CMDA",
            duration: "September 2020 - December 2020",
            highlights: [
                "Used C, Unix Command Line interface, and Parallel Programming techniques to develop a heat simulation on a graphic created by Python. The high-performance computing tools included openMP, MPI, and slurm output files. GitHub was utilized to share the progress with the Teaching Assistant. Valgrind was applied to debug memory issues."
            ]
        },
        {
            title: "ASA Data-Fest Competition",
            project: "Virginia Tech CMDA Club",
            duration: "March 2021",
            highlights: [
                "Second place winners for the 2021 ASA Data-Fest Competition.",
                "Utilized predictive modeling (glm), variable selection, and data manipulation in R-Studio and Python to construct a written analysis of how to prevent drug use to save lives based on the drug survey datasets provided."
            ]
        }
    ];

    const education = {
        degree: "Bachelor of Science in Computational Modeling and Data Analytics",
        school: "Virginia Tech",
        graduation: "December 2021",
        coursework: [
            "Machine Learning",
            "Mathematical Modeling", 
            "Data Structures & Algorithms",
            "Mathematics",
            "Data Visualizations"
        ]
    };

    const skills = [
        "Python", "PySpark", "Apache Spark", "SQL", "Databricks", 
        "ETL Processes", "NLP", "Machine Learning", "Data Engineering",
        "Pipeline Development", "Dashboard Development", 
        "UNIX/Linux Design", "Parallel Programming", "GitLab", 
        "C", "Java", "R", "Data visualization", "AWS","Regression", "MATLAB"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % images.length);
        }, 12000); // change every 12 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="about-section"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className={`overlay ${overlayVisible ? 'visible' : ''}`}></div>

            <div
                className="header-name"
                onClick={() => handleBackgroundChange('home')}
                style={{ cursor: 'pointer' }}
            >
                Lauren Bradley
            </div>

            <div className="nav-row">
                <nav className="nav-buttons">
                    <button onClick={() => handleBackgroundChange('about')}>about</button>
                    <button onClick={() => handleBackgroundChange('experience')}>experience</button>
                    <button onClick={() => handleBackgroundChange('contact')}>contact</button>
                </nav>
            </div>

            {background === 'about' && (
                <div className="about-content">
                    <div className="bio-title-box">
                        <h2>Bio</h2>
                    </div>

                    <div className="slideshow-container">
                        <img
                            src={images[currentImageIndex]}
                            alt="Slideshow"
                            className="slideshow-image"
                        />
                    </div>

                    <div className="bio-paragraph-box">
                        <p>
                            Hello,
                            <br />
                            <br />
                            
                            I'm Lauren, a data scientist, technology enthusiast, lifelong learner, and aspiring leader with a passion for turning data into insight. For the past three years, I’ve worked as a Data Engineer at Booz Allen Hamilton, where I’ve specialized in ETL workflows and led data pipeline development for dashboard products using Databricks, PySpark, Python, and SQL.
                             I earned my Bachelor of Science in Computational Modeling and Data Analytics from Virginia Tech in December 2021, with coursework in machine learning, mathematical modeling, algorithms, and data visualization. During my college years, I interned at Northwestern Mutual, gaining hands-on experience in both data engineering and data science from building scalable systems to exploring predictive models. 
                             Originally from Richmond, Virginia, I began my career in Virginia Beach, followed by a TDY in Stuttgart, Germany in 2024, and now based in San Diego, California. Outside of work, I enjoy traveling, surfing, and supporting the growth and empowerment of others.
                              Thanks for stopping by, I’d love to connect!
                            <br />
                            <br />
                            -Lauren
                        </p>
                    </div>
                </div>
            )}

            {background === 'experience' && (
                <div className="experience-content">
                    <div className="experience-title-box">
                        <h2>Experience</h2>
                    </div>

                    <div className="experience-grid">
                        {/* Professional Experience */}
                        <div className="experience-section">
                            <h3>Professional Experience</h3>
                            {experiences.map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <div className="experience-header">
                                        <h4>{exp.title}</h4>
                                        <span className="company">{exp.company}</span>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="duration">{exp.duration}</span>
                                        <span className="location">{exp.location}</span>
                                    </div>
                                    <ul className="highlights">
                                        {exp.highlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* Education */}
                        <div className="experience-section">
                            <h3>Education</h3>
                            <div className="education-item">
                                <h4>{education.degree}</h4>
                                <span className="school">{education.school}</span>
                                <span className="graduation">Graduated: {education.graduation}</span>
                                <div className="coursework">
                                    <strong>Relevant Coursework:</strong>
                                    <div className="coursework-list">
                                        {education.coursework.map((course, idx) => (
                                            <span key={idx} className="course-tag">{course}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}
                        <div className="project-section">
                            <h3>Certifications / Projects / Awards</h3>
                            {projects.map((project, index) => (
                                <div key={index} className="project-item">
                                    <div className="project-header">
                                        <h4>{project.title}</h4>
                                        <span className="project-name">{project.project}</span>
                                    </div>
                                    <div className="project-meta">
                                        <span className="duration">{project.duration}</span>
                                    </div>
                                    <ul className="highlights">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="experience-section">
                            <h3>Technical Skills</h3>
                            <div className="skills-container">
                                {skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {background === 'contact' && (
                <div className="contact-content">
                    <div className="contact-title-box">
                    <h2>Contact</h2>
                    </div>
                    <div className="contact-info-box">
                    <p>I'd love to connect, feel free to reach out!</p>
                    <p><strong>Email:</strong> <a href="mailto:laurenbradley54@gmail.com">laurenbradley54@gmail.com</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lauren-bradley123/" target="_blank" rel="noopener noreferrer">linkedin.com/in/lauren-bradley123/</a></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutSection;