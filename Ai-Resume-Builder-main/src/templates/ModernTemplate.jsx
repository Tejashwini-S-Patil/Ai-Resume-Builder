
function ModernTemplate({ resume }) {

  return (

    <div
      id="resume-preview"
      className="modern-template"
    >

      {/* Header */}

      <div className="resume-header">

        <h1>
          {resume.name || "Your Name"}
        </h1>

        <p>
          {resume.email}
        </p>

        <p>
          {resume.phone}
        </p>

        <p>
          {resume.location}
        </p>

      </div>

      {/* Summary */}

      <section className="resume-section">

        <h2>
          Professional Summary
        </h2>

        <p>
          {resume.summary ||
            "No summary generated"}
        </p>

      </section>

      {/* Skills */}

      <section className="resume-section">

        <h2>
          Skills
        </h2>

        <div className="skills-grid">

          {
            resume.skills?.length > 0
            ?
            resume.skills.map(
              (skill,index)=>(
                <span
                  key={index}
                  className="skill-chip"
                >
                  {skill}
                </span>
              )
            )
            :
            <p>No Skills Added</p>
          }

        </div>

      </section>

      {/* Education */}

      <section className="resume-section">

        <h2>
          Education
        </h2>

        {
          resume.education?.length > 0
          ?
          resume.education.map(
            (edu,index)=>(
              <div
                key={index}
                className="resume-card"
              >

                <h3>
                  {edu.degree}
                </h3>

                <p>
                  {edu.college}
                </p>

                <p>
                  CGPA: {edu.cgpa}
                </p>

                <p>
                  Year: {edu.year}
                </p>

              </div>
            )
          )
          :
          <p>No Education Added</p>
        }

      </section>

      {/* Experience */}

      <section className="resume-section">

        <h2>
          Experience
        </h2>

        {
          resume.experience?.length > 0
          ?
          resume.experience.map(
            (exp,index)=>(
              <div
                key={index}
                className="resume-card"
              >

                <h3>
                  {exp.role}
                </h3>

                <p>
                  {exp.company}
                </p>

                <p>
                  {exp.duration}
                </p>

                <p>
                  {exp.description}
                </p>

              </div>
            )
          )
          :
          <p>No Experience Added</p>
        }

      </section>

      {/* Projects */}

      <section className="resume-section">

        <h2>
          Projects
        </h2>

        {
          resume.projects?.length > 0
          ?
          resume.projects.map(
            (project,index)=>(
              <div
                key={index}
                className="resume-card"
              >

                <h3>
                  {project.name}
                </h3>

                <p>
                  Tech Stack:
                  {" "}
                  {project.tech}
                </p>

                <p>
                  {project.description}
                </p>

                <p>
                  {project.github}
                </p>

              </div>
            )
          )
          :
          <p>No Projects Added</p>
        }

      </section>

    </div>

  );

}

export default ModernTemplate;

