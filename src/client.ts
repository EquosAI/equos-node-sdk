import { Configuration } from './api/runtime';
import {
  AgentApi,
  AvatarApi,
  BrainApi,
  CharacterApi,
  FaceApi,
  HealthApi,
  KnowledgeBaseApi,
  SessionPassesApi,
  SessionsApi,
  VoiceApi,
} from './api/apis';

export interface EquosOptions {
  /**
   * API endpoint to use (default: https://api.equos.ai)
   * Can leave blank to use the default endpoint.
   */
  endpoint?: string;
}

/**
 * Main Equos SDK client
 */
export class EquosClient {
  private readonly configuration: Configuration;
  private readonly basePath: string;

  // API instances
  public readonly agents: AgentApi;
  public readonly avatars: AvatarApi;
  public readonly brains: BrainApi;
  public readonly characters: CharacterApi;
  public readonly faces: FaceApi;
  public readonly health: HealthApi;
  public readonly knowledgeBases: KnowledgeBaseApi;
  public readonly sessionPasses: SessionPassesApi;
  public readonly sessions: SessionsApi;
  public readonly voices: VoiceApi;

  private constructor(apiKey: string, options?: EquosOptions) {
    const endpoint = options?.endpoint || 'https://api.equos.ai';

    // Construct the base path
    this.basePath = `${endpoint}`;

    // Create configuration with API key
    this.configuration = new Configuration({
      basePath: this.basePath,
      apiKey: apiKey, // This will be added to x-api-key header automatically
    });

    // Initialize all API instances
    this.agents = new AgentApi(this.configuration);
    this.avatars = new AvatarApi(this.configuration);
    this.brains = new BrainApi(this.configuration);
    this.characters = new CharacterApi(this.configuration);
    this.faces = new FaceApi(this.configuration);
    this.health = new HealthApi(this.configuration);
    this.knowledgeBases = new KnowledgeBaseApi(this.configuration);
    this.sessionPasses = new SessionPassesApi(this.configuration);
    this.sessions = new SessionsApi(this.configuration);
    this.voices = new VoiceApi(this.configuration);
  }

  /**
   * Create a new Equos client instance
   * @param apiKey - Your Equos API key
   * @param options - Optional configuration
   * @returns EquosClient instance
   */
  static create(apiKey: string, options?: EquosOptions): EquosClient {
    return new EquosClient(apiKey, options);
  }

  /**
   * Get the base path being used by this client
   */
  getBasePath(): string {
    return this.basePath;
  }
}
