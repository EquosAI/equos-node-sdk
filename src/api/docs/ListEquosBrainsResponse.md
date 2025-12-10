
# ListEquosBrainsResponse


## Properties

Name | Type
------------ | -------------
`skip` | number
`take` | number
`total` | number
`brains` | [Array&lt;EquosBrain&gt;](EquosBrain.md)

## Example

```typescript
import type { ListEquosBrainsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "skip": null,
  "take": null,
  "total": null,
  "brains": null,
} satisfies ListEquosBrainsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListEquosBrainsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


