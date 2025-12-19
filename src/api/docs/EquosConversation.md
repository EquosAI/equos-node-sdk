
# EquosConversation


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`client` | string
`status` | string
`room` | string
`serverUrl` | string
`remoteAgentName` | string
`remoteAgentIdentity` | string
`consumerName` | string
`consumerIdentity` | string
`charge` | boolean
`chargeBySecond` | number
`maxSeconds` | number
`promptCtx` | string
`promptTemplateVars` | { [key: string]: string; }
`transcript` | [Array&lt;EquosConversationTranscriptMessage&gt;](EquosConversationTranscriptMessage.md)
`startedAt` | Date
`joinedAt` | Date
`endedAt` | Date
`createdAt` | Date
`updatedAt` | Date
`characterId` | string
`organizationId` | string

## Example

```typescript
import type { EquosConversation } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "client": null,
  "status": null,
  "room": null,
  "serverUrl": null,
  "remoteAgentName": null,
  "remoteAgentIdentity": null,
  "consumerName": null,
  "consumerIdentity": null,
  "charge": null,
  "chargeBySecond": null,
  "maxSeconds": null,
  "promptCtx": null,
  "promptTemplateVars": null,
  "transcript": null,
  "startedAt": null,
  "joinedAt": null,
  "endedAt": null,
  "createdAt": null,
  "updatedAt": null,
  "characterId": null,
  "organizationId": null,
} satisfies EquosConversation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosConversation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


