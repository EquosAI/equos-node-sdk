
# CreateEquosConversationRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`characterId` | string
`client` | string
`host` | [EquosConversationHost](EquosConversationHost.md)
`remoteAgent` | [EquosParticipantIdentity](EquosParticipantIdentity.md)
`consumer` | [EquosParticipantIdentity](EquosParticipantIdentity.md)
`maxSeconds` | number
`promptCtx` | string
`promptTemplateVars` | { [key: string]: string; }

## Example

```typescript
import type { CreateEquosConversationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "characterId": null,
  "client": null,
  "host": null,
  "remoteAgent": null,
  "consumer": null,
  "maxSeconds": null,
  "promptCtx": null,
  "promptTemplateVars": null,
} satisfies CreateEquosConversationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosConversationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


