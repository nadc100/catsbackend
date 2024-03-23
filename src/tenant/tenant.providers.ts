import { DataSource } from 'typeorm';
import { TenantEntity } from './entities/tenant.entity';

export const tenantProviders = [
  {
    provide: 'TENANT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TenantEntity),
    inject: ['DATA_SOURCE'],
  },
];