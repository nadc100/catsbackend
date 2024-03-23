import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { join } from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { TypedEventEmitterModule } from 'src/event-emitter/typed-event-emitter.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: '<host>',
        port: Number('<port>'),
        secure: false,
        auth: {
          user: '<username>',
          pass: '<password>',
        },
      },
      defaults: {
        from: '"From Name" <from@example.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    TypedEventEmitterModule,
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule { }
