import { HttpUtils } from '../utils/http.utils';
import { ErrorUtils } from '../utils/error.utils';
import {
  CreateEquosAvatarRequest,
  EquosAvatar,
  ListEquosAvatarsResponse,
  UpdateEquosAvatarRequest,
} from '../types/avatar.type';

export class EquosAvatarApi {
  constructor(private readonly http: HttpUtils) {}

  async create(data: CreateEquosAvatarRequest): Promise<EquosAvatar> {
    return this.http
      .post<CreateEquosAvatarRequest, EquosAvatar>('/avatars', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(
    skip = 0,
    take = 10,
    client?: string,
  ): Promise<ListEquosAvatarsResponse> {
    let path = `/avatars?skip=${skip}&take=${take}`;

    if (client) {
      path += `&client=${client}`;
    }

    return this.http
      .get<ListEquosAvatarsResponse>(path)
      .catch(ErrorUtils.convertToEquosError);
  }

  async get(avatarId: string): Promise<EquosAvatar | null> {
    return this.http
      .get<EquosAvatar | null>(`/avatars/${avatarId}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async delete(agentId: string): Promise<EquosAvatar | null> {
    return this.http
      .delete<EquosAvatar | null>(`/avatars/${agentId}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async update(
    agentId: string,
    data: UpdateEquosAvatarRequest,
  ): Promise<EquosAvatar> {
    return this.http
      .put<UpdateEquosAvatarRequest, EquosAvatar>(`/avatars/${agentId}`, data)
      .catch(ErrorUtils.convertToEquosError);
  }
}
