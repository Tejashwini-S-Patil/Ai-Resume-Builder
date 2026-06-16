
function CreativeTemplate({ resume }) {

  return (

    <div
      id="resume-preview"
      className="creative-template"
    >

      <div className="creative-banner">

        <h1>
          🎨 {resume.name}
        </h1>

        <p>
          {resume.email}
        </p>

      </div>

      <div className="creative-content">

        <h2>
          About Me
        </h2>

        <p>
          {resume.summary}
        </p>

        <h2>
          Skills
        </h2>

        <div className="skills-grid">

          {
            resume.skills?.map(
              (skill,index)=>(
                <span
                  key={index}
                  className="skill-chip"
                >
                  {skill}
                </span>
              )
            )
          }

        </div>

      </div>

    </div>

  );

}

export default CreativeTemplate;

