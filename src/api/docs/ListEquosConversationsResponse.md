
# ListEquosConversationsResponse


## Properties

Name | Type
------------ | -------------
`skip` | number
`take` | number
`total` | number
`conversations` | [Array&lt;EquosConversation&gt;](EquosConversation.md)

## Example

```typescript
import type { ListEquosConversationsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "skip": null,
  "take": null,
  "total": null,
  "conversations": null,
} satisfies ListEquosConversationsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListEquosConversationsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


