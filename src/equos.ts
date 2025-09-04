import { EquosAvatar } from './apis/avatar';
import { EquosSession } from './apis/session';
import { ConstantsUtils } from './utils/constants.utils';
import { HttpUtils } from './utils/http.utils';

export interface EquosOptions {
  /**
   * API version to use (default: v1)
   */
  version?: string;
  /**
   * API endpoint to use (default: https://api.equos.ai)
   * Can leave blank to use the default endpoint.
   */
  endpoint?: string;
}

export class Equos {
  private readonly http: HttpUtils;

  private avatarApi: EquosAvatar;
  private sessionApi: EquosSession;

  private readonly version: string;
  private readonly endpoint: string;

  private constructor(
    private readonly apiKey: string,
    readonly opts?: EquosOptions,
  ) {
    this.endpoint = opts?.endpoint || ConstantsUtils.DEFAULT_ENDPOINT;
    this.version = opts?.version || ConstantsUtils.DEFAULT_VERSION;

    this.http = new HttpUtils(this.endpoint, this.version, this.apiKey);

    this.avatarApi = new EquosAvatar(this.http);
    this.sessionApi = new EquosSession(this.http);
  }

  static client(apiKey: string, opts?: EquosOptions): Equos {
    return new Equos(apiKey, opts);
  }

  get avatars() {
    return this.avatarApi;
  }

  get sessions() {
    return this.sessionApi;
  }
}
