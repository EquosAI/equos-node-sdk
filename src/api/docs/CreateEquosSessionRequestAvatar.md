
# CreateEquosSessionRequestAvatar

Either provide an existing avatar ID or create a new avatar on the fly.

## Properties

Name | Type
------------ | -------------
`identity` | string
`name` | string
`refImage` | string
`agentId` | object
`client` | object
`id` | string

## Example

```typescript
import type { CreateEquosSessionRequestAvatar } from ''

// TODO: Update the object below with actual values
const example = {
  "identity": null,
  "name": null,
  "refImage": null,
  "agentId": null,
  "client": null,
  "id": null,
} satisfies CreateEquosSessionRequestAvatar

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEquosSessionRequestAvatar
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


