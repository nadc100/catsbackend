import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,Unique } from 'typeorm';
import { IsEmail, IsOptional, IsPhoneNumber, IsNumberString } from 'class-validator';

@Entity()
@Unique(["userid"])
export class UserEntity{

  @PrimaryGeneratedColumn()
  userid: Number;

  @Column()
  @IsEmail()
  email: String;

  @Column({ type: 'bigint', nullable: true })
  @IsOptional()
  @IsNumberString()
  smartphone: String;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}