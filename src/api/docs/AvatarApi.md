# AvatarApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**avatarControllerArchiveV3**](AvatarApi.md#avatarcontrollerarchivev3) | **DELETE** /v3/avatars/{id} | Delete an Equos Avatar. This action is irreversible. |
| [**avatarControllerCreateV3**](AvatarApi.md#avatarcontrollercreatev3) | **POST** /v3/avatars | Create a new Equos Avatar. |
| [**avatarControllerGetByIdV3**](AvatarApi.md#avatarcontrollergetbyidv3) | **GET** /v3/avatars/{id} | Get Equos Avatar by ID. |
| [**avatarControllerListV3**](AvatarApi.md#avatarcontrollerlistv3) | **GET** /v3/avatars | List Equos Avatars. |
| [**avatarControllerUpdateV3**](AvatarApi.md#avatarcontrollerupdatev3) | **PUT** /v3/avatars/{id} | Update an Equos Avatar. |



## avatarControllerArchiveV3

> EquosAvatar avatarControllerArchiveV3(id)

Delete an Equos Avatar. This action is irreversible.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from '';
import type { AvatarControllerArchiveV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarApi(config);

  const body = {
    // string | Equos Avatar ID
    id: id_example,
  } satisfies AvatarControllerArchiveV3Request;

  try {
    const data = await api.avatarControllerArchiveV3(body);
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
| **id** | `string` | Equos Avatar ID | [Defaults to `undefined`] |

### Return type

[**EquosAvatar**](EquosAvatar.md)

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


## avatarControllerCreateV3

> EquosAvatar avatarControllerCreateV3(createEquosAvatarRequest)

Create a new Equos Avatar.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from '';
import type { AvatarControllerCreateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarApi(config);

  const body = {
    // CreateEquosAvatarRequest
    createEquosAvatarRequest: ...,
  } satisfies AvatarControllerCreateV3Request;

  try {
    const data = await api.avatarControllerCreateV3(body);
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
| **createEquosAvatarRequest** | [CreateEquosAvatarRequest](CreateEquosAvatarRequest.md) |  | |

### Return type

[**EquosAvatar**](EquosAvatar.md)

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


## avatarControllerGetByIdV3

> EquosAvatar avatarControllerGetByIdV3(id)

Get Equos Avatar by ID.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from '';
import type { AvatarControllerGetByIdV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarApi(config);

  const body = {
    // string | Equos Avatar ID
    id: id_example,
  } satisfies AvatarControllerGetByIdV3Request;

  try {
    const data = await api.avatarControllerGetByIdV3(body);
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
| **id** | `string` | Equos Avatar ID | [Defaults to `undefined`] |

### Return type

[**EquosAvatar**](EquosAvatar.md)

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


## avatarControllerListV3

> ListEquosAvatarsResponse avatarControllerListV3(take, skip, client)

List Equos Avatars.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from '';
import type { AvatarControllerListV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarApi(config);

  const body = {
    // number (optional)
    take: 8.14,
    // number (optional)
    skip: 8.14,
    // string (optional)
    client: client_example,
  } satisfies AvatarControllerListV3Request;

  try {
    const data = await api.avatarControllerListV3(body);
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

[**ListEquosAvatarsResponse**](ListEquosAvatarsResponse.md)

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


## avatarControllerUpdateV3

> EquosAvatar avatarControllerUpdateV3(id, updateEquosAvatarRequest)

Update an Equos Avatar.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from '';
import type { AvatarControllerUpdateV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: x-api-key
    apiKey: "YOUR API KEY",
  });
  const api = new AvatarApi(config);

  const body = {
    // string
    id: id_example,
    // UpdateEquosAvatarRequest
    updateEquosAvatarRequest: ...,
  } satisfies AvatarControllerUpdateV3Request;

  try {
    const data = await api.avatarControllerUpdateV3(body);
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
| **updateEquosAvatarRequest** | [UpdateEquosAvatarRequest](UpdateEquosAvatarRequest.md) |  | |

### Return type

[**EquosAvatar**](EquosAvatar.md)

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

