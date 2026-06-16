
import { summaries } from "../data/summaries";

function SummaryGenerator({
  resume,
  setResume
}) {

  const generateSummary = () => {

    const skills =
      (resume.skills || [])
      .join(" ")
      .toLowerCase();

    let summary =
      "Dedicated Software Developer with strong problem-solving abilities and a passion for building scalable applications.";

    const skillKeys = [
      "java",
      "python",
      "react",
      "sql",
      "javascript"
    ];

    for (const skill of skillKeys) {

      if (skills.includes(skill)) {

        summary =
          summaries[skill][
            Math.floor(
              Math.random() *
              summaries[skill].length
            )
          ];

        break;
      }
    }

    setResume({
      ...resume,
      summary
    });

  };

  return (

    <div className="card">

      <h2>
        🤖 AI Summary
      </h2>

      <button
        onClick={generateSummary}
      >
        Generate Summary
      </button>

    </div>

  );

}

export default SummaryGenerator;

