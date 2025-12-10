
# EquosDocument


## Properties

Name | Type
------------ | -------------
`id` | string
`knowledgeBaseId` | string
`name` | string
`description` | string
`size` | number
`status` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EquosDocument } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "knowledgeBaseId": null,
  "name": null,
  "description": null,
  "size": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EquosDocument

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosDocument
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


