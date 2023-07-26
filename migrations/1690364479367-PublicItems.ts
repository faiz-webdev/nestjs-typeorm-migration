import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1690364479367 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1690364479367.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('UP');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
  }
}
