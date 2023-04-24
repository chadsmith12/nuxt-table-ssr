import { Person } from '~/types/person';
import { faker } from '@faker-js/faker';

export function generatePeople(numberOfValues: number): Person[] {
  const people = new Array<Person>(numberOfValues);

  for (let i = 0; i < people.length; ++i) {
    people[i] = {
      id: faker.datatype.uuid().toString(),
      firstName: faker.name.firstName(),
      startTime: faker.date.soon(),
    };
  }

  return people;
}
