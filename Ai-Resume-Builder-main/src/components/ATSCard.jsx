function ATSCard({ resume }) {

  let score = 0;

  if (resume.name) score += 10;
  if (resume.email) score += 10;
  if (resume.phone) score += 10;
  if (resume.location) score += 10;

  if (resume.summary) score += 15;
  if (resume.skills?.length) score += 15;
  if (resume.education?.length) score += 10;
  if (resume.experience?.length) score += 10;
  if (resume.projects?.length) score += 10;

  return (
    <div className="card">
      <h2>🎯 ATS Score</h2>

      <h1
        style={{
          color:
            score >= 80
              ? "green"
              : score >= 60
              ? "orange"
              : "red"
        }}
      >
        {score}%
      </h1>
    </div>
  );
}

export default ATSCard;