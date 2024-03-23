import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Unique } from 'typeorm';

@Entity()
@Unique(["tenantId", "originalPrimaryKey"])
export class TenantEntity {
  @PrimaryGeneratedColumn()
  originalPrimaryKey: Number;

  @Column()
  tenantId: Number;
}
