import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Start {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
