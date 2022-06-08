import { faker } from '@faker-js/faker';
import {rdn_boolean } from '../common/index.js'
export function message() {
  let reply = { message: [] };
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.message.push({
      msg: faker.lorem.sentence(20),
      image: faker.image.nightlife(),
      sender: rdn_boolean(),
      type: faker.system.commonFileType(),
      opened: rdn_boolean(),
    });
  }
  reply.firstName = faker.name.firstName();
  reply.lastName = faker.name.lastName();
  reply.status = faker.lorem.words();
  reply.avatar = faker.image.avatar();
  reply.count = faker.random.numeric();
  return reply;
}
