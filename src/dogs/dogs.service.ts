let id = 1;
const dogs = [
  {
    id: id++,
    name: 'Snow White',
    image: 'https://placedog.net/500/500?id=152',
    reward: 1000000,
  },

  {
    id: id++,
    name: 'Billy The Doggo',
    image: 'https://placedog.net/500/500',
    reward: 1250000,
  },

  {
    id: id++,
    name: 'The Doglaw Twins',
    image: 'https://placedog.net/500/500?id=2',
    reward: 500000,
  },

  {
    id: id++,
    name: 'Mr. Dutch',
    image: 'https://placedog.net/500/500?id=174',
    reward: 250000000,
  },
];

export class DogsService {
  getAll() {
    return dogs;
  }

  getById(id: string) {
    return dogs.find((dog) => Number(dog.id) === Number(id));
  }

  createDog(body: any) {
    const newDog = { ...body, id: id++ };

    if (newDog.name && newDog.reward && newDog.image) {
      dogs.push(newDog);

      return newDog;
    }

    return {};
  }
}
