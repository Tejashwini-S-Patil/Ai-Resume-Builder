
function DeveloperTemplate({ resume }) {

  return (

    <div
      id="resume-preview"
      className="developer-template"
    >

      <h1>
        👨‍💻 {resume.name || "Your Name"}
      </h1>

      <p>
        Full Stack Developer
      </p>

      <hr />

      <h2>
        Tech Stack
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

      <hr />

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
                {project.tech}
              </p>

              <p>
                {project.description}
              </p>

            </div>

          )
        )
        :
        <p>No Projects Added</p>
      }

    </div>

  );

}

export default DeveloperTemplate;

