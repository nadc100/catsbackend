import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: Repository<UserEntity>) { }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }
  async findByUserIdAndPrimaryKey(UserId: number, primaryKey: number): Promise<UserEntity> {
    return this.userRepository.findOne.arguments({ UserId, originalPrimaryKey: primaryKey });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(userId: number): Promise<UserEntity> {
    return await this.userRepository.findOne.arguments(userId);
  }

  async update(userId: number, tenant: UserEntity): Promise<UserEntity> {
    await this.userRepository.update(userId, tenant);
    return await this.userRepository.findOne.arguments(userId);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
