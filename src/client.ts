import {
  BrainApi,
  CharacterApi,
  Configuration,
  ConversationApi,
  FaceApi,
  HealthApi,
  KnowledgeBaseApi,
  OrganizationApi,
  VoiceApi,
} from '@equos/core';

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
  public readonly brains: BrainApi;
  public readonly characters: CharacterApi;
  public readonly faces: FaceApi;
  public readonly health: HealthApi;
  public readonly knowledgeBases: KnowledgeBaseApi;
  public readonly voices: VoiceApi;
  public readonly conversations: ConversationApi;
  public readonly organizations: OrganizationApi;

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
    this.brains = new BrainApi(this.configuration);
    this.characters = new CharacterApi(this.configuration);
    this.faces = new FaceApi(this.configuration);
    this.health = new HealthApi(this.configuration);
    this.knowledgeBases = new KnowledgeBaseApi(this.configuration);
    this.voices = new VoiceApi(this.configuration);
    this.conversations = new ConversationApi(this.configuration);
    this.organizations = new OrganizationApi(this.configuration);
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
