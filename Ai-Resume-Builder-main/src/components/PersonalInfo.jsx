
function PersonalInfo({ resume, setResume }) {

  return (
    <div className="card">

      <h2>👤 Personal Information</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={resume.name}
        onChange={(e) =>
          setResume({
            ...resume,
            name: e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        value={resume.email}
        onChange={(e) =>
          setResume({
            ...resume,
            email: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={resume.phone}
        onChange={(e) =>
          setResume({
            ...resume,
            phone: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Location"
        value={resume.location}
        onChange={(e) =>
          setResume({
            ...resume,
            location: e.target.value
          })
        }
      />

    </div>
  );
}

export default PersonalInfo;
