
# CreateEquosAgentRequest


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

## Example

```typescript
import type { CreateEquosAgentRequest } from ''

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
} satisfies CreateEquosAgentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosAgentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


