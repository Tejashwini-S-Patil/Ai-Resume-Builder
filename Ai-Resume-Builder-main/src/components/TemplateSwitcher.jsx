function TemplateSwitcher({
  template,
  setTemplate
}) {

  const templates = [

    "modern",
    "corporate",
    "developer",
    "creative",
    "minimal",
    "executive"

  ];

  return (

    <div className="card">

      <h2>
        🎨 Resume Templates
      </h2>

      <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          gap:"10px"
        }}
      >

        {
          templates.map(
            (item)=>(
              <button
                key={item}
                onClick={()=>
                  setTemplate(item)
                }
              >
                {item}
              </button>
            )
          )
        }

      </div>

    </div>

  );

}

export default TemplateSwitcher;