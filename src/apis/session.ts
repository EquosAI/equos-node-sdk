import {
  CreateEquosSessionRequest,
  CreateEquosSessionResponse,
  EquosSession,
  ListEquosSessionsResponse,
} from '../types/session.type';
import { ErrorUtils } from '../utils/error.utils';
import { HttpUtils } from '../utils/http.utils';

export class EquosSessionApi {
  constructor(private readonly http: HttpUtils) {}

  async get(id: string): Promise<EquosSession> {
    return this.http
      .get<EquosSession>(`/sessions/${id}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async create(
    data: CreateEquosSessionRequest,
  ): Promise<CreateEquosSessionResponse> {
    return this.http
      .post<
        CreateEquosSessionRequest,
        CreateEquosSessionResponse
      >('/sessions', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(
    skip = 0,
    take = 10,
    client?: string,
  ): Promise<ListEquosSessionsResponse> {
    let path = `/sessions?skip=${skip}&take=${take}`;

    if (client) {
      path += `&client=${client}`;
    }
    return this.http
      .get<ListEquosSessionsResponse>(path)
      .catch(ErrorUtils.convertToEquosError);
  }

  async stop(id: string): Promise<EquosSession> {
    return this.http
      .patch<{}, EquosSession>(`/sessions/${id}/stop`, {})
      .catch(ErrorUtils.convertToEquosError);
  }
}
