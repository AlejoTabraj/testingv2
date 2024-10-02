import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { Neo4jModule } from 'src/neo4j/neo4j.module';

@Module({
  imports: [Neo4jModule],
  controllers: [
    TenantController],
  providers: [TenantService],
})
export class TenantModule {}
