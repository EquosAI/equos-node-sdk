
# CreateEquosCharacterRequest


## Properties

Name | Type
------------ | -------------
`client` | string
`name` | string
`livekitIdentity` | string
`faceId` | string
`voiceId` | string
`brainId` | string
`knowledgeBaseId` | string
`search` | boolean
`elevenlabsAgentId` | string

## Example

```typescript
import type { CreateEquosCharacterRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "client": null,
  "name": null,
  "livekitIdentity": null,
  "faceId": null,
  "voiceId": null,
  "brainId": null,
  "knowledgeBaseId": null,
  "search": null,
  "elevenlabsAgentId": null,
} satisfies CreateEquosCharacterRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosCharacterRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


