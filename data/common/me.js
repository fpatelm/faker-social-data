import { faker } from '@faker-js/faker';

export default function me() { 

    let isStory = faker.datatype.boolean();
    let stories = [];
    if (isStory) { 
      for (let i = 0; i < faker.random.numeric(2); i++) {
        stories.push(faker.image.image());
      }
    }

    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        relationship:faker.helpers.arrayElement(['Single', 'Married', 'Divorced', 'Widowed', 'Cohabiting']),
        gender:faker.name.gender(true),
        job_title: faker.name.jobTitle(),
        job_area:faker.name.jobArea(),
        story: isStory,
        status: faker.lorem.words(),
        stories: stories
    };
}