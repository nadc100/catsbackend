import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { DatabaseModule } from 'src/database/database.module';
import { tenantProviders } from './tenant.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TenantController],
  providers: [
    ...tenantProviders,
    TenantService],
})
export class TenantModule {}
