# @equos/node-sdk
[Equos.ai](https://www.equos.ai) official node js SDK.

## Prerequisites
- Go to [Equos Studio](https://studio.equos.ai).
- Create an organization.
- Create an API Key.


## Installation
```bash
npm install @equos/node-sdk
```

## Usage

### Setup Equos Client
```ts
import { Equos } from '@equos/node-sdk';

const  client = Equos.client(process.env.EQUOS_API_KEY!);
```

You don't have an api key ? [Create one here](https://studio.equos.ai)

### Create Avatar
```ts
import { EquosAvatar, CreateEquosAvatarRequest } from '@equos/node-sdk';


const data: CreateEquosAvatarRequest = {
  identity: "equos-avatar-jeremy",
  name: "Jeremy"
  refImage: "<base64 data url of the reference image>" // 5Mo max.
}

// Create an avatar.
const avatar: EquosAvatar = await client.avatars.create(data);

console.log(avatar);
```

### Create Agent

```ts
import { 
    EquosAgent, 
    CreateEquosAgentRequest, 
    AgentProvider, 
    OpenaiRealtimeVoices, 
    OpenaiRealtimeModels 
} from '@equos/node-sdk';


const data: CreateEquosAgentRequest = {
  name: "My Agent",
  provider: AgentProvider.openai,
  config: {
    instructions: "You are a Korean teacher...",
    voice: OpenaiRealtimeVoices.ash,
    model: OpenaiRealtimeModels.gpt_realtime
  }
}

const agent: EquosAgent = await client.agents.create(data);
console.log(agent);
```


### Start a Session
This will create and start a session. The avatar will join the room as soon as possible.

```ts
const sessionOptions: CreateEquosSessionRequest = {
    name: 'Equos Session',
    agent: {
        id: "<your agent id>"
    }, // agent accepts either an object with id of existing agent, or CreateEquosAgent object.
    avatar: {
        id: "<your avatar id>"
    }, // avatar accepts either an object with id of existing avatar, or CreateEquosAvatar object.
    consumerIdentity: {
        identity: 'client-identity',
        name: 'Client Name'
    }
}

const result = await client.sessions.create(sessionOptions);

console.log(result.session);
console.log(result.consumerAccessToken);
```

### Stop a Session
```ts
const session = await client.sessions.stop("<session id>");
```

## Reach Us
- Equos Slack Community: [Join Equos Community Slack](https://join.slack.com/t/equosaicommunity/shared_invite/zt-3d8oy19au-jZpsJB0i~gdL0jbDswdzzQ)
- Support: [Support Form](https://docs.google.com/forms/d/e/1FAIpQLSdoK7LvORdQf7KOQKvhhlESStJcKc3bDB9HPsEet6LuOmVUfQ/viewform)

## Documentation

- Official Documentation: [https://docs.equos.ai](https://docs.equos.ai)
- Equos NodeJS Usage Examples: [https://github.com/EquosAI/equos-examples/tree/main/examples/equos-nextjs-integration](https://github.com/EquosAI/equos-examples/tree/main/examples/equos-nextjs-integration)