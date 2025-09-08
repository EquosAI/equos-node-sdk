import { HttpUtils } from '../utils/http.utils';
import { ErrorUtils } from '../utils/error.utils';
import {
  CreateEquosAvatarRequest,
  EquosAvatar,
  ListEquosAvatarsResponse,
} from '../types/avatar.type';

export class EquosAvatarApi {
  constructor(private readonly http: HttpUtils) {}

  async create(data: CreateEquosAvatarRequest): Promise<EquosAvatar> {
    return this.http
      .post<CreateEquosAvatarRequest, EquosAvatar>('/avatars', data)
      .catch(ErrorUtils.convertToEquosError);
  }

  async list(skip = 0, take = 10): Promise<ListEquosAvatarsResponse> {
    return this.http
      .get<ListEquosAvatarsResponse>(`/avatars?skip=${skip}&take=${take}`)
      .catch(ErrorUtils.convertToEquosError);
  }

  async get(avatarId: string): Promise<EquosAvatar | null> {
    return this.http
      .get<EquosAvatar | null>(`/avatars/${avatarId}`)
      .catch(ErrorUtils.convertToEquosError);
  }
}
