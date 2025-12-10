# AgentApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**agentControllerArchiveV3**](AgentApi.md#agentcontrollerarchivev3) | **DELETE** /v3/agents/{id} | Delete an Equos Agent. This action is irreversible. |
| [**agentControllerCreateV3**](AgentApi.md#agentcontrollercreatev3) | **POST** /v3/agents | Create a new Equos Agent. |
| [**agentControllerGetByIdV3**](AgentApi.md#agentcontrollergetbyidv3) | **GET** /v3/agents/{id} | Get Equos Agent by ID. |
| [**agentControllerListV3**](AgentApi.md#agentcontrollerlistv3) | **GET** /v3/agents | List Equos Agents. |
| [**agentControllerUpdateV3**](AgentApi.md#agentcontrollerupdatev3) | **PUT** /v3/agents/{id} | Update an Equos Agent. |



## agentControllerArchiveV3

> EquosAgent agentControllerArchiveV3(id)

Delete an Equos Agent. This action is irreversible.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '';
import type { AgentControllerArchiveV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AgentApi(config);

  const body = {
    // string | Equos Agent ID
    id: id_example,
  } satisfies AgentControllerArchiveV3Request;

  try {
    const data = await api.agentControllerArchiveV3(body);
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
| **id** | `string` | Equos Agent ID | [Defaults to `undefined`] |

### Return type

[**EquosAgent**](EquosAgent.md)

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


## agentControllerCreateV3

> EquosAgent agentControllerCreateV3(createEquosAgentRequest)

Create a new Equos Agent.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '';
import type { AgentControllerCreateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AgentApi(config);

  const body = {
    // CreateEquosAgentRequest
    createEquosAgentRequest: ...,
  } satisfies AgentControllerCreateV3Request;

  try {
    const data = await api.agentControllerCreateV3(body);
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
| **createEquosAgentRequest** | [CreateEquosAgentRequest](CreateEquosAgentRequest.md) |  | |

### Return type

[**EquosAgent**](EquosAgent.md)

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


## agentControllerGetByIdV3

> EquosAgent agentControllerGetByIdV3(id)

Get Equos Agent by ID.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '';
import type { AgentControllerGetByIdV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AgentApi(config);

  const body = {
    // string | Equos Agent ID
    id: id_example,
  } satisfies AgentControllerGetByIdV3Request;

  try {
    const data = await api.agentControllerGetByIdV3(body);
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
| **id** | `string` | Equos Agent ID | [Defaults to `undefined`] |

### Return type

[**EquosAgent**](EquosAgent.md)

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


## agentControllerListV3

> ListEquosAgentsResponse agentControllerListV3(take, skip, client)

List Equos Agents.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '';
import type { AgentControllerListV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AgentApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies AgentControllerListV3Request;

  try {
    const data = await api.agentControllerListV3(body);
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

[**ListEquosAgentsResponse**](ListEquosAgentsResponse.md)

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


## agentControllerUpdateV3

> EquosAgent agentControllerUpdateV3(id, updateEquosAgentRequest)

Update an Equos Agent.

### Example

```ts
import {
  Configuration,
  AgentApi,
} from '';
import type { AgentControllerUpdateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AgentApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateEquosAgentRequest
    updateEquosAgentRequest: ...,
  } satisfies AgentControllerUpdateV3Request;

  try {
    const data = await api.agentControllerUpdateV3(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateEquosAgentRequest** | [UpdateEquosAgentRequest](UpdateEquosAgentRequest.md) |  | |

### Return type

[**EquosAgent**](EquosAgent.md)

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

