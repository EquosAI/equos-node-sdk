# FaceApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**faceControllerCreateV3**](FaceApi.md#facecontrollercreatev3) | **POST** /v3/faces | Create a new Equos Face. |
| [**faceControllerGetByIdV3**](FaceApi.md#facecontrollergetbyidv3) | **GET** /v3/faces/{id} | Get Equos Face by ID. |
| [**faceControllerListV3**](FaceApi.md#facecontrollerlistv3) | **GET** /v3/faces | List Equos Faces. |
| [**faceControllerSoftDeleteV3**](FaceApi.md#facecontrollersoftdeletev3) | **DELETE** /v3/faces/{id} | Delete an Equos Face. This action is irreversible. |



## faceControllerCreateV3

> EquosFace faceControllerCreateV3(createEquosFaceRequest)

Create a new Equos Face.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { FaceControllerCreateV3Request } from '';

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
  } satisfies FaceControllerCreateV3Request;

  try {
    const data = await api.faceControllerCreateV3(body);
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


## faceControllerGetByIdV3

> EquosFace faceControllerGetByIdV3(id)

Get Equos Face by ID.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { FaceControllerGetByIdV3Request } from '';

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
  } satisfies FaceControllerGetByIdV3Request;

  try {
    const data = await api.faceControllerGetByIdV3(body);
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


## faceControllerListV3

> ListEquosFacesResponse faceControllerListV3(take, skip, client)

List Equos Faces.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { FaceControllerListV3Request } from '';

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
  } satisfies FaceControllerListV3Request;

  try {
    const data = await api.faceControllerListV3(body);
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


## faceControllerSoftDeleteV3

> EquosFace faceControllerSoftDeleteV3(id)

Delete an Equos Face. This action is irreversible.

### Example

```ts
import {
  Configuration,
  FaceApi,
} from '';
import type { FaceControllerSoftDeleteV3Request } from '';

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
  } satisfies FaceControllerSoftDeleteV3Request;

  try {
    const data = await api.faceControllerSoftDeleteV3(body);
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

