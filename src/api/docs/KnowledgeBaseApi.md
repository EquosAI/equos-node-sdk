# KnowledgeBaseApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**knowledgeBaseControllerAddDocumentV3**](KnowledgeBaseApi.md#knowledgebasecontrolleradddocumentv3) | **POST** /v3/knowledge-bases/{id}/documents |  |
| [**knowledgeBaseControllerCreateKnowledgeBaseV3**](KnowledgeBaseApi.md#knowledgebasecontrollercreateknowledgebasev3) | **POST** /v3/knowledge-bases |  |
| [**knowledgeBaseControllerDeleteDocV3**](KnowledgeBaseApi.md#knowledgebasecontrollerdeletedocv3) | **DELETE** /v3/knowledge-bases/{id}/documents/{doc} |  |
| [**knowledgeBaseControllerDeleteV3**](KnowledgeBaseApi.md#knowledgebasecontrollerdeletev3) | **DELETE** /v3/knowledge-bases/{id} |  |
| [**knowledgeBaseControllerGetByIdV3**](KnowledgeBaseApi.md#knowledgebasecontrollergetbyidv3) | **GET** /v3/knowledge-bases/{id} |  |
| [**knowledgeBaseControllerIndexDocumentV3**](KnowledgeBaseApi.md#knowledgebasecontrollerindexdocumentv3) | **PATCH** /v3/knowledge-bases/{id}/documents/{doc}/index |  |
| [**knowledgeBaseControllerListV3**](KnowledgeBaseApi.md#knowledgebasecontrollerlistv3) | **GET** /v3/knowledge-bases |  |



## knowledgeBaseControllerAddDocumentV3

> knowledgeBaseControllerAddDocumentV3(id, body)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerAddDocumentV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies KnowledgeBaseControllerAddDocumentV3Request;

  try {
    const data = await api.knowledgeBaseControllerAddDocumentV3(body);
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
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## knowledgeBaseControllerCreateKnowledgeBaseV3

> knowledgeBaseControllerCreateKnowledgeBaseV3(body)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerCreateKnowledgeBaseV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // object
    body: Object,
  } satisfies KnowledgeBaseControllerCreateKnowledgeBaseV3Request;

  try {
    const data = await api.knowledgeBaseControllerCreateKnowledgeBaseV3(body);
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
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## knowledgeBaseControllerDeleteDocV3

> knowledgeBaseControllerDeleteDocV3(id, doc)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerDeleteDocV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string
    id: id_example,
    // string
    doc: doc_example,
  } satisfies KnowledgeBaseControllerDeleteDocV3Request;

  try {
    const data = await api.knowledgeBaseControllerDeleteDocV3(body);
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
| **doc** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## knowledgeBaseControllerDeleteV3

> knowledgeBaseControllerDeleteV3(id)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerDeleteV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies KnowledgeBaseControllerDeleteV3Request;

  try {
    const data = await api.knowledgeBaseControllerDeleteV3(body);
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

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## knowledgeBaseControllerGetByIdV3

> knowledgeBaseControllerGetByIdV3(id)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerGetByIdV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies KnowledgeBaseControllerGetByIdV3Request;

  try {
    const data = await api.knowledgeBaseControllerGetByIdV3(body);
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

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## knowledgeBaseControllerIndexDocumentV3

> knowledgeBaseControllerIndexDocumentV3(id, doc)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerIndexDocumentV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string
    id: id_example,
    // string
    doc: doc_example,
  } satisfies KnowledgeBaseControllerIndexDocumentV3Request;

  try {
    const data = await api.knowledgeBaseControllerIndexDocumentV3(body);
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
| **doc** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## knowledgeBaseControllerListV3

> knowledgeBaseControllerListV3(take, skip)



### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { KnowledgeBaseControllerListV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string
    take: take_example,
    // string
    skip: skip_example,
  } satisfies KnowledgeBaseControllerListV3Request;

  try {
    const data = await api.knowledgeBaseControllerListV3(body);
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
| **take** | `string` |  | [Defaults to `undefined`] |
| **skip** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[x-api-key](../README.md#x-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

