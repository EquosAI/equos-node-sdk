import { EquosAvatar } from './apis/avatar';
import { EquosSession } from './apis/session';
import { ConstantsUtils } from './utils/constants.utils';
import { HttpUtils } from './utils/http.utils';

export class Equos {
  private readonly http: HttpUtils;

  private avatarApi: EquosAvatar;
  private sessionApi: EquosSession;

  private constructor(
    private readonly env: 'prod' | 'staging' | 'local' = 'prod',
    private readonly apiKey: string,
    private readonly version: string = 'v1',
  ) {
    this.http = new HttpUtils(this.apiUrl, this.version, this.apiKey);

    this.avatarApi = new EquosAvatar(this.http);
    this.sessionApi = new EquosSession(this.http);
  }

  get apiUrl(): string {
    switch (this.env) {
      case 'prod':
        return ConstantsUtils.PROD_API_BASE_URL;
      case 'staging':
        return ConstantsUtils.STAGING_API_BASE_URL;
      case 'local':
        return ConstantsUtils.LOCAL_API_BASE_URL;
      default:
        throw new Error(`Unknown environment: ${this.env}`);
    }
  }

  static client(
    env: 'prod' | 'staging' | 'local',
    apiKey: string,
    version: string = 'v1',
  ): Equos {
    return new Equos(env, apiKey, version);
  }

  get avatars() {
    return this.avatarApi;
  }

  get sessions() {
    return this.sessionApi;
  }
}
