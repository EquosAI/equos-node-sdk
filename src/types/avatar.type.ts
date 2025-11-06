import { EquosAgent } from './agent.type';

export interface CreateEquosAvatarRequest {
  identity: string;
  name: string;
  refImage: string;
  client?: string | null;
  agentId?: string | null;
}

export interface EquosAvatar {
  id: string;
  organizationId: string;
  identity: string;
  name: string;
  description: string;
  client?: string;
  thumbnailUrl: string;
  agentId?: string;
  agent?: EquosAgent | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListEquosAvatarsResponse {
  skip: number;
  take: number;
  total: number;
  avatars: EquosAvatar[];
}

export interface UpdateEquosAvatarRequest
  extends Omit<CreateEquosAvatarRequest, 'refImage'> {
  id: string;
  organizationId: string;
}
