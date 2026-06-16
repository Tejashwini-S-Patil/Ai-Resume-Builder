
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./styles/app.css";

import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import ATSCard from "./components/ATSCard";
import SummaryGenerator from "./components/SummaryGenerator";
import ThemeToggle from "./components/ThemeToggle";
import TemplateSwitcher from "./components/TemplateSwitcher";
import ResumePreview from "./components/ResumePreview";

function App() {

  // Theme
  const [darkMode, setDarkMode] =
    useState(false);

  // Template
  const [template, setTemplate] =
    useState("modern");

  // Resume Data
  const [resume, setResume] =
    useState({

      name: "",
      email: "",
      phone: "",
      location: "",

      summary: "",

      skills: [],

      education: [],

      experience: [],

      projects: []

    });

  // PDF Download

  const downloadPDF = async () => {

    try {

      const element =
        document.getElementById(
          "resume-preview"
        );

      if (!element) {

        alert(
          "Resume Preview Not Found"
        );

        return;

      }

      const canvas =
        await html2canvas(
          element,
          {
            scale: 2
          }
        );

      const imgData =
        canvas.toDataURL(
          "image/png"
        );

      const pdf =
        new jsPDF(
          "p",
          "mm",
          "a4"
        );

      const pageWidth =
        210;

      const pageHeight =
        (canvas.height *
          pageWidth) /
        canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pageWidth,
        pageHeight
      );

      pdf.save(
        `${resume.name || "Resume"}.pdf`
      );

    }

    catch (error) {

      console.error(error);

      alert(
        "PDF Download Failed"
      );

    }

  };

  return (

    <div
      className={
        darkMode
          ? "container dark"
          : "container"
      }
    >

      {/* HEADER */}

      <h1 className="title">
        🚀 AI Resume Builder
      </h1>

      {/* TOP CONTROLS */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}
      >

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <button
          onClick={downloadPDF}
        >
          📄 Download PDF
        </button>

      </div>

      {/* MAIN LAYOUT */}

      <div className="layout">

        {/* LEFT PANEL */}

        <div className="left-panel">

          <PersonalInfo
            resume={resume}
            setResume={setResume}
          />

          <SummaryGenerator
            resume={resume}
            setResume={setResume}
          />

          <Skills
            resume={resume}
            setResume={setResume}
          />

          <Education
            resume={resume}
            setResume={setResume}
          />

          <Experience
            resume={resume}
            setResume={setResume}
          />

          <Projects
            resume={resume}
            setResume={setResume}
          />

        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">

          <ATSCard
            resume={resume}
          />

          <TemplateSwitcher
            template={template}
            setTemplate={setTemplate}
          />

          <ResumePreview
            resume={resume}
            template={template}
          />

        </div>

      </div>

    </div>

  );

}

export default App;

