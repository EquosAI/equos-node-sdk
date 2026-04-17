# @equos/node-sdk

[Equos.ai](https://www.equos.ai) official Node.js SDK - Build AI-powered avatars with lifelike faces, voices, and brains.

## Equos SDKs

| SDK | Platform | Package |
|-----|----------|---------|
| **@equos/browser-sdk** | Browser (vanilla JS/TS) | [npm](https://www.npmjs.com/package/@equos/browser-sdk) |
| **@equos/react** | Browser (React) | [npm](https://www.npmjs.com/package/@equos/react) |
| **@equos/node-sdk** | Node.js (server-side only) | [npm](https://www.npmjs.com/package/@equos/node-sdk) |
| **equos** | Python (server-side only) | [PyPI](https://pypi.org/project/equos/) |

## Features

- ✅ **Full TypeScript Support** - Auto-generated types from OpenAPI specification
- ✅ **Automatic API Key Management** - API key automatically added to all requests
- ✅ **Character Management** - Create and manage AI characters with faces, voices, and brains
- ✅ **Resource Management** - Manage faces, voices, brains, and knowledge bases
- ✅ **Conversations** - Start, stop, list, and fetch live avatar conversations
- ✅ **Client Tokens** - Mint short-lived tokens for browser and mobile SDKs
- ✅ **Health & Organization** - Monitor API health and freemium usage

## Prerequisites

1. Go to [Equos Studio](https://studio.equos.ai)
2. Create an organization
3. Create an API Key

## Installation

```bash
npm install @equos/node-sdk
```

## Quick Start

```typescript
import { EquosClient } from '@equos/node-sdk';

// Create client with your API key
const client = EquosClient.create(process.env.EQUOS_API_KEY!);

// List all characters
const characters = await client.characters.listCharacters({
  take: 10,
  skip: 0,
});

console.log(`Found ${characters.total} characters`);
```

Don't have an API key? [Create one here](https://studio.equos.ai)

## Configuration

### Default Configuration

```typescript
const client = EquosClient.create('your-api-key');
// Uses: https://api.equos.ai
```

## API Reference

### Character Management

Characters are the main entities that combine faces, voices, brains, and knowledge bases.

#### Create a Character

```typescript
import { CreateEquosCharacterRequest, EquosCharacter } from '@equos/node-sdk';

const characterData: CreateEquosCharacterRequest = {
  name: 'AI Assistant',
  livekitIdentity: 'ai-assistant-001',
  faceId: 'face-id-here', // Optional
  voiceId: 'voice-id-here', // Optional
  brainId: 'brain-id-here', // Optional
  knowledgeBaseId: 'kb-id', // Optional
  search: false, // Enable web search
};

const character: EquosCharacter = await client.characters.createCharacter({
  createEquosCharacterRequest: characterData,
});

console.log('Created character:', character.id);
```

#### List Characters

```typescript
const response = await client.characters.listCharacters({
  take: 20, // Number of items to return (max 50)
  skip: 0, // Number of items to skip
  client: 'my-app', // Optional: filter by client identifier
});

console.log(`Total: ${response.total}`);
response.characters.forEach((char) => {
  console.log(`- ${char.name} (${char.id})`);
});
```

#### Get Character by ID

```typescript
const character = await client.characters.getCharacter({
  id: 'character-id',
});

console.log('Character:', character);
// Includes populated face, voice, brain, and knowledgeBase objects
```

#### Update a Character

```typescript
import { UpdateEquosCharacterRequest } from '@equos/node-sdk';

const updates: UpdateEquosCharacterRequest = {
  name: 'Updated Name',
  voiceId: 'new-voice-id',
  brainId: 'new-brain-id',
};

const updated = await client.characters.updateCharacter({
  id: 'character-id',
  updateEquosCharacterRequest: updates,
});
```

#### Delete a Character

```typescript
const deleted = await client.characters.deleteCharacter({
  id: 'character-id',
});
```

### Face Management

Faces define the visual appearance of your AI characters.

#### Create a Face

```typescript
import { CreateEquosFaceRequest } from '@equos/node-sdk';

const faceData: CreateEquosFaceRequest = {
  identity: 'byron', // or 'emily' - from Equos Gallery
  client: 'my-app', // Optional: client identifier
};

const face = await client.faces.createFace({
  createEquosFaceRequest: faceData,
});

console.log('Face ID:', face.id);
console.log('Status:', face.status); // 'processing', 'ready', or 'error'
```

#### List Faces

```typescript
const faces = await client.faces.listFaces({
  take: 10,
  skip: 0,
});

faces.faces.forEach((face) => {
  console.log(`${face.id}: ${face.status}`);
  if (face.thumbnailUrl) {
    console.log(`  Thumbnail: ${face.thumbnailUrl}`);
  }
});
```

#### Get Face by ID

```typescript
const face = await client.faces.getFace({
  id: 'face-id',
});
```

#### Delete a Face

```typescript
await client.faces.deleteFace({
  id: 'face-id',
});
```

### Voice Management

Voices define how your AI characters sound.

#### Create a Voice

```typescript
import { CreateEquosVoiceRequest } from '@equos/node-sdk';

const voiceData: CreateEquosVoiceRequest = {
  name: 'Professional Voice',
  description: 'Clear and professional tone',
  voiceId: 'elevenlabs-voice-id',
  sampleUrl: 'https://example.com/sample.mp3',
  client: 'my-app', // Optional
};

const voice = await client.voices.createVoice({
  createEquosVoiceRequest: voiceData,
});
```

#### List Voices

```typescript
const voices = await client.voices.listVoices({
  take: 10,
  skip: 0,
});
```

#### Get Voice by ID

```typescript
const voice = await client.voices.getVoice({
  id: 'voice-id',
});
```

#### Delete a Voice

```typescript
await client.voices.deleteVoice({
  id: 'voice-id',
});
```

### Brain Management

Brains define the personality and behavior of your AI characters.

#### Create a Brain

```typescript
import { CreateEquosBrainRequest } from '@equos/node-sdk';

const brainData: CreateEquosBrainRequest = {
  name: 'Customer Support Brain',
  instructions:
    'You are a helpful customer support agent. Be friendly and professional.',
  greetingMessage: 'Hello! How can I help you today?',
  model: 'gemini-2.5-flash-native-audio-preview-09-2025',
  client: 'my-app', // Optional
};

const brain = await client.brains.createBrain({
  createEquosBrainRequest: brainData,
});
```

#### List Brains

```typescript
const brains = await client.brains.listBrains({
  take: 10,
  skip: 0,
});
```

#### Get Brain by ID

```typescript
const brain = await client.brains.getBrain({
  id: 'brain-id',
});

console.log('Instructions:', brain.instructions);
console.log('Greeting:', brain.greetingMessage);
```

#### Delete a Brain

```typescript
await client.brains.deleteBrain({
  id: 'brain-id',
});
```

### Knowledge Bases

Knowledge bases let characters ground responses in your own documents.

#### Create a Knowledge Base

```typescript
import { CreateKnowledgeBaseRequest } from '@equos/node-sdk';

const kbData: CreateKnowledgeBaseRequest = {
  name: 'Product Docs',
  client: 'my-app', // Optional
};

const kb = await client.knowledgeBases.createKnowledgeBase({
  createKnowledgeBaseRequest: kbData,
});
```

#### List Knowledge Bases

```typescript
const kbs = await client.knowledgeBases.listKnowledgeBases({
  take: 10,
  skip: 0,
});
```

#### Add and Index a Document

```typescript
const doc = await client.knowledgeBases.addDocument({
  id: 'kb-id',
  createDocumentRequest: {
    name: 'pricing.pdf',
    url: 'https://example.com/pricing.pdf',
  },
});

await client.knowledgeBases.indexDocument({
  id: 'kb-id',
  doc: doc.id,
});
```

#### Delete a Document or Knowledge Base

```typescript
await client.knowledgeBases.deleteDocument({ id: 'kb-id', doc: 'doc-id' });
await client.knowledgeBases.deleteKnowledgeBase({ id: 'kb-id' });
```

### Conversations

Conversations are live sessions between a user and a character.

#### Start a Conversation

```typescript
import { CreateEquosConversationRequest } from '@equos/node-sdk';

const conversationData: CreateEquosConversationRequest = {
  name: 'Support chat',
  characterId: 'character-id',
  maxSeconds: 600, // Optional: cap the session duration
  promptCtx: 'Customer is on the Enterprise plan.', // Optional
};

const conversation = await client.conversations.startConversation({
  createEquosConversationRequest: conversationData,
});

console.log('Room:', conversation.room);
console.log('Token:', conversation.token);
```

#### List and Fetch Conversations

```typescript
const conversations = await client.conversations.listConversations({
  take: 10,
  skip: 0,
});

const conversation = await client.conversations.getConversationById({
  id: 'conversation-id',
});
```

#### Stop a Conversation

```typescript
await client.conversations.stopConversation({
  id: 'conversation-id',
});
```

### Client Tokens

Generate short-lived tokens so a browser or mobile client can connect to a character without exposing your API key.

```typescript
const token = await client.tokens.createToken({
  createEquosTokenRequest: {
    user: 'user-123',
    character: 'character-id', // Optional
    client: 'my-app', // Optional
  },
});

// Hand `token` to your frontend (@equos/browser-sdk or @equos/react)
```

### Health & Organization

#### Check API Health

```typescript
const health = await client.health.checkHealth();
console.log('Status:', health.status);
console.log('Version:', health.version);
```

#### Get Freemium Usage

```typescript
const used = await client.organizations.getFreemiumUsage();
console.log('Freemium seconds used:', used);
```

## Complete Example

```typescript
import { EquosClient } from '@equos/node-sdk';

async function main() {
  const client = EquosClient.create(process.env.EQUOS_API_KEY!);

  // Create a face
  const face = await client.faces.createFace({
    createEquosFaceRequest: {
      identity: 'byron',
    },
  });

  // Create a voice
  const voice = await client.voices.createVoice({
    createEquosVoiceRequest: {
      name: 'Professional Voice',
      description: 'Clear professional tone',
      voiceId: 'elevenlabs-voice-id',
      sampleUrl: 'https://example.com/sample.mp3',
    },
  });

  // Create a brain
  const brain = await client.brains.createBrain({
    createEquosBrainRequest: {
      name: 'Support Agent',
      instructions: 'You are a helpful support agent.',
      greetingMessage: 'Hello! How can I help?',
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
    },
  });

  // Create a character with all components
  const character = await client.characters.createCharacter({
    createEquosCharacterRequest: {
      name: 'AI Support Agent',
      livekitIdentity: 'support-agent-001',
      faceId: face.id,
      voiceId: voice.id,
      brainId: brain.id,
      search: false,
    },
  });

  console.log('Created character:', character.id);
  console.log('Face:', character.face?.status);
  console.log('Voice:', character.voice?.name);
  console.log('Brain:', character.brain?.name);
}

main().catch(console.error);
```

## Error Handling

```typescript
try {
  const character = await client.characters.getCharacter({
    id: 'non-existent-id',
  });
} catch (error) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  }
}
```

## TypeScript Support

Request and response types ship with the package:

```typescript
import {
  EquosClient,
  EquosCharacter,
  EquosFace,
  EquosVoice,
  EquosBrain,
  CreateEquosCharacterRequest,
  UpdateEquosCharacterRequest,
  ListEquosCharactersResponse,
} from '@equos/node-sdk';
```

## Reach Us

- Equos Slack Community: [Join Equos Community Slack](https://join.slack.com/t/equosaicommunity/shared_invite/zt-3d8oy19au-jZpsJB0i~gdL0jbDswdzzQ)
- Support: [Support Form](https://docs.google.com/forms/d/e/1FAIpQLSdoK7LvORdQf7KOQKvhhlESStJcKc3bDB9HPsEet6LuOmVUfQ/viewform)

## Documentation

- Official Documentation: [https://docs.equos.ai](https://docs.equos.ai)
- Equos NodeJS Examples: [https://github.com/EquosAI/equos-examples/tree/main/examples/equos-nextjs-integration](https://github.com/EquosAI/equos-examples/tree/main/examples/equos-nextjs-integration)
- Equos React Examples: [https://github.com/EquosAI/equos-examples/blob/main/examples/equos-react-integration/README.md](https://github.com/EquosAI/equos-examples/blob/main/examples/equos-react-integration/README.md)

## License

See [LICENSE](./LICENSE) for details.
