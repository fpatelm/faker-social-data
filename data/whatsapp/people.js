import { faker } from '@faker-js/faker';
import {rdn_boolean } from '../common/index.js'
export function people() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    let isStory = rdn_boolean();
    let stories = [];
    if (isStory) { 
      for (let i = 0; i < faker.random.numeric(2); i++) {
        stories.push(faker.image.image());
      }
    }
    reply.push({
      firstName: faker.name.firstName(),
      lastName:faker.name.lastName(),
      msg: faker.lorem.sentence(15),
      date: faker.date.month(),
      count: faker.random.numeric(),
      story: isStory,
      image: faker.image.image(),
      avatar: faker.image.avatar(),
      status: faker.lorem.words(),
      stories:stories
    });
  }
  return reply;
}