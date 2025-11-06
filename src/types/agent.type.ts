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

export enum GeminiRealtimeModels {
  gemini_2_5_flash_native_audio_09_2025 = 'gemini-2.5-flash-native-audio-preview-09-2025',
}

export enum GeminiRealtimeVoices {
  Puck = 'Puck',
  Charon = 'Charon',
  Kore = 'Kore',
  Fenrir = 'Fenrir',
  Aoede = 'Aoede',
  Leda = 'Leda',
  Orus = 'Orus',
  Zephyr = 'Zephyr',
  Sulafat = 'Sulafat',
  Sadachbia = 'Sadachbia',
  Sadaltager = 'Sadaltager',
  Vindemiatrix = 'Vindemiatrix',
  Zubenelgenubi = 'Zubenelgenubi',
  Achird = 'Achird',
  Pulcherrima = 'Pulcherrima',
  Gacrux = 'Gacrux',
  Schedar = 'Schedar',
  Alnilam = 'Alnilam',
  Achernar = 'Achernar',
  Laomedeia = 'Laomedeia',
  Rasalgethi = 'Rasalgethi',
  Algenib = 'Algenib',
  Erinome = 'Erinome',
  Despina = 'Despina',
  Algieba = 'Algieba',
  Umbriel = 'Umbriel',
  Iapetus = 'Iapetus',
  Enceladus = 'Enceladus',
  Autonoe = 'Autonoe',
  Callirrhoe = 'Callirrhoe',
}

export enum AgentProvider {
  openai = 'openai',
  gemini = 'gemini',
  elevenlabs = 'elevenlabs',
}

export interface CreateEquosAgentRequest {
  provider: AgentProvider;
  client?: string | null;
  name?: string | null;

  model?: GeminiRealtimeModels;
  voice?: GeminiRealtimeVoices;
  instructions?: string;

  search?: boolean;
  emotions?: boolean;
  memory?: boolean;

  remoteId?: string | null;
}

export interface EquosAgent {
  id: string;
  organizationId: string;
  provider: AgentProvider;
  name?: string;
  client?: string;

  model?: OpenaiRealtimeModels | GeminiRealtimeModels;
  voice?: OpenaiRealtimeVoices | GeminiRealtimeVoices;
  instructions?: string;

  remoteId?: string;

  search: boolean;
  emotions: boolean;
  memory: boolean;

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
