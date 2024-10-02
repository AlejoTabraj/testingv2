import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './neo4j/neo4j.module';
import { TenantModule } from './tenant/tenant.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { Neo4jConfig } from './neo4j-config/neo4j-config.interface';


@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j+s',
      host: '3fab3055.databases.neo4j.io',
      port: 7687,
      username: 'neo4j',
      password: '1Pq6mj9SjQcMvsPVzEVfxMo79IHO23yZjeSZL7y0VuA'
    } as Neo4jConfig),
    TenantModule,
    UserModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
