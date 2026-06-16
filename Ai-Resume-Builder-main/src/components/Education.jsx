import React from "react";

function Education({ resume, setResume }) {

  const addEducation = () => {

    setResume({
      ...resume,
      education: [
        ...(resume.education || []),
        {
          college: "",
          degree: "",
          cgpa: "",
          year: ""
        }
      ]
    });

  };

  const updateEducation = (index, field, value) => {

    const updated = [...resume.education];

    updated[index][field] = value;

    setResume({
      ...resume,
      education: updated
    });

  };

  const removeEducation = (index) => {

    const updated =
      resume.education.filter(
        (_, i) => i !== index
      );

    setResume({
      ...resume,
      education: updated
    });

  };

  return (
    <div className="card">

      <h2>🎓 Education</h2>

      <button onClick={addEducation}>
        + Add Education
      </button>

      {(resume.education || []).map(
        (edu, index) => (

          <div
            key={index}
            className="education-card"
          >

            <input
              type="text"
              placeholder="College Name"
              value={edu.college}
              onChange={(e) =>
                updateEducation(
                  index,
                  "college",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                updateEducation(
                  index,
                  "degree",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="CGPA / Percentage"
              value={edu.cgpa}
              onChange={(e) =>
                updateEducation(
                  index,
                  "cgpa",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Passing Year"
              value={edu.year}
              onChange={(e) =>
                updateEducation(
                  index,
                  "year",
                  e.target.value
                )
              }
            />

            <button
              onClick={() =>
                removeEducation(index)
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

export default Education;