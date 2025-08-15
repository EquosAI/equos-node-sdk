import { EquosAvatar } from './apis/avatar';
import { EquosSession } from './apis/session';
import { ConstantsUtils } from './utils/constants.utils';
import { HttpUtils } from './utils/http.utils';

export class Equos {
  private readonly http: HttpUtils;

  private constructor(
    private readonly apiKey: string,
    private readonly version: string = 'v1',
  ) {
    this.http = new HttpUtils(
      ConstantsUtils.API_BASE_URL,
      this.version,
      this.apiKey,
    );
  }

  static client(apiKey: string): Equos {
    return new Equos(apiKey);
  }

  get avatars() {
    return new EquosAvatar(this.http);
  }

  get sessions() {
    return new EquosSession(this.http);
  }
}
