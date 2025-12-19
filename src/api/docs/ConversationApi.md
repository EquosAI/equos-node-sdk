# ConversationApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConversationById**](ConversationApi.md#getconversationbyid) | **GET** /v3/conversations/{id} | Get Equos conversation by id. |
| [**listConversations**](ConversationApi.md#listconversations) | **GET** /v3/conversations | List Equos conversations. |
| [**startConversation**](ConversationApi.md#startconversation) | **POST** /v3/conversations | Start an Equos avatar sesssion. |
| [**stopConversation**](ConversationApi.md#stopconversation) | **POST** /v3/conversations/{id}/stop | Stop a conversation. Returns null if already stopped or conversation was not found. |



## getConversationById

> EquosConversation getConversationById(id)

Get Equos conversation by id.

### Example

```ts
import {
  Configuration,
  ConversationApi,
} from '';
import type { GetConversationByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationApi(config);

  const body = {
    // string | Equos conversation id.
    id: id_example,
  } satisfies GetConversationByIdRequest;

  try {
    const data = await api.getConversationById(body);
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
| **id** | `string` | Equos conversation id. | [Defaults to `undefined`] |

### Return type

[**EquosConversation**](EquosConversation.md)

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


## listConversations

> ListEquosConversationsResponse listConversations(take, skip, client)

List Equos conversations.

### Example

```ts
import {
  Configuration,
  ConversationApi,
} from '';
import type { ListConversationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies ListConversationsRequest;

  try {
    const data = await api.listConversations(body);
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

[**ListEquosConversationsResponse**](ListEquosConversationsResponse.md)

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


## startConversation

> CreateEquosConversationResponse startConversation(createEquosConversationRequest)

Start an Equos avatar sesssion.

### Example

```ts
import {
  Configuration,
  ConversationApi,
} from '';
import type { StartConversationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationApi(config);

  const body = {
    // CreateEquosConversationRequest
    createEquosConversationRequest: ...,
  } satisfies StartConversationRequest;

  try {
    const data = await api.startConversation(body);
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
| **createEquosConversationRequest** | [CreateEquosConversationRequest](CreateEquosConversationRequest.md) |  | |

### Return type

[**CreateEquosConversationResponse**](CreateEquosConversationResponse.md)

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


## stopConversation

> EquosConversation stopConversation(id)

Stop a conversation. Returns null if already stopped or conversation was not found.

### Example

```ts
import {
  Configuration,
  ConversationApi,
} from '';
import type { StopConversationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new ConversationApi(config);

  const body = {
    // string | Equos conversation id
    id: id_example,
  } satisfies StopConversationRequest;

  try {
    const data = await api.stopConversation(body);
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
| **id** | `string` | Equos conversation id | [Defaults to `undefined`] |

### Return type

[**EquosConversation**](EquosConversation.md)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

