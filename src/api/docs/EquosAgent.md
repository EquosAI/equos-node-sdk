
# EquosAgent


## Properties

Name | Type
------------ | -------------
`id` | string
`organizationId` | string
`name` | string
`provider` | string
`client` | string
`model` | string
`voice` | string
`instructions` | string
`greetingMsg` | string
`remoteId` | string
`search` | boolean
`emotions` | boolean
`memory` | boolean
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EquosAgent } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "organizationId": null,
  "name": null,
  "provider": null,
  "client": null,
  "model": null,
  "voice": null,
  "instructions": null,
  "greetingMsg": null,
  "remoteId": null,
  "search": null,
  "emotions": null,
  "memory": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EquosAgent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosAgent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


