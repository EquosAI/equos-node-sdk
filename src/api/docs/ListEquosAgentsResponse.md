
# ListEquosAgentsResponse


## Properties

Name | Type
------------ | -------------
`skip` | number
`take` | number
`total` | number
`agents` | [Array&lt;EquosAgent&gt;](EquosAgent.md)

## Example

```typescript
import type { ListEquosAgentsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "skip": null,
  "take": null,
  "total": null,
  "agents": null,
} satisfies ListEquosAgentsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListEquosAgentsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


