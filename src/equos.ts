import { EquosAgentApi } from './apis/agent';
import { EquosAvatarApi } from './apis/avatar';
import { EquosKnowledgeBaseApi } from './apis/knowledge-base';
import { EquosSessionApi } from './apis/session';
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

  private readonly avatarApi: EquosAvatarApi;
  private readonly sessionApi: EquosSessionApi;
  private readonly agentApi: EquosAgentApi;
  private readonly knowledgeBaseApi: EquosKnowledgeBaseApi;

  private readonly version: string;
  private readonly endpoint: string;

  private constructor(
    private readonly apiKey: string,
    readonly opts?: EquosOptions,
  ) {
    this.endpoint = opts?.endpoint || ConstantsUtils.DEFAULT_ENDPOINT;
    this.version = opts?.version || ConstantsUtils.DEFAULT_VERSION;

    this.http = new HttpUtils(this.endpoint, this.version, this.apiKey);

    this.avatarApi = new EquosAvatarApi(this.http);
    this.sessionApi = new EquosSessionApi(this.http);
    this.agentApi = new EquosAgentApi(this.http);
    this.knowledgeBaseApi = new EquosKnowledgeBaseApi(this.http);
  }

  static client(apiKey: string, opts?: EquosOptions): Equos {
    return new Equos(apiKey, opts);
  }

  get agents(): EquosAgentApi {
    return this.agentApi;
  }

  get avatars(): EquosAvatarApi {
    return this.avatarApi;
  }

  get sessions(): EquosSessionApi {
    return this.sessionApi;
  }

  get knowledgeBases(): EquosKnowledgeBaseApi {
    return this.knowledgeBaseApi;
  }
}
