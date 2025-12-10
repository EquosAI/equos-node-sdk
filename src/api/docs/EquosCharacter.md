
# EquosCharacter


## Properties

Name | Type
------------ | -------------
`id` | string
`organizationId` | string
`client` | string
`name` | string
`livekitIdentity` | string
`search` | boolean
`elevenlabsAgentId` | string
`faceId` | string
`voiceId` | string
`brainId` | string
`knowledgeBaseId` | string
`face` | [EquosFace](EquosFace.md)
`voice` | [EquosVoice](EquosVoice.md)
`brain` | [EquosBrain](EquosBrain.md)
`knowledgeBase` | [EquosKnowledgeBase](EquosKnowledgeBase.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EquosCharacter } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "organizationId": null,
  "client": null,
  "name": null,
  "livekitIdentity": null,
  "search": null,
  "elevenlabsAgentId": null,
  "faceId": null,
  "voiceId": null,
  "brainId": null,
  "knowledgeBaseId": null,
  "face": null,
  "voice": null,
  "brain": null,
  "knowledgeBase": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EquosCharacter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosCharacter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


