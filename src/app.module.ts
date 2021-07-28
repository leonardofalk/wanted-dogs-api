import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { resolvers } from './graphql.resolvers';

@Module({
  imports: [
    DogsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      resolvers,
      debug: true,
      playground: true,
    }),
  ],
})
export class AppModule {}
