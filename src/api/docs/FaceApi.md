# FaceApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFace**](FaceApi.md#createface) | **POST** /v3/faces | Create a new Equos Face. |
| [**deleteFace**](FaceApi.md#deleteface) | **DELETE** /v3/faces/{id} | Delete an Equos Face. This action is irreversible. |
| [**getFace**](FaceApi.md#getface) | **GET** /v3/faces/{id} | Get Equos Face by ID. |
| [**listFaces**](FaceApi.md#listfaces) | **GET** /v3/faces | List Equos Faces. |



## createFace

> EquosFace createFace(createEquosFaceRequest)

Create a new Equos Face.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { CreateFaceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new FaceApi(config);

  const body = {
    // CreateEquosFaceRequest
    createEquosFaceRequest: ...,
  } satisfies CreateFaceRequest;

  try {
    const data = await api.createFace(body);
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
| **createEquosFaceRequest** | [CreateEquosFaceRequest](CreateEquosFaceRequest.md) |  | |

### Return type

[**EquosFace**](EquosFace.md)

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


## deleteFace

> EquosFace deleteFace(id)

Delete an Equos Face. This action is irreversible.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { DeleteFaceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new FaceApi(config);

  const body = {
    // string | Equos Face ID
    id: id_example,
  } satisfies DeleteFaceRequest;

  try {
    const data = await api.deleteFace(body);
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
| **id** | `string` | Equos Face ID | [Defaults to `undefined`] |

### Return type

[**EquosFace**](EquosFace.md)

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


## getFace

> EquosFace getFace(id)

Get Equos Face by ID.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { GetFaceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new FaceApi(config);

  const body = {
    // string | Equos Face ID
    id: id_example,
  } satisfies GetFaceRequest;

  try {
    const data = await api.getFace(body);
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
| **id** | `string` | Equos Face ID | [Defaults to `undefined`] |

### Return type

[**EquosFace**](EquosFace.md)

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


## listFaces

> ListEquosFacesResponse listFaces(take, skip, client)

List Equos Faces.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { ListFacesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new FaceApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies ListFacesRequest;

  try {
    const data = await api.listFaces(body);
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

[**ListEquosFacesResponse**](ListEquosFacesResponse.md)

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

