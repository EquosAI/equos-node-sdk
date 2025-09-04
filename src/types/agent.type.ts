export enum LLMs {
  gpt5 = 'gpt-5',
  gpt5Mini = 'gpt-5-mini',
  gpt5Nano = 'gpt-5-nano',
  gpt4oMini = 'gpt-4o-mini',
  gpt4_1 = 'gpt-4.1',
}

export enum TTSs {
  elevenlabsTurboV2_5 = 'eleven_turbo_v2_5',
  elevenlabsV3 = 'eleven_v3',
  elevenMultilingualV2 = 'eleven_multilingual_v2',
  elevenFlashV2_5 = 'eleven_flash_v2_5',
}

export enum Voices {
  Roger = 'CwhRBWXzGAHq8TQ4Fs17',
  Sarah = 'EXAVITQu4vr4xnSDxMaL',
  Jessica = 'cgSgspJ2msm6clMCkdW9',
  Chris = 'iP95p4xoKVk53GoZ742B',
}

export interface CreateEquosAgentRequest {
  instructions: string;
  llm?: {
    model: LLMs;
  };
  tts?: {
    voice: Voices;
    model: TTSs;
  };
  stt?: {
    languages: string[];
    customVocabulary?: string[];
  };
}

export interface EquosAgentLLM {
  model: LLMs;
}

export interface EquosAgentTTS {
  voice: Voices;
  model: TTSs;
}

export interface EquosAgentSTT {
  languages: string[];
  customVocabulary: string[];
}

export interface EquosAgent {
  id: string;
  organizationId: string;
  instruction: string;
  llm?: EquosAgentLLM;
  tts?: EquosAgentTTS;
  stt?: EquosAgentSTT;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListEquosAgentsResponse {
  skip: number;
  take: number;
  total: number;
  agents: EquosAgent[];
}
