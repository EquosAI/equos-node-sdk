
# EquosSession


## Properties

Name | Type
------------ | -------------
`id` | string
`organizationId` | string
`freemium` | boolean
`name` | string
`provider` | string
`client` | string
`status` | string
`maxDuration` | number
`additionalCtx` | string
`templateVars` | object
`host` | [EquosSessionServer](EquosSessionServer.md)
`avatarId` | string
`avatar` | [EquosAvatar](EquosAvatar.md)
`agentId` | string
`agent` | [EquosAgent](EquosAgent.md)
`knowledgeBaseId` | string
`knowledgeBase` | [EquosResourceReference](EquosResourceReference.md)
`remoteAgentIdentity` | object
`transcript` | object
`startedAt` | Date
`endedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EquosSession } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "organizationId": null,
  "freemium": null,
  "name": null,
  "provider": null,
  "client": null,
  "status": null,
  "maxDuration": null,
  "additionalCtx": null,
  "templateVars": null,
  "host": null,
  "avatarId": null,
  "avatar": null,
  "agentId": null,
  "agent": null,
  "knowledgeBaseId": null,
  "knowledgeBase": null,
  "remoteAgentIdentity": null,
  "transcript": null,
  "startedAt": null,
  "endedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EquosSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


