# Verification flow

We are following very close the work of the OpenID Foundation on the [OpenID4VP](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) communication protocol. Since at the time of writing, *OpenID4VP* is still a draft, we implemented the custom verification flow **DIDroom4VP**. 

## Basics

The *DIDroom4VP* flow involves these main components: 
- **Wallet**: [DIDroom Wallet](https://github.com/ForkbombEu/wallet)
- **Verifier**: [DIDroom Verifier](https://github.com/ForkbombEu/verifier)
- **Relying_Party**: a microservices contained in [DIDroom Microservices](https://github.com/ForkbombEu/DIDroom_microservices)
- **W3C DID Service**: powered by a service running the W3C [did:dyne](https://dyne.org/W3C-DID/) method, also see the [DID explorer](https://explorer.did.dyne.org/)

We worked on separating the role of the **Relying_Party** (a trusted microservice) with the role of the **Verifier** (a mobile app being managed by a human). 

All the data communication happen directly (REST and response), except the communication between the Relying_Party and the Verifier at the end, which uses Firebase. 

We also use a microservice acting as a bridge between the Relying_Party and Firebase, which we ommitted in the diagram.


## Diagram: Verification Flow (Cross Device)



@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
actor Holder
participant Wallet
participant Relying_Party
participant Verifier
participant W3C_DID_Service

Holder -> Wallet : Start verification flow (Step 0)
Wallet -> Verifier : Scan QR code with Presentation Definition and Relying_Party URL (Step 1)
Wallet -> Wallet : Process Presentation Definition and start verification flow (Step 2)
Wallet -> Holder : Present list of candidate credentials (Step 3)
Holder -> Wallet : Select credential to be presented (Step 4)
Wallet -> Holder : Request consent (Step 5)
Holder -> Wallet : Acknowledge consent (Step 6)
Wallet -> Wallet : Produce Verifiable Presentation (Step 7)
Wallet -> Relying_Party : Send Verifiable Presentation (Step 8)
Relying_Party -> Relying_Party : Parse Verifiable Presentation and extract W3C_DID (Step 9)
Relying_Party -> W3C_DID_Service : Request W3C-DID of Credential Issuer (Step 10)
W3C_DID_Service -> Relying_Party : Return W3C-DID of Credential Issuer (Step 11)
Relying_Party -> Relying_Party : Verify signature using W3C-DID public key (Step 12)
Relying_Party -> Verifier : Send verification outcome and disclosed claims via Firebase (Step 13)
Verifier -> Verifier : Display outcome of verification (Step 14)
@enduml


----------

