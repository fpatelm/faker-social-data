import { faker } from '@faker-js/faker';
import {rdn_boolean } from '../common/index.js'
export function chats() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar(),
      msg: faker.lorem.sentence(15),
      date: faker.date.month(),
      count: faker.random.numeric(),
      story: rdn_boolean(),
      opened: rdn_boolean(),
      type: faker.system.commonFileType(),
    });
  }
  return reply;
}
