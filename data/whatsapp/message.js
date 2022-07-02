import { faker } from '@faker-js/faker';
import {videos } from '../common/index.js'
export function message() {
  let reply = { message: [] };
  for (let i = 0; i < faker.random.numeric(2); i++) {
    let type = faker.helpers.arrayElement(['text','image', 'youtube']);
    let msg;
    switch (type) {
      case 'image':
        msg = faker.image.image();
        break;
      case 'youtube':
        msg = `https://www.youtube.com/watch?v=${videos()}`;
        break;
      case 'text':
        msg = faker.lorem.sentence(20);
        break;
    }
    reply.message.push({
      msg: msg,
      image: faker.image.nightlife(),
      sender: faker.datatype.boolean(),
      type: type,
      opened: faker.datatype.boolean(),
    });
  }
  reply.firstName = faker.name.firstName();
  reply.lastName = faker.name.lastName();
  reply.status = faker.lorem.words();
  reply.avatar = faker.image.avatar();
  reply.count = faker.random.numeric();
  return reply;
}
