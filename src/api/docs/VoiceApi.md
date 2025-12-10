# VoiceApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**voiceControllerCreateV3**](VoiceApi.md#voicecontrollercreatev3) | **POST** /v3/voices | Create a new Equos Voice. |
| [**voiceControllerGetByIdV3**](VoiceApi.md#voicecontrollergetbyidv3) | **GET** /v3/voices/{id} | Get Equos Voice by ID. |
| [**voiceControllerListV3**](VoiceApi.md#voicecontrollerlistv3) | **GET** /v3/voices | List Equos Voices. |
| [**voiceControllerSoftDeleteV3**](VoiceApi.md#voicecontrollersoftdeletev3) | **DELETE** /v3/voices/{id} | Delete an Equos Voice. This action is irreversible. |



## voiceControllerCreateV3

> EquosVoice voiceControllerCreateV3(createEquosVoiceRequest)

Create a new Equos Voice.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { VoiceControllerCreateV3Request } from '';

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
  } satisfies VoiceControllerCreateV3Request;

  try {
    const data = await api.voiceControllerCreateV3(body);
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


## voiceControllerGetByIdV3

> EquosVoice voiceControllerGetByIdV3(id)

Get Equos Voice by ID.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { VoiceControllerGetByIdV3Request } from '';

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
  } satisfies VoiceControllerGetByIdV3Request;

  try {
    const data = await api.voiceControllerGetByIdV3(body);
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


## voiceControllerListV3

> ListEquosVoicesResponse voiceControllerListV3(take, skip, client)

List Equos Voices.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { VoiceControllerListV3Request } from '';

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
  } satisfies VoiceControllerListV3Request;

  try {
    const data = await api.voiceControllerListV3(body);
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


## voiceControllerSoftDeleteV3

> EquosVoice voiceControllerSoftDeleteV3(id)

Delete an Equos Voice. This action is irreversible.

### Example

```ts
import {
  Configuration,
  VoiceApi,
} from '';
import type { VoiceControllerSoftDeleteV3Request } from '';

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
  } satisfies VoiceControllerSoftDeleteV3Request;

  try {
    const data = await api.voiceControllerSoftDeleteV3(body);
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

