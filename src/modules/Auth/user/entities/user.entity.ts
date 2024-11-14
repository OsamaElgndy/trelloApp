import { SALT_ROUND } from 'src/common/constants/constants';

import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn } from 'typeorm';
import * as bcrypt from 'bcrypt'
import {  ActiveToken } from './activeToken.entity';
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



  @OneToOne(() => ActiveToken, (profile) => profile.user)
  @JoinColumn()
  activeToken: ActiveToken;

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

 