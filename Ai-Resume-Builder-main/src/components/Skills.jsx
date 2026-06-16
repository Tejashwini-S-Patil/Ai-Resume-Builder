
import { useState } from "react";

function Skills({ resume, setResume }) {

  const [skill,setSkill] = useState("");

  const addSkill = () => {

    if(!skill.trim()) return;

    setResume({
      ...resume,
      skills:[
        ...resume.skills,
        skill
      ]
    });

    setSkill("");
  };

  const removeSkill = (index) => {

    const updatedSkills =
    resume.skills.filter(
      (_,i) => i !== index
    );

    setResume({
      ...resume,
      skills:updatedSkills
    });

  };

  return (

    <div className="card">

      <h2>💻 Skills</h2>

      <input
        type="text"
        placeholder="Enter Skill"
        value={skill}
        onChange={(e)=>
          setSkill(e.target.value)
        }
      />

      <button onClick={addSkill}>
        Add Skill
      </button>

      <br /><br />

      {
        resume.skills.map(
        (item,index)=>(

          <button
            key={index}
            onClick={()=>
              removeSkill(index)
            }
            style={{
              margin:"5px"
            }}
          >
            {item} ❌
          </button>

        ))
      }

    </div>

  );

}

export default Skills;

