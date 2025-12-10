# BrainApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBrain**](BrainApi.md#createbrain) | **POST** /v3/brains | Create a new Equos Brain. |
| [**deleteBrain**](BrainApi.md#deletebrain) | **DELETE** /v3/brains/{id} | Delete an Equos Brain. This action is irreversible. |
| [**getBrain**](BrainApi.md#getbrain) | **GET** /v3/brains/{id} | Get Equos Brain by ID. |
| [**listBrains**](BrainApi.md#listbrains) | **GET** /v3/brains | List Equos Brains. |



## createBrain

> EquosBrain createBrain(createEquosBrainRequest)

Create a new Equos Brain.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { CreateBrainRequest } from '';

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
  } satisfies CreateBrainRequest;

  try {
    const data = await api.createBrain(body);
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


## deleteBrain

> EquosBrain deleteBrain(id)

Delete an Equos Brain. This action is irreversible.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { DeleteBrainRequest } from '';

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
  } satisfies DeleteBrainRequest;

  try {
    const data = await api.deleteBrain(body);
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


## getBrain

> EquosBrain getBrain(id)

Get Equos Brain by ID.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { GetBrainRequest } from '';

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
  } satisfies GetBrainRequest;

  try {
    const data = await api.getBrain(body);
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


## listBrains

> ListEquosBrainsResponse listBrains(take, skip, client)

List Equos Brains.

### Example

```ts
import {
  Configuration,
  BrainApi,
} from '';
import type { ListBrainsRequest } from '';

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
  } satisfies ListBrainsRequest;

  try {
    const data = await api.listBrains(body);
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

