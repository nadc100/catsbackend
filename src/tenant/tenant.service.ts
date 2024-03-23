import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TenantEntity } from './entities/tenant.entity';

@Injectable()
export class TenantService {
  constructor(@Inject('TENANT_REPOSITORY')private readonly tenantRepository: Repository<TenantEntity>) { }

  async create(tenant: TenantEntity): Promise<TenantEntity> {
      return await this.tenantRepository.save(tenant);
    }

  async findByTenantIdAndPrimaryKey(tenantId: number, primaryKey: number): Promise<TenantEntity> {
    return this.tenantRepository.findOne.arguments({ tenantId, originalPrimaryKey: primaryKey });
  }

  async findAll(): Promise<TenantEntity[]> {
    return await this.tenantRepository.find();
  }

  async findOne(tenantId: number): Promise<TenantEntity> {
    return await this.tenantRepository.findOne.arguments(tenantId);
  }

  async update(tenantId: number, tenant: TenantEntity): Promise<TenantEntity> {
    await this.tenantRepository.update(tenantId, tenant);
    return await this.tenantRepository.findOne.arguments(tenantId);
  }

  async remove(id: number): Promise<void> {
    await this.tenantRepository.delete(id);
  }
}


