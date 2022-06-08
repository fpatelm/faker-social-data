var { faker } = require("@faker-js/faker");
const rdn_boolean = require("../common/index");
function get() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      msg: faker.lorem.sentence(15),
      date: faker.date.month(),
      count: faker.random.numeric(),
      story: rdn_boolean.get(),
      opened: rdn_boolean.get(),
      type: faker.system.commonFileType(),
    });
  }
  return reply;
}

module.exports = { get };
