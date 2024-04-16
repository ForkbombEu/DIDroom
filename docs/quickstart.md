# 🎮 Quickstart

Get started quickly with Didroom by choosing one of the following deployment options:

## Software as a Service (SaaS)

If you prefer a hassle-free experience and want to start using Didroom without setting up infrastructure, our Software as a Service (SaaS) option is the way to go. Follow these steps to get started:

### 1. Sign up for a Didroom account on https://dashboard.didroom.com/register

<video controls="controls" src="https://github.com/ForkbombEu/signroom/raw/main/screenshots/videos/registration.webm" />

### 2. Access the Didroom Control Room/Dashboard to setup you credential services

For more detailed instructions, visit [Software as a Service (SaaS) Quickstart Guide](/quickstart#software-as-a-service-saas).

## On-Premise Deployment

For users who prefer full control over their infrastructure and data, Didroom supports on-premise deployment. Follow these steps to deploy Didroom on your own infrastructure:

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
