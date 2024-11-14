import { SALT_ROUND } from 'src/common/constants/constants';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'
@Entity()

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isActive: boolean;
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({length: 5 , nullable: true})
  codeOTP?: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, +SALT_ROUND);
  }

  async validatePassword(password: string): Promise<boolean> {
    console.log(password, "Password ")
    return await bcrypt.compare(password, this.password
      
    );
  }

 }