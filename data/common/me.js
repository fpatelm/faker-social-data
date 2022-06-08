var { faker } = require('faker')
const rdn_boolean = require("./index");
function get() {
    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        relationship:'Single',
        gender:faker.name.gender(true),
        job_title: faker.name.jobTitle(),
        job_area:faker.name.jobArea(),
        story: rdn_boolean.get(),
        status: faker.lorem.words()
    };
}
 
module.exports = { get };