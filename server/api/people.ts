import { generatePeople } from '../utils/generatePeople';

export default defineEventHandler(() => {
  const people = generatePeople(30);

  return people;
});
