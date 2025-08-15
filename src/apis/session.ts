import { EquosAvatarData, ListEquosAvatarsData } from '../types/avatar.type';
import {
  CreateEquosSessionRequestData,
  CreateEquosSessionResponseData,
} from '../types/session.type';
import { HttpUtils } from '../utils/http.utils';

export class EquosSession {
  constructor(private readonly http: HttpUtils) {}

  get(id: string): Promise<EquosAvatarData> {
    return this.http.get<EquosAvatarData>(`/sessions/${id}`);
  }

  create(
    data: CreateEquosSessionRequestData,
  ): Promise<CreateEquosSessionResponseData> {
    return this.http.post<
      CreateEquosSessionRequestData,
      CreateEquosSessionResponseData
    >('/sessions', data);
  }

  list(skip = 0, take = 10): Promise<ListEquosAvatarsData> {
    return this.http.get<ListEquosAvatarsData>(
      `/sessions?skip=${skip}&take=${take}`,
    );
  }

  stop(id: string): Promise<EquosAvatarData> {
    return this.http.patch<{}, EquosAvatarData>(`/sessions/${id}/stop`, {});
  }
}
