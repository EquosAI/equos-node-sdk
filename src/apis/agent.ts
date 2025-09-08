import { HttpUtils } from '../utils/http.utils';
import { ErrorUtils } from '../utils/error.utils';
import {
  CreateEquosAgentRequest,
  EquosAgent,
  ListEquosAgentsResponse,
} from '../types/agent.type';

export class EquosAgentApi {
  constructor(private readonly http: HttpUtils) {}

  async create(data: CreateEquosAgentRequest): Promise<EquosAgent> {
    return this.http
      .post<CreateEquosAgentRequest, EquosAgent>('/agents', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(skip = 0, take = 10): Promise<ListEquosAgentsResponse> {
    return this.http
      .get<ListEquosAgentsResponse>(`/agents?skip=${skip}&take=${take}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async get(agentId: string): Promise<EquosAgent | null> {
    return this.http
      .get<EquosAgent | null>(`/agents/${agentId}`)
      .catch(ErrorUtils.convertToEquosError);
  }
}
