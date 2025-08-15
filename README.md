# @equos/node-sdk
[Equos.ai](https://equos.ai) official node js SDK.

## Prerequisites
- Go to [Equos Studio](https://studio.equos.ai).
- Create an organization.
- Create an API Key.


## Installation
```bash
npm install @equos/node-sdk
```

## Usage
```ts
import { Equos } from '@equos/node-sdk';

const MY_API_KEY = ''

const  client = Equos.client(MY_API_KEY);


// Create an avatar.
const referenceImageAsDataUrl: string = 'data:...';
const avatar = await client.avatars.create('Equos Avatar', referenceImageAsDataUrl);
console.log(avatar);

// Start a session.

const sessionOptions = {
    name: 'Equos Session',
    agent: {
        instructions: 'You are a Korean teacher...'
    },
    avatar: {
        id: avatar.id // or create one on the fly with referenceImage.
    },
    consumerIdentity: {
        identity: 'client-identity',
        name: 'Client Name'
    }
}

const result = await client.sessions.create(sessionOptions);

console.log(result.session);
console.log(result.consumerAccessToken);

```