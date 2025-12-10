
# EquosLimitResponse


## Properties

Name | Type
------------ | -------------
`organizationId` | string
`concurrent` | number
`duration` | number
`suspended` | boolean
`reason` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { EquosLimitResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "organizationId": null,
  "concurrent": null,
  "duration": null,
  "suspended": null,
  "reason": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies EquosLimitResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquosLimitResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


