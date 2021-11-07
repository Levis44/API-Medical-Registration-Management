import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtyModule } from './specialties/specialty.module';

require('dotenv/config');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      url: process.env.DB_URL,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_USERNAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/**/*.entity.js'],
    }),
    SpecialtyModule,
  ],
})
export class AppModule {}
