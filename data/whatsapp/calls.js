import { faker } from '@faker-js/faker';
import {rdn_boolean } from '../common/index.js'
export function calls() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar(),
      date: faker.date.month(),
      outbound: faker.helpers.arrayElement(['Missed', 'Incoming', 'Outgoing']),
      count: faker.random.numeric(),
      type: faker.system.commonFileType(),
    });
  }
  return reply;
}
