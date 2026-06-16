
import ModernTemplate from "../templates/ModernTemplate";
import CorporateTemplate from "../templates/CorporateTemplate";
import DeveloperTemplate from "../templates/DeveloperTemplate";
import CreativeTemplate from "../templates/CreativeTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import ExecutiveTemplate from "../templates/ExecutiveTemplate";

function ResumePreview({
  resume,
  template
}) {

  switch(template){

    case "modern":
      return (
        <ModernTemplate
          resume={resume}
        />
      );

    case "corporate":
      return (
        <CorporateTemplate
          resume={resume}
        />
      );

    case "developer":
      return (
        <DeveloperTemplate
          resume={resume}
        />
      );

    case "creative":
      return (
        <CreativeTemplate
          resume={resume}
        />
      );

    case "minimal":
      return (
        <MinimalTemplate
          resume={resume}
        />
      );

    case "executive":
      return (
        <ExecutiveTemplate
          resume={resume}
        />
      );

    default:
      return (
        <ModernTemplate
          resume={resume}
        />
      );
  }

}

export default ResumePreview;

