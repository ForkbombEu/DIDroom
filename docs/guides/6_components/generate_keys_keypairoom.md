# Keypairoom: (re)generate your Secret Keys 

Keypairoom is component to **generate and regenerate a keyring**, containing multiple secret keys (along with the correspondet public keys) in a **deterministic and private way**. 

The cryptographic part consists of multiple [Zenroom](https://zenroom.org/) scripts that allows you to generate a seed by answering to questions that (probably) only you can respond, namely "The challenges".

## Privacy

The challenges are processed inside the client applications (the [Wallet App](https://github.com/ForkbombEu/wallet) or the browser where you opened the [DIDroom Control Room](https://dashboard.didroom.com/). Note: 
- The Zenroom scripts processing the answers work **offline**. 
- Your answers are **never communicated to any external service**. 
- **No one can reconstruct them** based on their output: this is certain based on the math behind it, if you're curious you can read about it [here](https://github.com/ForkbombEu/client_zencode?tab=readme-ov-file#login-creation).
- The answers are not used to identify you in anyway, they are just some text that **only you can write** and belong to your past, so it **should not change over time**.


### More about privacy 

We hear you saying:
 
> [!IMPORTANT] I don't want to answer any question I don't trust writing my personal data anywhere... what now?


So you don't want to write private data anywhere, cause you don't trust software security ever? We (the developers) understand you well and share your feelings :-)  

:::tip TLDR: answer using random text and save the seed! 
:::




If that's the case, no problem at all: you can just **answer** to the challenges **with some random/junk text**. After your secret keys are created, you are offered to store the *seed*: the seed is a piece of data, printed as a *mnemonic phrase* that will allow you to re-generate the same secret keys at any time.

What does a mmnemonic phrase look like? Like this: 

```mnemonic
expect cart barely fruit learn tortoise work essence guitar 
```

If you log out from the wallet, or try to login onto a new device (or browser), you are given the option to **paste your seed**: therefore **store your seed in a safe place**, it will work forever, no matter what you answered in that challenges. 