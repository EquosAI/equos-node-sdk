import {
  CreateEquosSessionRequestData,
  CreateEquosSessionResponseData,
  EquosSessionData,
  ListEquosSessionsData,
} from '../types/session.type';
import { HttpUtils } from '../utils/http.utils';

export class EquosSession {
  constructor(private readonly http: HttpUtils) {}

  get(id: string): Promise<EquosSessionData> {
    return this.http.get<EquosSessionData>(`/sessions/${id}`);
  }

  create(
    data: CreateEquosSessionRequestData,
  ): Promise<CreateEquosSessionResponseData> {
    return this.http.post<
      CreateEquosSessionRequestData,
      CreateEquosSessionResponseData
    >('/sessions', data);
  }

  list(skip = 0, take = 10): Promise<ListEquosSessionsData> {
    return this.http.get<ListEquosSessionsData>(
      `/sessions?skip=${skip}&take=${take}`,
    );
  }

  stop(id: string): Promise<EquosSessionData> {
    return this.http.patch<{}, EquosSessionData>(`/sessions/${id}/stop`, {});
  }
}
