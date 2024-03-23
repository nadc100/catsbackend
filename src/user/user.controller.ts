import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { TypedEventEmitter } from 'src/event-emitter/typed-event-emitter';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,private readonly eventEmitter: TypedEventEmitter) {}

  @Post('sign-up')
  async createlogin(@Body() body) {
    this.eventEmitter.emit('user.welcome', {
      name: 'empresa fiap',
      email: body.email,
    });

    this.eventEmitter.emit('user.verify-email', {
      name: 'empresa fiap',
      email: body.email,
      otp: '****', // generate a random OTP
    });

    return this.userService.create(body);
  }


  @Post()
  create(@Body() user: UserEntity): Promise<UserEntity> {
    return this.userService.create(user);
  }
 
  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get('userId')
  findOnebyUserId(@Param('UserId') UserId: number):Promise<UserEntity>{
    return this.userService.findByUserIdAndPrimaryKey.arguments(UserId)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() User: UserEntity): Promise<UserEntity> {
    return this.userService.update(Number(id), User);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(Number(id));
  }
}
