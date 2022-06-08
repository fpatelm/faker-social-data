var { faker } = require("faker");
const rdn_boolean = require("../common/index");
function get() {
  let reply = [];
  for (let i = 0; i < faker.random.numeric(2); i++) {
    reply.push({
      firstName: faker.name.firstName(),
      lastName:faker.name.lastNam(),
      msg: faker.lorem.sentence(15),
      date: faker.date.month(),
      count: faker.random.numeric(),
      story: rdn_boolean.get(),
      image: faker.image.fashion(),
      avatar: faker.image.avatar(),
      status: faker.lorem.words()
    });
  }
  return reply;
}

module.exports = { get };
