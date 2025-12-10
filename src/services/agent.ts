import { HttpUtils } from '../utils/http.utils';
import { ErrorUtils } from '../utils/error.utils';
import {
  CreateEquosAgentRequest,
  EquosAgent,
  ListEquosAgentsResponse,
  UpdateEquosAgentRequest,
} from '../types/agent.type';

export class EquosAgentApi {
  constructor(private readonly http: HttpUtils) {}

  async create(data: CreateEquosAgentRequest): Promise<EquosAgent> {
    return this.http
      .post<CreateEquosAgentRequest, EquosAgent>('/agents', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(
    skip = 0,
    take = 10,
    client?: string,
  ): Promise<ListEquosAgentsResponse> {
    let path = `/agents?skip=${skip}&take=${take}`;

    if (client) {
      path += `&client=${client}`;
    }

    return this.http
      .get<ListEquosAgentsResponse>(path)
      .catch(ErrorUtils.convertToEquosError);
  }

  async get(agentId: string): Promise<EquosAgent | null> {
    return this.http
      .get<EquosAgent | null>(`/agents/${agentId}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async delete(agentId: string): Promise<EquosAgent | null> {
    return this.http
      .delete<EquosAgent | null>(`/agents/${agentId}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async update(
    agentId: string,
    data: UpdateEquosAgentRequest,
  ): Promise<EquosAgent> {
    return this.http
      .put<UpdateEquosAgentRequest, EquosAgent>(`/agents/${agentId}`, data)
      .catch(ErrorUtils.convertToEquosError);
  }
}
