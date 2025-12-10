
# EquosKnowledgeBase


## Properties

Name | Type
------------ | -------------
`id` | string
`organizationId` | string
`name` | string
`description` | string
`client` | string
`documents` | [Array&lt;EquosDocument&gt;](EquosDocument.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EquosKnowledgeBase } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "organizationId": null,
  "name": null,
  "description": null,
  "client": null,
  "documents": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EquosKnowledgeBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosKnowledgeBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


