# Deploy microservices

#### for 🛠️ System Administrator

## Preparation

- Register a domain name, let's say: _microservices.myapp.domain_

- Setup a linux server, configure SSL and make sure the server is resolved at: https://microservices.myapp.domain/

- Make sure you have all the commands installed, type: _sudo apt install make wget jq git -y_

## Provision and download the Microservices

- Go to https://dashboard.didroom.com and create at leastt an Issuance Flow. During the creation, you will have to create multiple objects, such as templates and microservices setup. 
- Then From the *Microservices* page, click on "Download microservices"
- The Microservices page should look like this:

![Microservices-manual-deployment](../images/microservices/microservices-manual-deployment.png)

## Deploy the Microservices

- Copy the microservices.zip file on the server and unzip it, it should create the folder /DIDroom_microservices (which maybe will be inside /microservices...(

- type: _cd DIDroom_microservices_

- type: _make up_ (this command generates the secret keys for the microservices, and registers a DID for each of them)

From that moment, you should have the microservices (authz_server and credential_issuer) running and configured.

## Receive your first credential

- install the wallet on an android phone from here: https://github.com/ForkbombEu/wallet (you can scan the QR code on the github repo),
- create a user on the wallet
- scan the QR code you see in the issuance flow page
- If everything worked well, you should see something like this in the wallet:

![wallet (Medium)](https://github.com/ForkbombEu/DIDroom/assets/1547175/8bfef092-2423-4cb7-9320-b3d54cbd03cc)

[DIDroom Microservices](/solution#didroom-microservices) are the technological core of the solution: those components offer cryptographic functions as well as transport protocols. The microservices are completely isolated from the Dashboard, meaning that:

- The code is hosted in a separated repo
- The microservices can run independently from the Dashboard
- Each microservice has its own secret keys and DID to identify them: those are generated by the microservice at its first provisioning

## Installing DiDRoom Microservices

Welcome to DiDRoom Microservices installation guide! Below are two recommended ways to install DiDRoom Microservices:

### Recommended Way: Download Zip File

This method is recommended for users who want a quick and hassle-free installation experience. Follow these steps:

1. **Download Zip File**: from the issuance flow of the dashboard [dashboard.didroom.com](https://dashboard.didroom.com), click on "Download issuer" to download the zip file containing all the necessary components, see screnshot below:

![microservices_download](/images/microservices_download.png)


2. **Extract and Configure**: Extract the zip file to your desired location and follow the provided instructions to configure the components according to your requirements.

3. **Ready to Use**: Once configured, your DiDRoom Microservices are ready to use! Start managing decentralized identities and secure communication seamlessly.

```bash
make up
```

### Alternative Way: Clone and Compile

This method is recommended for advanced users who prefer to have full control over their installation process. Follow these steps:

1. **Clone Repository**: Clone the DiDRoom Microservices repository from our GitHub page.

2. **Compile .well-known and Credential Issuance Info**: Compile your .well-known file and credential issuance information according to your specific needs and requirements.

3. **Customize and Configure**: Customize and configure the microservices as needed for your applications. Ensure all components are correctly configured and integrated.

4. **Deployment**: Deploy the microservices in your environment and start managing decentralized identities and secure communication.

<<< @/.installation_instructions/didroom-microservices-installer.sh

You should see something like this

<video controls="controls" src="/.installation_instructions/didroom-microservices.mp4" />

Choose the installation method that best suits your preferences and requirements, and enjoy the benefits of DiDRoom Microservices!
