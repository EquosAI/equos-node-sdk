# VoiceApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createVoice**](VoiceApi.md#createvoice) | **POST** /v3/voices | Create a new Equos Voice. |
| [**deleteVoice**](VoiceApi.md#deletevoice) | **DELETE** /v3/voices/{id} | Delete an Equos Voice. This action is irreversible. |
| [**getVoice**](VoiceApi.md#getvoice) | **GET** /v3/voices/{id} | Get Equos Voice by ID. |
| [**listVoices**](VoiceApi.md#listvoices) | **GET** /v3/voices | List Equos Voices. |



## createVoice

> EquosVoice createVoice(createEquosVoiceRequest)

Create a new Equos Voice.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { CreateVoiceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new VoiceApi(config);

  const body = {
    // CreateEquosVoiceRequest
    createEquosVoiceRequest: ...,
  } satisfies CreateVoiceRequest;

  try {
    const data = await api.createVoice(body);
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
| **createEquosVoiceRequest** | [CreateEquosVoiceRequest](CreateEquosVoiceRequest.md) |  | |

### Return type

[**EquosVoice**](EquosVoice.md)

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


## deleteVoice

> EquosVoice deleteVoice(id)

Delete an Equos Voice. This action is irreversible.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { DeleteVoiceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new VoiceApi(config);

  const body = {
    // string | Equos Voice ID
    id: id_example,
  } satisfies DeleteVoiceRequest;

  try {
    const data = await api.deleteVoice(body);
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
| **id** | `string` | Equos Voice ID | [Defaults to `undefined`] |

### Return type

[**EquosVoice**](EquosVoice.md)

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


## getVoice

> EquosVoice getVoice(id)

Get Equos Voice by ID.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { GetVoiceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new VoiceApi(config);

  const body = {
    // string | Equos Voice ID
    id: id_example,
  } satisfies GetVoiceRequest;

  try {
    const data = await api.getVoice(body);
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
| **id** | `string` | Equos Voice ID | [Defaults to `undefined`] |

### Return type

[**EquosVoice**](EquosVoice.md)

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


## listVoices

> ListEquosVoicesResponse listVoices(take, skip, client)

List Equos Voices.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { ListVoicesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new VoiceApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies ListVoicesRequest;

  try {
    const data = await api.listVoices(body);
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

[**ListEquosVoicesResponse**](ListEquosVoicesResponse.md)

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

