import {
  CreateEquosSessionRequestData,
  CreateEquosSessionResponseData,
  EquosSessionData,
  ListEquosSessionsData,
} from '../types/session.type';
import { ErrorUtils } from '../utils/error.utils';
import { HttpUtils } from '../utils/http.utils';

export class EquosSession {
  constructor(private readonly http: HttpUtils) {}

  async get(id: string): Promise<EquosSessionData> {
    return this.http
      .get<EquosSessionData>(`/sessions/${id}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async create(
    data: CreateEquosSessionRequestData,
  ): Promise<CreateEquosSessionResponseData> {
    return this.http
      .post<
        CreateEquosSessionRequestData,
        CreateEquosSessionResponseData
      >('/sessions', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(skip = 0, take = 10): Promise<ListEquosSessionsData> {
    return this.http
      .get<ListEquosSessionsData>(`/sessions?skip=${skip}&take=${take}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async stop(id: string): Promise<EquosSessionData> {
    return this.http
      .patch<{}, EquosSessionData>(`/sessions/${id}/stop`, {})
      .catch(ErrorUtils.convertToEquosError);
  }
}
