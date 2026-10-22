import data from './data/experience.json';

export const getExperiences = () => {
  return data;
};

export default (req, res) => {
  res.json(data);
};
