---
title: Issuance (OpenID4VCI)
order: 20
---


# Issuance flow

The Issuance Flow is compatible with the [OpenID4VCI](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html) specification


## Basics

The *DIDroom4VCI* flow involves these main components: 
- **Wallet**: [DIDroom Wallet](https://github.com/ForkbombEu/wallet)
- **(Credential )Issuer**: a microservices contained in [DIDroom Microservices](https://github.com/ForkbombEu/DIDroom_microservices)
- **Authorization Server**: a microservices contained in [DIDroom Microservices](https://github.com/ForkbombEu/DIDroom_microservices)

We worked on separating the deployment of the **Authorization Server** and the **Credential Issuer**, which can optionally be deployed on the same server but consist of two indpependent microservices.

## Diagram: Issuance Flow



@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

actor Holder
participant Wallet
participant Issuer
participant AuthorizationServer


Issuer -> Holder : Step 1: Send Credential Offer with information and endpoints
Holder -> Wallet : Step 2: Scan Credential Offer or start issuance flow


Wallet -> Issuer : Step 3: Retrieve .well-known configuration file of the Issuer
Issuer -> Wallet : Step 3: Provide .well-known file with Authorization Server URL



Wallet -> AuthorizationServer : Step 4: Authorization Request with requested credentials
AuthorizationServer -> AuthorizationServer : Step 5: Authenticate Holder and request consent
AuthorizationServer -> Wallet : Step 6: Authorization Code
Wallet -> AuthorizationServer : Step 7: Token Request with Authorization Code
AuthorizationServer -> Wallet : Step 8: Access Token


Wallet -> Issuer : Step 9: Credential Request with Access Token and required data
Issuer -> Issuer : Step 10: Process Credential Request
Issuer -> Wallet : Step 11: Issue Verifiable Credential
Wallet -> Holder : Step 12: Store Verifiable Credential in Wallet
@enduml



----------

