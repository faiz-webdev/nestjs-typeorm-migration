import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Itemtest1690368515407 implements MigrationInterface {
  private readonly logger = new Logger(Itemtest1690368515407.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('UP');
    await queryRunner.query('UPDATE item SET public = 0');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
  }
}
