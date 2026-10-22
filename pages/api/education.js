import data from './data/education.json';

export const getEducation = () => {
  return data;
};

export default (req, res) => {
  res.json(data);
};
