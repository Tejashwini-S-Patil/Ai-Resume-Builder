
function ExecutiveTemplate({ resume }) {

  return (

    <div
      id="resume-preview"
      className="executive-template"
    >

      <center>

        <h1>
          {resume.name}
        </h1>

        <h3>
          Executive Profile
        </h3>

      </center>

      <hr />

      <h2>
        Leadership Summary
      </h2>

      <p>
        {resume.summary}
      </p>

      <h2>
        Experience
      </h2>

      {
        resume.experience?.map(
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
                {exp.description}
              </p>
            </div>
          )
        )
      }

    </div>

  );

}

export default ExecutiveTemplate;

