
# CreateEquosSessionRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`client` | string
`host` | [EquosSessionHost](EquosSessionHost.md)
`maxDuration` | number
`additionalCtx` | string
`templateVars` | object
`agent` | [CreateEquosSessionRequestAgent](CreateEquosSessionRequestAgent.md)
`avatar` | [CreateEquosSessionRequestAvatar](CreateEquosSessionRequestAvatar.md)
`remoteAgentConnectingIdentity` | [EquosParticipantIdentity](EquosParticipantIdentity.md)
`consumerIdentity` | [EquosParticipantIdentity](EquosParticipantIdentity.md)

## Example

```typescript
import type { CreateEquosSessionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "client": null,
  "host": null,
  "maxDuration": null,
  "additionalCtx": null,
  "templateVars": null,
  "agent": null,
  "avatar": null,
  "remoteAgentConnectingIdentity": null,
  "consumerIdentity": null,
} satisfies CreateEquosSessionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosSessionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


