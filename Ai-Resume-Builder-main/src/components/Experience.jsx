import React from "react";

function Experience({ resume, setResume }) {

  const addExperience = () => {

    setResume({
      ...resume,
      experience: [
        ...(resume.experience || []),
        {
          company: "",
          role: "",
          duration: "",
          description: ""
        }
      ]
    });

  };

  const updateExperience = (
    index,
    field,
    value
  ) => {

    const updated =
      [...resume.experience];

    updated[index][field] = value;

    setResume({
      ...resume,
      experience: updated
    });

  };

  const removeExperience = (
    index
  ) => {

    const updated =
      resume.experience.filter(
        (_, i) => i !== index
      );

    setResume({
      ...resume,
      experience: updated
    });

  };

  return (
    <div className="card">

      <h2>💼 Experience</h2>

      <button
        onClick={addExperience}
      >
        + Add Experience
      </button>

      {(resume.experience || []).map(
        (exp, index) => (

          <div
            key={index}
            className="education-card"
          >

            <input
              type="text"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e)=>
                updateExperience(
                  index,
                  "company",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Role"
              value={exp.role}
              onChange={(e)=>
                updateExperience(
                  index,
                  "role",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e)=>
                updateExperience(
                  index,
                  "duration",
                  e.target.value
                )
              }
            />

            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e)=>
                updateExperience(
                  index,
                  "description",
                  e.target.value
                )
              }
            />

            <button
              onClick={() =>
                removeExperience(index)
              }
            >
              Remove
            </button>

          </div>
        )
      )}

    </div>
  );
}

export default Experience;