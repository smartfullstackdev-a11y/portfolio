import data from './data/skills.json';

export const getSkills = () => {
  return data;
};

export default (req, res) => {
  const skills = getSkills();
  res.json(skills);
};
