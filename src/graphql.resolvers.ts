import { DogsService } from './dogs/dogs.service';

const dogsService = new DogsService();

export const resolvers = {
  Query: {
    dogs: () => dogsService.getAll(),
    dog: (_, args: any) => dogsService.getById(args.id),
  },

  Mutation: {
    createDog: (_, args: any) => dogsService.createDog(args),
  },
};
