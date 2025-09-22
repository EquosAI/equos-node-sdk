export enum OpenaiRealtimeModels {
  gpt_4o_realtime = 'gpt-4o-realtime-preview',
  gpt_realtime = 'gpt-realtime',
}

export enum OpenaiRealtimeVoices {
  alloy = 'alloy',
  marin = 'marin',
  cedar = 'cedar',
  ash = 'ash',
  ballad = 'ballad',
  coral = 'coral',
  echo = 'echo',
  sage = 'sage',
  shimmer = 'shimmer',
  verse = 'verse',
}

export enum GoogleRealtimeModels {
  gemini_2_5_flash_exp = 'gemini-2.5-flash-exp-native-audio-thinking-dialog',
  gemini_2_0_flash_exp = 'gemini-2.0-flash-exp',
}

export enum GoogleRealtimeVoices {
  Puck = 'Puck',
  Charon = 'Charon',
  Kore = 'Kore',
  Fenrir = 'Fenrir',
  Aoede = 'Aoede',
  Leda = 'Leda',
  Orus = 'Orus',
  Zephyr = 'Zephyr',
}

export enum AgentProvider {
  openai = 'openai',
  gemini = 'gemini',
  elevenlabs = 'elevenlabs',
}

export interface OpenaiAgentConfig {
  instructions: string;
  model: OpenaiRealtimeModels;
  voice: OpenaiRealtimeVoices;
}

export interface GeminiAgentConfig {
  instructions: string;
  model: GoogleRealtimeModels;
  voice: GoogleRealtimeVoices;
}

export interface ElevenlabsAgentConfig {
  elevenlabsAgentId: string;
}

export interface CreateEquosAgentRequest {
  provider: AgentProvider;
  client?: string | null;

  config: OpenaiAgentConfig | GeminiAgentConfig | ElevenlabsAgentConfig;
}

export interface EquosAgent {
  id: string;
  organizationId: string;
  provider: AgentProvider;
  client?: string;
  config: OpenaiAgentConfig | GeminiAgentConfig | ElevenlabsAgentConfig;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListEquosAgentsResponse {
  skip: number;
  take: number;
  total: number;
  agents: EquosAgent[];
}

export interface UpdateEquosAgentRequest extends CreateEquosAgentRequest {
  id: string;
  organizationId: string;
}
