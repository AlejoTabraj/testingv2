import { Injectable } from '@nestjs/common';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { Neo4jService } from 'src/neo4j/neo4j.service';

@Injectable()
export class TenantService {

  constructor(
    private readonly neo4jService: Neo4jService
  ){
  }
  create(createTenant) {
    return 'This action adds a new tenant';
  }

  async findAll() {
    const result = await this.neo4jService.read('MATCH (n) RETURN count(n) AS count', {})
    const count = result.records[0].get('count')
    return count;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
