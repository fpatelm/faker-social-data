import { faker } from '@faker-js/faker';
import {rdn_boolean } from '../common/index.js'
export function people() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      firstName: faker.name.firstName(),
      lastName:faker.name.lastName(),
      msg: faker.lorem.sentence(15),
      date: faker.date.month(),
      count: faker.random.numeric(),
      story: rdn_boolean(),
      image: faker.image.fashion(),
      avatar: faker.image.avatar(),
      status: faker.lorem.words()
    });
  }
  return reply;
}