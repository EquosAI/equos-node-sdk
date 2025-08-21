export interface EquosSessionData {
  id: string;
  name: string;
  provider: string;
  status: string;
  client?: string;
  host: {
    serverUrl: string;
  };
  avatar: {
    id: string;
    identity?: string;
    name?: string;
    thumbnailUrl?: string;
    createdAt: Date;
    updatedAt: Date;
  };
  agent?: {
    instructions: string;
  };
  startedAt: Date;
  endedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEquosSessionRequestData {
  name: string;

  client?: string;

  host?: {
    serverUrl: string;
    accessToken: string;
  };

  agent?: {
    instructions: string;
  };

  avatar: {
    id?: string;
    identity?: string;
    name?: string;
    refImage?: string;
  };

  remoteAgentConnectingIdentity?: {
    identity: string;
    name: string;
  };

  consumerIdentity?: {
    identity: string;
    name: string;
  };
}

export interface CreateEquosSessionResponseData {
  session: EquosSessionData;
  consumerAccessToken?: string;
  remoteAgentAccessToken?: string;
}

export interface ListEquosSessionsData {
  skip: number;
  take: number;
  total: number;
  sessions: EquosSessionData[];
}
