<div align="center">

# DIDroom

### Multi-platform, multi-functional Identity/SSI wallet

</div>

<p align="center">
  <a href="https://forkbomb.solutions/solution/didroom/">
    <img src="/images/DIDroom_logo.png" width="170">
  </a>
</p>


---
<br><br>


## DIDroom Features

DIDroom is an open-source multiplatform and multifunctional Identity DID/SSI wallet, compliant with the W3C-DID and W3C-VC standards and with the current “The European Digital Identity Wallet Architecture and Reference Framework” (EUDI – ARF, version 1.0.0 from January 2023) which is the technical core of the eIDAS 2.0 regulation. DIDroom will also have advanced cryptographic and blockchain functions, including signatures, multi-signatures and blockchain interoperability (for Ethereum, Hyperledger Fabric and Sawtooth, and Planetmint)

DIDroom is based on a stack of open-source components and middlewares implemented by the Dyne.org Foundation during several H2020 and EC-funded research projects. The relevant components of the Zenroom ecosystem are:

 - [dyne/zenroom] The cryptographic virtual machine “Zenroom”: a multi-platform virtual machine for cryptography (signatures, hashes, multisignature, zero knowledge proof, quantum proof cryptography) blockchain interoperability (Ethereum, Hyperledger Fabric and Sawtooth, Bitcoin, Planetmint), that supports W3C-DID and W3C.VC natively

 - [dyne/W3C-DID] Dyne.org’s W3C-DID implementation: a federated 4-levels W3C-DID method, supporting multiple storage mechanisms (filesystem, databases, blockchains, Git, IPFS) with a builtin explorer. Intro: https://forkbomb.eu/products/w3c-did/ repo:  
    https://dyne.github.io/W3C-DID explorer: https://explorer.did.dyne.org/

 - [dyne/zenswarm] Zenswarm: blockchain oracle technology built for blockchain interoperability and offchain cryptography, with a built-in off-chain consensus algorithm, using Zenroom at its core and developed within the EBSI PCP, intro: https://forkbomb.eu/products/zenswarmrepo: https://github.com/dyne/zenswarm

 - [forkbombeu/signroom] Signroom: Open source, modular, easy to extend, web-based service, leveraging Zenroom’s cryptographic capabilities, allowing users sign documents and objects, using W3C-DID identities.


<br>

<div id="toc">

### 🚩 Table of Contents

- [💾 Install](#-install)
- [🎮 Quick start](#-quick-start)
- [🚑 Community & support](#-community--support)
- [🐋 Docker](#-docker)
- [🐝 API](#-api)
- [🔧 Configuration](#-configuration)
- [📋 Testing](#-testing)
- [🐛 Troubleshooting & debugging](#-troubleshooting--debugging)
- [😍 Acknowledgements](#-acknowledgements)
- [👤 Contributing](#-contributing)
- [💼 License](#-license)

</div>

***
## 💾 Install
```TBD```


**[🔝 back to top](#toc)**

***
## 🎮 Quick start

To start using DIDroom run the following command in the root folder

```bash
docker compose up
```

**[🔝 back to top](#toc)**

***
## 🚑 Community & support

**[📝 Documentation](#toc)** - Getting started and more.

**[🌱 Ecosystem](https://github.com/dyne/ecosystem)** - Plugins, resources, and more.

**[🚩 Issues](../../issues)** - Bugs end errors you encounter using DIDroom.

**[💬 Discussions](../../discussions)** - Get help, ask questions, request features, and discuss DIDroom.

**[📖 Example](https://github.com/DIDroom/example)** - An example repository that uses DIDroom.

**[🔝 back to top](#toc)**

***
## 🐋 Docker

Please refer to [DOCKER PACKAGES](../../packages)


**[🔝 back to top](#toc)**

***
## 🐝 API

Available endpoints

### POST /token

Execute a transaction with some amount

**Parameters**

|          Name | Required |  Type   | Description       | 
| -------------:|:--------:|:-------:| ------------------|
|       `token` | required | string  | Type of token. Accepted values `idea` or `strength`  |
|       `amount`| required | number  | Transaction's token amount |
|       `owner` | required | ULID    | The ULID of the Agent's owner |
 
### GET /token/${request.token}/${request.owner}

Retrieves the actual value of the token type for the specified owner


**[🔝 back to top](#toc)**

***
## 🔧 Configuration

**[🔝 back to top](#toc)**

***

## 📋 Testing

**[🔝 back to top](#toc)**

***
## 🐛 Troubleshooting & debugging

**[🔝 back to top](#toc)**

***
## 😍 Acknowledgements

Copyleft 🄯 2023 by [The Forkbomb Company](https://www.forkbomb.solutions), Amsterdam

**[🔝 back to top](#toc)**

***
## 👤 Contributing

Please first take a look at the [The Forkbomb Company - Contributor License Agreement](CONTRIBUTING.md) then

1.  🔀 [FORK IT](../../fork)
2.  Create your feature branch `git checkout -b feature/branch`
3.  Commit your changes `git commit -am 'feat: New feature\ncloses #398'`
4.  Push to the branch `git push origin feature/branch`
5.  Create a new Pull Request `gh pr create -f`
6.  🙏 Thank you


**[🔝 back to top](#toc)**

***
## 💼 License
    DIDroom - Multi-platform, multi-functional Identity/SSI wallet
    Copyleft 🄯 2023 The Forkbomb Company, Amsterdam

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

**[🔝 back to top](#toc)**
