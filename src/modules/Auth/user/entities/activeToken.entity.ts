import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class ActiveToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:false})
  token: boolean;




  // use glable Gards
  async valditonsToken(codeToken: string): Promise<boolean> {
    return   codeToken === this.codeToken
  }

  @PrimaryColumn()
  userId: number;


  @OneToOne(() => User, user)
  user: User;

  @Column({default: null})
  codeToken: string
}