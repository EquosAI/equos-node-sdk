import { EquosAvatar } from './apis/avatar';
import { EquosSession } from './apis/session';
import { ConstantsUtils } from './utils/constants.utils';
import { HttpUtils } from './utils/http.utils';

export class Equos {
  private readonly http: HttpUtils;

  private avatarApi: EquosAvatar;
  private sessionApi: EquosSession;

  private constructor(
    private readonly apiKey: string,
    private readonly version: string = 'v1',
  ) {
    this.http = new HttpUtils(
      ConstantsUtils.API_BASE_URL,
      this.version,
      this.apiKey,
    );

    this.avatarApi = new EquosAvatar(this.http);
    this.sessionApi = new EquosSession(this.http);
  }

  static client(apiKey: string): Equos {
    return new Equos(apiKey);
  }

  get avatars() {
    return this.avatarApi;
  }

  get sessions() {
    return this.sessionApi;
  }
}
