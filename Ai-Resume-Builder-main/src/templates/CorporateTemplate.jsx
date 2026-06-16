
function CorporateTemplate({ resume }) {

  return (

    <div
      id="resume-preview"
      className="corporate-template"
    >

      <div className="corp-sidebar">

        <h1>
          {resume.name}
        </h1>

        <p>{resume.email}</p>
        <p>{resume.phone}</p>
        <p>{resume.location}</p>

        <hr />

        <h3>Skills</h3>

        {
          resume.skills?.map(
            (skill,index)=>(
              <p key={index}>
                • {skill}
              </p>
            )
          )
        }

      </div>

      <div className="corp-main">

        <h2>
          Professional Summary
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
              <div key={index}>
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            )
          )
        }

      </div>

    </div>

  );

}

export default CorporateTemplate;

