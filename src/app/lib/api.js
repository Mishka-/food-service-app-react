import Faker from 'faker/lib';
import FakerEnglishLocales from 'faker/lib/locales/en';
import Promise from 'bluebird';

const faker = new Faker({
  locales: {
    en: FakerEnglishLocales,
  },
});

const data = [];

for (let i = 0; i < 9; i++) {
  const id = i + 1;

  data.push({
    id,
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    image: `//lorempixel.com/640/480/food/${id}/`,
    price: Number(faker.commerce.price()),
  });
}

export const getData = () => {
  return new Promise(resolve => {
    setTimeout(() => { resolve(data); }, 250);
  });
};
