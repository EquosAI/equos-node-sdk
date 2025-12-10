# BrainApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**brainControllerCreateV3**](BrainApi.md#braincontrollercreatev3) | **POST** /v3/brains | Create a new Equos Brain. |
| [**brainControllerGetByIdV3**](BrainApi.md#braincontrollergetbyidv3) | **GET** /v3/brains/{id} | Get Equos Brain by ID. |
| [**brainControllerListV3**](BrainApi.md#braincontrollerlistv3) | **GET** /v3/brains | List Equos Brains. |
| [**brainControllerSoftDeleteV3**](BrainApi.md#braincontrollersoftdeletev3) | **DELETE** /v3/brains/{id} | Delete an Equos Brain. This action is irreversible. |



## brainControllerCreateV3

> EquosBrain brainControllerCreateV3(createEquosBrainRequest)

Create a new Equos Brain.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { BrainControllerCreateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new BrainApi(config);

  const body = {
    // CreateEquosBrainRequest
    createEquosBrainRequest: ...,
  } satisfies BrainControllerCreateV3Request;

  try {
    const data = await api.brainControllerCreateV3(body);
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
| **createEquosBrainRequest** | [CreateEquosBrainRequest](CreateEquosBrainRequest.md) |  | |

### Return type

[**EquosBrain**](EquosBrain.md)

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


## brainControllerGetByIdV3

> EquosBrain brainControllerGetByIdV3(id)

Get Equos Brain by ID.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { BrainControllerGetByIdV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new BrainApi(config);

  const body = {
    // string | Equos Brain ID
    id: id_example,
  } satisfies BrainControllerGetByIdV3Request;

  try {
    const data = await api.brainControllerGetByIdV3(body);
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
| **id** | `string` | Equos Brain ID | [Defaults to `undefined`] |

### Return type

[**EquosBrain**](EquosBrain.md)

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


## brainControllerListV3

> ListEquosBrainsResponse brainControllerListV3(take, skip, client)

List Equos Brains.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { BrainControllerListV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new BrainApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies BrainControllerListV3Request;

  try {
    const data = await api.brainControllerListV3(body);
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

[**ListEquosBrainsResponse**](ListEquosBrainsResponse.md)

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


## brainControllerSoftDeleteV3

> EquosBrain brainControllerSoftDeleteV3(id)

Delete an Equos Brain. This action is irreversible.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { BrainControllerSoftDeleteV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new BrainApi(config);

  const body = {
    // string | Equos Brain ID
    id: id_example,
  } satisfies BrainControllerSoftDeleteV3Request;

  try {
    const data = await api.brainControllerSoftDeleteV3(body);
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
| **id** | `string` | Equos Brain ID | [Defaults to `undefined`] |

### Return type

[**EquosBrain**](EquosBrain.md)

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

