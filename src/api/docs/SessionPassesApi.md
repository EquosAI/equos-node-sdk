# SessionPassesApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**sessionPassesControllerStartV3**](SessionPassesApi.md#sessionpassescontrollerstartv3) | **POST** /v3/session-passes | Start an Equos avatar sesssion. |
| [**sessionPassesControllerStopV3**](SessionPassesApi.md#sessionpassescontrollerstopv3) | **PATCH** /v3/session-passes/{id}/stop | End an equos session. Returns null if already stopped or session was not found. |



## sessionPassesControllerStartV3

> CreateEquosSessionResponse sessionPassesControllerStartV3(createSessionPassRequest)

Start an Equos avatar sesssion.

### Example

```ts
import {
  Configuration,
  SessionPassesApi,
} from '';
import type { SessionPassesControllerStartV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clientAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SessionPassesApi(config);

  const body = {
    // CreateSessionPassRequest
    createSessionPassRequest: ...,
  } satisfies SessionPassesControllerStartV3Request;

  try {
    const data = await api.sessionPassesControllerStartV3(body);
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
| **createSessionPassRequest** | [CreateSessionPassRequest](CreateSessionPassRequest.md) |  | |

### Return type

[**CreateEquosSessionResponse**](CreateEquosSessionResponse.md)

### Authorization

[clientAuth](../README.md#clientAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sessionPassesControllerStopV3

> EquosSession sessionPassesControllerStopV3(id)

End an equos session. Returns null if already stopped or session was not found.

### Example

```ts
import {
  Configuration,
  SessionPassesApi,
} from '';
import type { SessionPassesControllerStopV3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: clientAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SessionPassesApi(config);

  const body = {
    // string | Equos Session ID
    id: id_example,
  } satisfies SessionPassesControllerStopV3Request;

  try {
    const data = await api.sessionPassesControllerStopV3(body);
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

[clientAuth](../README.md#clientAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

