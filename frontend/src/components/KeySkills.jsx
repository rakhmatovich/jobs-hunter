import React from "react";
import ReplyDetail from "../pages/ReplyDetail";
const defaultSkills = [
  { id: 1, name: "Frontend Developer" },
  { id: 2, name: "Backend Developer" },
  { id: 3, name: "Jango Developer" },
  { id: 4, name: "Python Developer" },
  { id: 5, name: "Unity Developer" },
  { id: 6, name: "Unreal Engine Developer" },
];
const KeySkills = () => {
  const [skills, setSkills] = useState(defaultSkills);
  return (
    <div>
      {skills &&
        skills.map((skill) => <ReplyDetail id={skill.id} name={skill.name} />)}
    </div>
  );
};

export default KeySkills;
