---
title: Basics
order: 10
---


Here we explain the *Basics* on how the Credential Issuance and Verification flow, defining the basic concepts and components you will work with. 

## Templates

The templates contain the core logic that govern the issuance and verification flows.

- **What is a template?**
  > [!IMPORTANT] 
  >  Templates contain (re-usable) business logic for issuance and verification flow. Templates are scripted in *Zencode* executed by Zenroom and Slangroom, check the [🏗️ Core Technologies](/core-technologies) to know more.
  
- **Where and how do I use a template?**

  Templates are used in *issuance Flows* and *Verification Flows*. When editing a flow, you can select the desired template from a dropdown.

- **How do edit a template?**
  Inside the Template editor, in the DIDroom Dashboard. If you want to test the code, you may want to use the [Slangroom editor](https://dyne.org/slangroom/) or [Apiroom](https://apiroom.net/).

- **Where are templates executed?**
  Depending if it's an *Authorization*, *Issuance* or *Verification*, the templates are executed inside a Microservice, inside the Wallet or inside the Verifier App [more about this later].
 

## Issuance and Verification Flows

Flows define the full behaviour of credential issuance and verification. While the Template define the Flow's core business logic, you define in the Flow parameters such as the duration of a credential, the cryptography and protocols to be used, the Microservices it should run on, as well as the data that is visible by the user (name, description, logo) as well as the machine-readable data used in the communication protocols (e.g. OpenID4VCI and OpenID4VP).

- **TLDR: what is actually Flow in DIDroom?**
  > [!NOTE] 
  >  Imagine a Flow as a shell of extra parameters that surround a template. Imagine that you are offering the same credentials, once with a 1 day expiration and once with a 1 month expiration: the templates used will typically be the same, while the Flow configurations will change.



## Microservices

Credential Issuance and Verification are (partly) executed in Microservices. The Microservices are configured in the Dashboard, the Dashboard also provides you with the actuall Microservices code, with different deployment possibilities.  


## Toolchain and components

The Issuance and Verification is implemented using our in-house built components, including: 

- NCR (no-code room):  REST API server for Zencode scripts, single binary, doesn't require su privildges, includes OpenAPI and automagic GUI for REST APIs  see 

	-> Repo: https://github.com/ForkbombEu/ncr

- DIDroom Microservices: OpenID4VCI and OpenID4VP compatible Microservices, highly customizable, implemented in Zencode (with some JS). This is where the server-side of new protocols and new cryptography is implemented. 

 	-> Repo: https://github.com/ForkbombEu/DIDroom_microservices

- Zencode client: all the Zencode needed in the Wallet, Verifier and in the Dashboard. This is where the client-side of new protocols and new cryptography is implemented.

	-> Repo: https://github.com/ForkbombEu/client_zencode

- Ghisa: minimalist 0-security proxy, saves you from (some) CORS errors. 

	-> Repo: https://github.com/ForkbombEu/ghisa


- Zenroom: Cryptographic virtual machine, powers all (almost) the cryptogrphy in DIDroom. Ultra portable, runs on server/mobile/browser/IoT. 

	-> Repo: https://dev.zenroom.org/
	
- Slangroom: Extension to Zenroom, for networking, database, file management. See: 

	-> Repo: https://dyne.org/slangroom/ 
	

