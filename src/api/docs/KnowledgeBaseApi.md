# KnowledgeBaseApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDocument**](KnowledgeBaseApi.md#adddocument) | **POST** /v3/knowledge-bases/{id}/documents | Add a document to a Knowledge Base. |
| [**createKnowledgeBase**](KnowledgeBaseApi.md#createknowledgebaseoperation) | **POST** /v3/knowledge-bases | Create a new Knowledge Base. |
| [**deleteDocument**](KnowledgeBaseApi.md#deletedocument) | **DELETE** /v3/knowledge-bases/{id}/documents/{doc} | Delete a document from a Knowledge Base. |
| [**deleteKnowledgeBase**](KnowledgeBaseApi.md#deleteknowledgebase) | **DELETE** /v3/knowledge-bases/{id} | Delete a Knowledge Base. This action is irreversible. |
| [**getKnowledgeBase**](KnowledgeBaseApi.md#getknowledgebase) | **GET** /v3/knowledge-bases/{id} | Get Knowledge Base by ID. |
| [**indexDocument**](KnowledgeBaseApi.md#indexdocument) | **PATCH** /v3/knowledge-bases/{id}/documents/{doc}/index | Index a document in a Knowledge Base. |
| [**listKnowledgeBases**](KnowledgeBaseApi.md#listknowledgebases) | **GET** /v3/knowledge-bases | List Knowledge Bases. |



## addDocument

> CreateDocumentResponse addDocument(id, createDocumentRequest)

Add a document to a Knowledge Base.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { AddDocumentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string | Knowledge Base ID
    id: id_example,
    // CreateDocumentRequest
    createDocumentRequest: ...,
  } satisfies AddDocumentRequest;

  try {
    const data = await api.addDocument(body);
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
| **id** | `string` | Knowledge Base ID | [Defaults to `undefined`] |
| **createDocumentRequest** | [CreateDocumentRequest](CreateDocumentRequest.md) |  | |

### Return type

[**CreateDocumentResponse**](CreateDocumentResponse.md)

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


## createKnowledgeBase

> EquosKnowledgeBase createKnowledgeBase(createKnowledgeBaseRequest)

Create a new Knowledge Base.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { CreateKnowledgeBaseOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // CreateKnowledgeBaseRequest
    createKnowledgeBaseRequest: ...,
  } satisfies CreateKnowledgeBaseOperationRequest;

  try {
    const data = await api.createKnowledgeBase(body);
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
| **createKnowledgeBaseRequest** | [CreateKnowledgeBaseRequest](CreateKnowledgeBaseRequest.md) |  | |

### Return type

[**EquosKnowledgeBase**](EquosKnowledgeBase.md)

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


## deleteDocument

> EquosDocument deleteDocument(id, doc)

Delete a document from a Knowledge Base.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { DeleteDocumentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string | Knowledge Base ID
    id: id_example,
    // string | Document ID
    doc: doc_example,
  } satisfies DeleteDocumentRequest;

  try {
    const data = await api.deleteDocument(body);
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
| **id** | `string` | Knowledge Base ID | [Defaults to `undefined`] |
| **doc** | `string` | Document ID | [Defaults to `undefined`] |

### Return type

[**EquosDocument**](EquosDocument.md)

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


## deleteKnowledgeBase

> EquosKnowledgeBase deleteKnowledgeBase(id)

Delete a Knowledge Base. This action is irreversible.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { DeleteKnowledgeBaseRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string | Knowledge Base ID
    id: id_example,
  } satisfies DeleteKnowledgeBaseRequest;

  try {
    const data = await api.deleteKnowledgeBase(body);
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
| **id** | `string` | Knowledge Base ID | [Defaults to `undefined`] |

### Return type

[**EquosKnowledgeBase**](EquosKnowledgeBase.md)

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


## getKnowledgeBase

> EquosKnowledgeBase getKnowledgeBase(id)

Get Knowledge Base by ID.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { GetKnowledgeBaseRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string | Knowledge Base ID
    id: id_example,
  } satisfies GetKnowledgeBaseRequest;

  try {
    const data = await api.getKnowledgeBase(body);
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
| **id** | `string` | Knowledge Base ID | [Defaults to `undefined`] |

### Return type

[**EquosKnowledgeBase**](EquosKnowledgeBase.md)

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


## indexDocument

> EquosDocument indexDocument(id, doc)

Index a document in a Knowledge Base.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { IndexDocumentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // string | Knowledge Base ID
    id: id_example,
    // string | Document ID
    doc: doc_example,
  } satisfies IndexDocumentRequest;

  try {
    const data = await api.indexDocument(body);
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
| **id** | `string` | Knowledge Base ID | [Defaults to `undefined`] |
| **doc** | `string` | Document ID | [Defaults to `undefined`] |

### Return type

[**EquosDocument**](EquosDocument.md)

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


## listKnowledgeBases

> ListEquosKnowledgeBasesResponse listKnowledgeBases(take, skip, client)

List Knowledge Bases.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseApi,
} from '';
import type { ListKnowledgeBasesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new KnowledgeBaseApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies ListKnowledgeBasesRequest;

  try {
    const data = await api.listKnowledgeBases(body);
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

[**ListEquosKnowledgeBasesResponse**](ListEquosKnowledgeBasesResponse.md)

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

