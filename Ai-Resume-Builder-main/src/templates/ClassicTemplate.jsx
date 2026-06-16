function ClassicTemplate({
  resume
}) {

  return (

    <div>

      <center>

        <h1>
          {resume.name}
        </h1>

        <p>
          {resume.email}
        </p>

      </center>

    </div>

  );

}

export default ClassicTemplate;