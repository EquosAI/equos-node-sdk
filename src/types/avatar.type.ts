import { CreateEquosAgentRequest, EquosAgent } from './agent.type';

export interface CreateEquosAvatarRequest {
  identity: string;
  name: string;
  refImage: string;
  agentId?: string;
  agent?: CreateEquosAgentRequest;
}

export interface EquosAvatar {
  id: string;
  organizationId: string;
  identity: string;
  name: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;

  agentId?: string;
  agent?: EquosAgent;
}

export interface ListEquosAvatarsResponse {
  skip: number;
  take: number;
  total: number;
  avatars: EquosAvatar[];
}
