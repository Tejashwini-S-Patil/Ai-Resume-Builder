
function Projects({ resume, setResume }) {

  const addProject = () => {

    setResume({
      ...resume,
      projects: [
        ...(resume.projects || []),
        {
          name: "",
          tech: "",
          description: "",
          github: ""
        }
      ]
    });

  };

  const updateProject = (
    index,
    field,
    value
  ) => {

    const updated =
      [...resume.projects];

    updated[index][field] =
      value;

    setResume({
      ...resume,
      projects: updated
    });

  };

  const removeProject = (
    index
  ) => {

    const updated =
      resume.projects.filter(
        (_, i) =>
          i !== index
      );

    setResume({
      ...resume,
      projects: updated
    });

  };

  return (

    <div className="card">

      <h2>
        🚀 Projects
      </h2>

      <button
        onClick={addProject}
      >
        + Add Project
      </button>

      {
        (resume.projects || [])
        .map(
          (
            project,
            index
          ) => (

            <div
              key={index}
              className="education-card"
            >

              <input
                placeholder="Project Name"
                value={
                  project.name
                }
                onChange={(e)=>
                  updateProject(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Technologies"
                value={
                  project.tech
                }
                onChange={(e)=>
                  updateProject(
                    index,
                    "tech",
                    e.target.value
                  )
                }
              />

              <textarea
                placeholder="Description"
                value={
                  project.description
                }
                onChange={(e)=>
                  updateProject(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Github Link"
                value={
                  project.github
                }
                onChange={(e)=>
                  updateProject(
                    index,
                    "github",
                    e.target.value
                  )
                }
              />

              <button
                onClick={() =>
                  removeProject(
                    index
                  )
                }
              >
                Remove
              </button>

            </div>

          )
        )
      }

    </div>

  );

}

export default Projects;

