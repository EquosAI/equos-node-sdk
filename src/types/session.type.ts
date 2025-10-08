import { CreateEquosAgentRequest, EquosAgent } from './agent.type';
import { CreateEquosAvatarRequest, EquosAvatar } from './avatar.type';

export interface EquosParticipantIdentity {
  identity: string;
  name: string;
}

export interface CreateEquosSessionRequest {
  name: string;
  client?: string;
  host?: {
    serverUrl: string;
    accessToken: string;
  };
  agent?: { id: string } | CreateEquosAgentRequest;
  avatar: { id: string } | CreateEquosAvatarRequest;
  remoteAgentConnectingIdentity?: EquosParticipantIdentity;
  consumerIdentity?: EquosParticipantIdentity;
  maxDuration?: number;
}

export interface EquosSession {
  id: string;
  organizationId: string;
  freemium: boolean;
  name: string;
  provider: string;
  client?: string;
  status: string;
  host: {
    serverUrl: string;
  };
  avatarId: string;
  avatar: EquosAvatar;
  agentId?: string;
  agent?: EquosAgent;
  maxDuration?: number;
  startedAt: Date;
  endedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEquosSessionResponse {
  session: EquosSession;
  consumerAccessToken?: string;
  remoteAgentAccessToken?: string;
}

export interface ListEquosSessionsResponse {
  skip: number;
  take: number;
  total: number;
  sessions: EquosSession[];
}
