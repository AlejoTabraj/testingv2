// user.entity.ts
import { Node } from 'neo4j-driver';
import { IUser } from '../interfaces/user.interfaces';

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;

  constructor(node: Node) {
    this.id = node.properties.id;
    this.name = node.properties.name;
    this.email = node.properties.email;
    this.createdAt = new Date(node.properties.createdAt);
  }

  static fromNode(node: Node): User {
    return new User(node);
  }

  toJson(): IUser {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
  }
}