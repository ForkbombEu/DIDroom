# 💡 The Solution
Our solution is divided into different repositories, each focusing on a specific component. This modular approach allows us to maintain flexibility and scalability, enabling users to customize and integrate the solution according to their specific needs and requirements.

## Mobile Zencode
   Zencode Mobile holds all the business logic and contracts shared between the different components of the DiDRoom Solution. It serves as a centralized repository for managing and updating the core business logic used across various mobile applications and components.
   - [GitHub](https://github.com/forkbombeu/mobile_zencode)

## DiDRoom control room / Dashboard
   The Didroom Control Room/Dashboard serves as the central hub for managing decentralized identity solutions. It provides a user-friendly interface for configuring settings, monitoring performance, and accessing key functionalities.
   - [GitHub](https://github.com/forkbombeu/signroom)
   - [Public beta](https://beta.signroom.io)

## Didroom microservices
   Didroom microservices are generated using No-code-room (NCR) and utilize the Zencode Mobile repository to create three different microservices:
   - **Credential Issuers**: These microservices are compliant with Openid4VCI standards and handle the issuance of credentials.
   - **Authorization Server**: These microservices implement OAuth2 and work seamlessly with our DID Service for authentication and authorization.
   - **Relying Party**: These microservices are compliant with Openid4VP standards and act as relying parties for authentication and authorization.
   - [GitHub](https://github.com/forkbombeu/didroom_microservices)


## Wallet Holder App
   The Wallet Holder App offers a secure and user-friendly interface for managing decentralized identities and digital credentials. It allows users to store, view, and share their identity information with ease inside a TEE (Trusted execution environment) directly on citizens devices.
   - [GitHub](https://github.com/forkbombeu/wallet)
   - [Latest relase](https://github.com/ForkbombEu/wallet/releases/latest/download/wallet.apk)

## Verifier App
   The Verifier App provides tools for verifying the authenticity and validity of decentralized identities and digital credentials. It enables organizations to validate identity claims and ensure compliance with regulatory requirements.
   - [GitHub](https://github.com/forkbombeu/verifier)
   - [Latest relase](https://github.com/ForkbombEu/verifier/releases/latest/download/wallet.apk)

## Didroom web components
   DiDRoom Web Components hold all the UI web components used across all the projects to ensure a coherent Atomic design and allow for white-labeling.
   - [Storybook](https://forkbombeu.github.io/didroom-components)
   - [GitHub](https://github.com/forkbombeu/didroom-components)