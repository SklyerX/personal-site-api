import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './modules/skills/skills.module';
import { TestimonialsModule } from './modules/testimonials/testimonials.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { BlogsModule } from './modules/blogs/blogs.module';
require('dotenv').config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      debug: false,
      playground: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    SkillsModule,
    TestimonialsModule,
    ProjectsModule,
    BlogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
