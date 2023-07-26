import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Item } from 'src/items/entities/item.entity';
import { Tag } from 'src/items/entities/tag.entity';
import { Listing } from 'src/items/entities/listing.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
  migrations: ['migrations/**'],
  entities: [Item, Tag, Listing, Comment],
});
