---
title: 🖊️ Signatures (*AdES)  
order: 10
---

# Signatures

The application can produce different types of signatures, using different technologies for different purposes. 


## Document Signature

The Signature features allow to you sign documents and files, according to the standards *PaDES, CaDES, JaDES or XaDES* using your secrets keys and a certificate. 


## Multisignature Flow

The Multisignature Flow is a an implementation of the cryptographic flow described in the [Reflow Multisignature](https://arxiv.org/abs/2105.14527) paper. This allows users to create a JSON object to be signed, invite users to sign it, set a deadline and wait for their signatures. The signature process uses the homomorphic capabilities of the BLS 12-381 curve - see [here](https://hackmd.io/@benjaminion/bls12-381) if you're curious. The responses are anonymous and the output is a cryptographical object verifiable by anyone.