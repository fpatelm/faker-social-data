var { faker } = require("faker");
const rdn_boolean = require("../common/index");
function get() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      date: faker.date.month(),
      outbound: rdn_boolean.get(),
      type: faker.system.commonFileType(),
    });
  }
  return reply;
}

module.exports = { get };
