
function MinimalTemplate({ resume }) {

  return (

    <div
      id="resume-preview"
      className="minimal-template"
    >

      <h1>
        {resume.name}
      </h1>

      <p>
        {resume.email}
      </p>

      <p>
        {resume.phone}
      </p>

      <hr />

      <p>
        {resume.summary}
      </p>

      <hr />

      <h3>
        Skills
      </h3>

      {
        resume.skills?.map(
          (skill,index)=>(
            <p key={index}>
              {skill}
            </p>
          )
        )
      }

    </div>

  );

}

export default MinimalTemplate;

