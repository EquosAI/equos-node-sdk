import {
  CreateEquosAvatarData,
  EquosAvatarData,
  ListEquosAvatarsData,
} from '../types/avatar.type';
import { HttpUtils } from '../utils/http.utils';

export class EquosAvatar {
  constructor(private readonly http: HttpUtils) {}

  create(name: string, dataUrl: string): Promise<EquosAvatarData> {
    return this.http.post<CreateEquosAvatarData, EquosAvatarData>('/avatars', {
      name,
      refImage: dataUrl,
    });
  }

  list(skip = 0, take = 10): Promise<ListEquosAvatarsData> {
    return this.http.get<ListEquosAvatarsData>(
      `/avatars?skip=${skip}&take=${take}`,
    );
  }
}
