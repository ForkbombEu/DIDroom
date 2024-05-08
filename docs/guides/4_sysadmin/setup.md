# Setup the Dashboard

#### for 🛠️ System Administrator

For users who prefer full control over their infrastructure and data, Didroom supports on-premise deployment. Follow these steps to deploy the DIDroom Dashboard on your own infrastructure:

::: tip
If you are unfamiliar with servers, devops and unix commands look also at the [Software as a service](/guides/1_orgadmin/) section that will allow you to define a credential issuance flow in minutes! Without installing anything on your servers.
:::

> [!IMPORTANT] Checklist
> Before starting please make sure you have a

1. Git installed on your server
1. Docker compose installed on your server
1. DID admin domain/context as specified on [`dyne/W3C-DID`](https://github.com/dyne/W3C-DID?tab=readme-ov-file#claim-your-own-domain-context-as-an-admin)
<!-- 1. Caddy
1. Firewall acess -->


### 1. clone the repo

```bash
git clone --recursive https://github.com/forkbombeu/signroom
```

::: warning

Pay attention at the `--recursive` that will clone also the sub repositories!

:::


### 2. Run the Dashboard (Admin Panel and DIDroom Control Room)

```bash
cd signroom
docker compose up --build
```

This will run the DIDroom Dashboard which includes two interconnected web-applications:
- **Admin Panel**: based on PocketBase, this application is accessible only to the sysadmin and it allows to configure and edit data structure and API configurations.
- **DIDroom Control Room**: this the DIDroom web application accessible to all users, allows to manage credential issuance and verification flows and their deployment and the organizations


The two web applications run on two different ports and have different user accounts.



### 3. Log in onto the DIDroom Control Room 

Go to:

```http
http://localhost:4173/
```

Register a new uer or log in using the default user:


**user**: `userA@example.org`

**pass**: `userAuserA`




### 4. login onto to the Admin Panel

Go to:

```http
http://localhost:8090/_
```

::: tip
Pay attention at the final underscore, of the address
:::


A default administrator user is created with the following user and pass:

**user**: `admin@example.org`

**pass**: `adminadmin`



### 5. Setup the DID service

DIDroom uses the Dyne's DID service as a public key infrastructure. You can choose to ask us (Forkbomb or Dyne.org) to provide you the admin data, or deploy Dyne's DID service on your server. 

You can ask for your admin domain/context as specified on [`dyne/W3C-DID`](https://github.com/dyne/W3C-DID?tab=readme-ov-file#claim-your-own-domain-context-as-an-admin)

Follow the video:

1. login into the dashboard
2. go on the `features` collection
3. select the `DID` feature
4. insert you admin data

<video controls src="https://raw.githubusercontent.com/ForkbombEu/signroom/main/screenshots/videos/setup-did.webm" />
