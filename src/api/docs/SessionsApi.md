# SessionsApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**sessionsControllerCreateV3**](SessionsApi.md#sessionscontrollercreatev3) | **POST** /v3/sessions | Start an Equos avatar sesssion. |
| [**sessionsControllerGetByIdV3**](SessionsApi.md#sessionscontrollergetbyidv3) | **GET** /v3/sessions/{id} | Get Equos Session by ID. |
| [**sessionsControllerListV3**](SessionsApi.md#sessionscontrollerlistv3) | **GET** /v3/sessions | List Equos Sessions. |
| [**sessionsControllerStopV3**](SessionsApi.md#sessionscontrollerstopv3) | **PATCH** /v3/sessions/{id}/stop | End an equos session. Returns null if already stopped or session was not found. |



## sessionsControllerCreateV3

> CreateEquosSessionResponse sessionsControllerCreateV3(createEquosSessionRequest)

Start an Equos avatar sesssion.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '';
import type { SessionsControllerCreateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // CreateEquosSessionRequest
    createEquosSessionRequest: ...,
  } satisfies SessionsControllerCreateV3Request;

  try {
    const data = await api.sessionsControllerCreateV3(body);
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
| **createEquosSessionRequest** | [CreateEquosSessionRequest](CreateEquosSessionRequest.md) |  | |

### Return type

[**CreateEquosSessionResponse**](CreateEquosSessionResponse.md)

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


## sessionsControllerGetByIdV3

> EquosSession sessionsControllerGetByIdV3(id)

Get Equos Session by ID.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '';
import type { SessionsControllerGetByIdV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // string | Equos Session ID
    id: id_example,
  } satisfies SessionsControllerGetByIdV3Request;

  try {
    const data = await api.sessionsControllerGetByIdV3(body);
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
| **id** | `string` | Equos Session ID | [Defaults to `undefined`] |

### Return type

[**EquosSession**](EquosSession.md)

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


## sessionsControllerListV3

> ListEquosSessionsResponse sessionsControllerListV3(take, skip, client)

List Equos Sessions.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '';
import type { SessionsControllerListV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies SessionsControllerListV3Request;

  try {
    const data = await api.sessionsControllerListV3(body);
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

[**ListEquosSessionsResponse**](ListEquosSessionsResponse.md)

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


## sessionsControllerStopV3

> EquosSession sessionsControllerStopV3(id)

End an equos session. Returns null if already stopped or session was not found.

### Example

```ts
import {
  Configuration,
  SessionsApi,
} from '';
import type { SessionsControllerStopV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new SessionsApi(config);

  const body = {
    // string | Equos Session ID
    id: id_example,
  } satisfies SessionsControllerStopV3Request;

  try {
    const data = await api.sessionsControllerStopV3(body);
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
| **id** | `string` | Equos Session ID | [Defaults to `undefined`] |

### Return type

[**EquosSession**](EquosSession.md)

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

