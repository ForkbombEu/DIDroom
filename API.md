# API draft specs for the DIDroom solution components

Below the very first draft for The
  - Authorization server
  - Credential issuer
  - DIDroom backend

## Authorization server

#### `/api/auth/:serviceId/authorization`

The Wallet holder asks for a access token for a specified service/verifiable credential
Then the deferred credential issuer will be given an access_token

#### `/auth/access_token`

Validates the provided access token and retrieves details associated with the access token.


## Credential issuer

#### `/vc/single/parse`
Analyzes and verifies the incoming credential request, providing detailed information regarding the request.

#### `/vc/single/issue`
Generates a verifiable credential or a transaction ID and readies the credential response.

#### `/vci/batch/issue`
Issues multiple verifiable credentials or transaction IDs in a batch, preparing the corresponding credential responses.

#### `/vci/offer/create`
Creates an offer for a verifiable credential or transaction ID, detailing terms and information for the issuance.

#### `/vci/offer/info`
Provides information about an existing offer for a verifiable credential or transaction ID, including terms and associated details.


## DIDroom backend

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

