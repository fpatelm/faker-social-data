var { faker } = require("@faker-js/faker");
const rdn_boolean = require("../common/index");
function get() {
  let reply = { message: [] };
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.message.push({
      msg: faker.lorem.sentence(20),
      image: faker.image.nightlife(),
      sender: rdn_boolean.get(),
      type: faker.system.commonFileType(),
      opened: rdn_boolean.get(),
    });
  }
  reply.firstName = faker.name.firstName();
  reply.lastName = faker.name.lastName();
  reply.status = faker.lorem.words();
  reply.avatar = faker.image.avatar();
  reply.count = faker.random.numeric();
  return reply;
}

module.exports = { get };
