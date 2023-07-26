import { Column, Entity } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';

@Entity()
export class Tag extends AbstractEntity<Tag> {
  @Column()
  content: string;

  @Column({ nullable: true })
  title: string;
}
