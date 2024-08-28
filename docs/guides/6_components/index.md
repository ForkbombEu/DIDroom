# 📑 Concepts/Components


## Issuance and Verification Flows 

The flows contain the **general setup for the Issuance and Verification**, with focus on the parameters for a specific credential, such as name, description, logo, microservices issueing/verifying those. **The business logic and data structures** for the Issuance and Verification are **contained in templates**, which can be **selected inside the Issuance and Verification Flows**. The complexity within the protocols and cryptography and hidden behind the DIDroom Control room, the specs are in the pages [Issuance flow](./issuance.md) and [Verification flow](./verification.md). 



## Templates

they contain the business logic of *authorization*, *issuance* and *verification* flows along with the data structures used in the flows. An issuance flow contains two templates: 
  - The Authorization template (governs the business logic of the Authorization Server)
  - The Issuance template (governs the business logic of the Credential Issuance)

The idea behind this separation, is **to allow the user mix and re-use templates in multiple credential issuance flows**.

The same template can be used in multiple flows, for example for a credential that has 3 different expiries (1 month, 6 months and 12 month). Or for example two Issuance Flows can use the same Authorization template (cause the Authorization process is the same for both) but two different issuance template (cause the Credential Issuer will need to write different data in the two credentials).

---------

**Decentralized Identifier (DID)**: A globally unique, self-sovereign identifier that enables individuals and entities to have control over their digital identities without relying on centralized authorities.

**EUDI-ARF**: Acronym for "The European Digital Identity Wallet Architecture and Reference Framework," a technical core of the eIDAS 2.0 regulation that outlines standards for digital identity wallets.

**eIDAS 2.0 Regulation**: The updated version of the eIDAS (electronic Identification, Authentication and Trust Services) regulation that sets standards for electronic identification and trusted services within the European Union.

**Self-Sovereign Identity (SSI)**: A decentralized identity model that enables individuals to have full control over their digital identity and personal data. SSI allows users to manage and share verifiable credentials without the need for intermediaries.

**Verifiable Credentials (VC)**: Digital attestations that enable the issuance and verification of claims about a subject's identity, attributes, or qualifications.

**Wallet**: In the context of DidRoom, a software application or platform that allows users to manage their digital identities, store cryptographic keys, create and manage DIDs, and interact with blockchain networks and verifiable credentials.

**Zero-Knowledge Proofs**: Cryptographic methods that allow a party to prove knowledge of a certain value or statement without revealing the actual value itself. Zero-knowledge proofs enhance privacy and security by demonstrating knowledge without disclosing sensitive information.

**W3C-DID**: Abbreviation for "W3C Decentralized Identifier," a standard by the World Wide Web Consortium (W3C) for creating, managing, and resolving decentralized identifiers.

**W3C-VC**: Abbreviation for "W3C Verifiable Credentials," a standard by the World Wide Web Consortium (W3C) for creating and verifying digital credentials in a secure and interoperable manner.

**Zenroom**: A cryptographic virtual machine developed by Dyne.org Foundation, capable of performing various cryptographic operations and supporting blockchain interoperability.

**Zenswarm**: A blockchain oracle technology developed for blockchain interoperability and off-chain cryptography, utilizing Zenroom at its core.
