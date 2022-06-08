import { faker } from '@faker-js/faker';
import {rdn_boolean } from './index.js'

export default function me() { 
    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        relationship:'Single',
        gender:faker.name.gender(true),
        job_title: faker.name.jobTitle(),
        job_area:faker.name.jobArea(),
        story: rdn_boolean(),
        status: faker.lorem.words()
    };
}