import type { Role as APIRole, File as APIFile } from "stoat-api";

import type { Client } from "../Client.js";
import { File } from "./File.js";

// Extended type until stoat-api is regenerated with icon field
type APIRoleWithIcon = APIRole & { icon?: APIFile };

/**
 * Server Role
 */
export class ServerRole {
  protected client: Client;
  protected serverId: string;

  readonly id: string;
  readonly name: string;
  readonly permissions: {
    a: bigint,
    d: bigint
  };
  readonly colour?: string;
  readonly icon?: File;
  readonly hoist: boolean;
  readonly rank: number;

  /**
   * Construct server role
   * @param client Client
   * @param serverId Server ID
   * @param id Role ID
   * @param data Role data
   */
  constructor(client: Client, serverId: string, id: string, data: APIRoleWithIcon) {
    this.client = client;
    this.serverId = serverId;

    this.id = id;
    this.name = data.name;
    this.permissions = {
      a: BigInt(data.permissions.a),
      d: BigInt(data.permissions.d)
    };
    this.colour = data.colour ?? undefined;
    this.icon = data.icon ? new File(client, data.icon) : undefined;
    this.hoist = data.hoist || false;
    this.rank = data.rank ?? 0;
  }

  /**
   * Write to string as a role mention
   * @returns Formatted String
   */
  toString(): string {
    return `<%${this.id}>`;
  }

  /**
   * Server attached to this role
   */
  get server() {
    return this.client.servers.get(this.serverId);
  }

  /**
   * Whether this role is assigned to our server member
   */
  get assigned() {
    return this.server?.member?.roles.includes(this.id) || false;
  }

  /**
   * Delete this role
   */
  delete() {
    return this.server!.deleteRole(this.id);
  }
}
