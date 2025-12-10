# CharacterApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**characterControllerCreateV3**](CharacterApi.md#charactercontrollercreatev3) | **POST** /v3/characters | Create a new Equos Character. |
| [**characterControllerGetByIdV3**](CharacterApi.md#charactercontrollergetbyidv3) | **GET** /v3/characters/{id} | Get Equos Character by ID. |
| [**characterControllerListV3**](CharacterApi.md#charactercontrollerlistv3) | **GET** /v3/characters | List Equos Characters. |
| [**characterControllerSoftDeleteV3**](CharacterApi.md#charactercontrollersoftdeletev3) | **DELETE** /v3/characters/{id} | Delete an Equos Character. This action is irreversible. |
| [**characterControllerUpdateV3**](CharacterApi.md#charactercontrollerupdatev3) | **PUT** /v3/characters/{id} | Update character properties. |



## characterControllerCreateV3

> EquosCharacter characterControllerCreateV3(createEquosCharacterRequest)

Create a new Equos Character.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { CharacterControllerCreateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new CharacterApi(config);

  const body = {
    // CreateEquosCharacterRequest
    createEquosCharacterRequest: ...,
  } satisfies CharacterControllerCreateV3Request;

  try {
    const data = await api.characterControllerCreateV3(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createEquosCharacterRequest** | [CreateEquosCharacterRequest](CreateEquosCharacterRequest.md) |  | |

### Return type

[**EquosCharacter**](EquosCharacter.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## characterControllerGetByIdV3

> EquosCharacter characterControllerGetByIdV3(id)

Get Equos Character by ID.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { CharacterControllerGetByIdV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new CharacterApi(config);

  const body = {
    // string | Equos Character ID
    id: id_example,
  } satisfies CharacterControllerGetByIdV3Request;

  try {
    const data = await api.characterControllerGetByIdV3(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Equos Character ID | [Defaults to `undefined`] |

### Return type

[**EquosCharacter**](EquosCharacter.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## characterControllerListV3

> ListEquosCharactersResponse characterControllerListV3(take, skip, client)

List Equos Characters.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { CharacterControllerListV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new CharacterApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies CharacterControllerListV3Request;

  try {
    const data = await api.characterControllerListV3(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **take** | `number` |  | [Optional] [Defaults to `20`] |
| **skip** | `number` |  | [Optional] [Defaults to `0`] |
| **client** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListEquosCharactersResponse**](ListEquosCharactersResponse.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## characterControllerSoftDeleteV3

> EquosCharacter characterControllerSoftDeleteV3(id)

Delete an Equos Character. This action is irreversible.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { CharacterControllerSoftDeleteV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new CharacterApi(config);

  const body = {
    // string | Equos Character ID
    id: id_example,
  } satisfies CharacterControllerSoftDeleteV3Request;

  try {
    const data = await api.characterControllerSoftDeleteV3(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Equos Character ID | [Defaults to `undefined`] |

### Return type

[**EquosCharacter**](EquosCharacter.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## characterControllerUpdateV3

> EquosCharacter characterControllerUpdateV3(id, updateEquosCharacterRequest)

Update character properties.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { CharacterControllerUpdateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new CharacterApi(config);

  const body = {
    // string | Equos Character ID
    id: id_example,
    // UpdateEquosCharacterRequest
    updateEquosCharacterRequest: ...,
  } satisfies CharacterControllerUpdateV3Request;

  try {
    const data = await api.characterControllerUpdateV3(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Equos Character ID | [Defaults to `undefined`] |
| **updateEquosCharacterRequest** | [UpdateEquosCharacterRequest](UpdateEquosCharacterRequest.md) |  | |

### Return type

[**EquosCharacter**](EquosCharacter.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

