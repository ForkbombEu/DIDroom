 
# DIDroom backend

#### Ask to join an organization 
```http
  POST /api/collections/orgAuthorizations/records
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `organization` | `string` | **Required**. Organization id |
| `user` | `string` | **Required**. User id |
| `status` | `string` | **Required**. 'pending' |


#### List of the orgs I'm part of
```http
  GET /api/collections/orgAuthorizations/records?filter=(user='{userId}')&&expand=organization&&fields=expand.organization.name
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required**. User id |

#### List of services of my org
```http
  GET /api/collections/services/records?filters=(organization='{orgId}')
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `orgId` | `string` | **Required**. Organization id |

#### List of WebAuthn sessions/devices
```http
  GET /api/collections/webauthnCredentials/records?filter=(user='{userId}')
  POST/api/collections/sessionDataWebauthn/records?filter=(user='{userId}')
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required**. User id |

#### My profile info
```http
  GET /api/collections/users/records/:{userId}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required**. User id |

#### Register WebAuthn a new method (device) init
```http
  GET /api/webauthn/register/begin/{username}
```            

#### Register WebAuthn a new method (device) init
```http
  GET `/api/webauthn/register/finish/{username}
```

#### Update profile
```http
  POST /api/collections/users/records/:{userId}
```

