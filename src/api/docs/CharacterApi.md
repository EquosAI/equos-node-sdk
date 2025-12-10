# CharacterApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCharacter**](CharacterApi.md#createcharacter) | **POST** /v3/characters | Create a new Equos Character. |
| [**deleteCharacter**](CharacterApi.md#deletecharacter) | **DELETE** /v3/characters/{id} | Delete an Equos Character. This action is irreversible. |
| [**getCharacter**](CharacterApi.md#getcharacter) | **GET** /v3/characters/{id} | Get Equos Character by ID. |
| [**listCharacters**](CharacterApi.md#listcharacters) | **GET** /v3/characters | List Equos Characters. |
| [**updateCharacter**](CharacterApi.md#updatecharacter) | **PUT** /v3/characters/{id} | Update character properties. |



## createCharacter

> EquosCharacter createCharacter(createEquosCharacterRequest)

Create a new Equos Character.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { CreateCharacterRequest } from '';

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
  } satisfies CreateCharacterRequest;

  try {
    const data = await api.createCharacter(body);
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


## deleteCharacter

> EquosCharacter deleteCharacter(id)

Delete an Equos Character. This action is irreversible.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { DeleteCharacterRequest } from '';

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
  } satisfies DeleteCharacterRequest;

  try {
    const data = await api.deleteCharacter(body);
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


## getCharacter

> EquosCharacter getCharacter(id)

Get Equos Character by ID.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { GetCharacterRequest } from '';

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
  } satisfies GetCharacterRequest;

  try {
    const data = await api.getCharacter(body);
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


## listCharacters

> ListEquosCharactersResponse listCharacters(take, skip, client)

List Equos Characters.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { ListCharactersRequest } from '';

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
  } satisfies ListCharactersRequest;

  try {
    const data = await api.listCharacters(body);
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


## updateCharacter

> EquosCharacter updateCharacter(id, updateEquosCharacterRequest)

Update character properties.

### Example

```ts
import {
  Configuration,
  CharacterApi,
} from '';
import type { UpdateCharacterRequest } from '';

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
  } satisfies UpdateCharacterRequest;

  try {
    const data = await api.updateCharacter(body);
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

