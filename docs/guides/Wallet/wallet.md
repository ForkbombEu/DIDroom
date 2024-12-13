---
title: Wallet App 
order: 1
---
# 🆔 Wallet App 

The [Wallet App](https://github.com/ForkbombEu/wallet) is an Android/iOS mobile app whose purpose is to **request** and **present credentials**. 

The Wallet App allows the user to creat an account and the same account can be used to login onto the [DIDroom Dashboard](https://dashboard.didroom.com/).

| Wallet App screenshot  |  
|--|
| <img src="../images/wallet/wallet-android-credlist.jpg" alt="wallet-android-credlist" width="300"/> |  





## Install the app

The app can be installed from the Android and iOS stores:


|  | |         |  
|--|--|--|
|[![Android](../images/wallet/android-store.png)](https://play.google.com/store/apps/details?id=com.didroom.wallet) | |[![iOS](../images/wallet/ios-store.png)](https://apps.apple.com/us/app/didroom-wallet/id6670396049)  |
|![Android-QR](../images/wallet/wallet-android-qr.png) | |![iOS-QR](../images/wallet/wallet-ios-store.png)  |


## Features
Once you login, you can: 
 - Select a credential to request, from the list you can see in the Wallet's home. The credentials that you see listed here, depend on what organization(s) your part of. 
 - Scan a QR code to receive a credential 
 - Scan a QR code (from the Verifier App) to present a credential.


## Test on the web

The Wallet can also be deployed as a web application, offering most of the app functionalities and ideal for testing and debugging. You can deploy your own instance by following the  [instructions](https://github.com/ForkbombEu/wallet?tab=readme-ov-file#installation) or test our (manually updated) web deployment at [wallet.didroom.com](https://wallet.didroom.com/).

| Wallet App deployed on web  |  
|--|
| <img src="../images/wallet/wallet-web.png" alt="wallet-web" width="1000"/> |  


## White-labeling

The Wallet (and Verifier) App are built with white-labeling in mind>

1. The mobile apps take load ALL the UX from [didroom-copmponents](https://github.com/forkbombeu/didroom-components) which is packaged into [NPM 
package](https://www.npmjs.com/package/@didroom/components) via CI. 
1. The whole deployment of the mobile apps on the Android/iOS stores is done via CI,see for example the Android production deployment [CI script](https://github.com/ForkbombEu/wallet/actions/workflows/publish_on_production.yml).
1. See below DIDroom-components [Storybook](https://forkbombeu.github.io/didroom-components/?path=/docs/colors--docs). 

|  | 
|--|
|[![Storybook](../images/wallet/didroom-components-storybook.png)](https://forkbombeu.github.io/didroom-components/) | 