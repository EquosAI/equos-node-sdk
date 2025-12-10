
# CreateEquosSessionRequestAgent

[Optional] Either provide an existing agent ID or create a new agent on the fly.

## Properties

Name | Type
------------ | -------------
`name` | string
`client` | object
`provider` | string
`model` | string
`voice` | string
`instructions` | string
`greetingMsg` | string
`remoteId` | string
`search` | boolean
`emotions` | boolean
`memory` | boolean
`id` | string

## Example

```typescript
import type { CreateEquosSessionRequestAgent } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "client": null,
  "provider": null,
  "model": null,
  "voice": null,
  "instructions": null,
  "greetingMsg": null,
  "remoteId": null,
  "search": null,
  "emotions": null,
  "memory": null,
  "id": null,
} satisfies CreateEquosSessionRequestAgent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosSessionRequestAgent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


