import { Controller, Get, Post, Body, Patch, Param, Delete , Put} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantEntity } from './entities/tenant.entity';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  create(@Body() tenant: TenantEntity): Promise<TenantEntity> {
    return this.tenantService.create(tenant);
  }

  @Get()
  findAll(): Promise<TenantEntity[]> {
    return this.tenantService.findAll();
  }

  @Get('tenantId')
  findOnebyTenantId(@Param('tenantId') tenantId: number):Promise<TenantEntity>{
    return this.tenantService.findByTenantIdAndPrimaryKey.arguments(tenantId)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TenantEntity> {
    return this.tenantService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tenant: TenantEntity): Promise<TenantEntity> {
    return this.tenantService.update(Number(id), tenant);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tenantService.remove(Number(id));
  }
}
