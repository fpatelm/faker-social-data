import { faker } from '@faker-js/faker';
export function chats() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.avatar(),
      msg: faker.lorem.sentence(3),
      date: faker.date.month(),
      count: faker.random.numeric(),
      story: faker.datatype.boolean(),
      opened: faker.datatype.boolean(),
      type: faker.system.commonFileType(),
    });
  }
  return reply;
}
