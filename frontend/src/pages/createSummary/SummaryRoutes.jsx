import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Works from "./Works";
import SummaryDetails from "./SummaryDetails";
import Education from "./Education";
import EducationInformation from "./EducationInformation";
import Final from "./Final";
import Skills from "./Skills";

export default function SummaryRoutes() {
  const [jobName, setJobName] = useState(localStorage.getItem('job-name') ||"");

  useEffect(() => localStorage.setItem('job-name', jobName), [jobName])

  return (
    <Routes>
      <Route path="choose-job" element={<Works setJobName={setJobName} />} />
      <Route path="detail" element={<SummaryDetails jobName={jobName} />} />
      <Route path="education" element={<Education jobName={jobName} />} />
      <Route path="educationinfo" element={<EducationInformation jobName={jobName} />} />
      <Route path="final" element={<Final jobName={jobName} />} />
      <Route path="skills" element={<Skills jobName={jobName} />} />
    </Routes>
  );
}
