
# CreateEquosConversationResponse


## Properties

Name | Type
------------ | -------------
`conversation` | [EquosConversation](EquosConversation.md)
`remoteAgentAccessToken` | string
`consumerAccessToken` | string

## Example

```typescript
import type { CreateEquosConversationResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "conversation": null,
  "remoteAgentAccessToken": null,
  "consumerAccessToken": null,
} satisfies CreateEquosConversationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosConversationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


