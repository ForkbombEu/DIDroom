# Setup an instance

#### for 🛠️ System Administrator

For users who prefer full control over their infrastructure and data, Didroom supports on-premise deployment. Follow these steps to deploy Didroom on your own infrastructure:

::: tip
If you are unfamiliar with servers, devops and unix commands look also at the [Software as a service](/guides/orgadmin/) section that will allow you to define a credential issuance flow in minutes! Without installing anything on your servers.
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

### 2. run the dashboard

```bash
cd signroom
docker compose up --build
```

this will run the backend of the dirdroom control room available on the network at

```http
http://localhost:8090/_
```

::: tip
Pay attention at the final underscore, of the address
:::

### 3. login to the admin panel

A default administrator user is created with the following defaults:

**user**: `admin@example.org`

**pass**: `adminadmin`

### 4. Setup the DID service

The only reaquired step to be configure is the DID federated service.
You can ask for your admin domain/context as specified on [`dyne/W3C-DID`](https://github.com/dyne/W3C-DID?tab=readme-ov-file#claim-your-own-domain-context-as-an-admin)

Follow the video:

1. login into the dashboard
2. go on the `features` collection
3. select the `DID` feature
4. insert you admin data

<video controls src="https://raw.githubusercontent.com/ForkbombEu/signroom/main/screenshots/videos/setup-did.webm" />
