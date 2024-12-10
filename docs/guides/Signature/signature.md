---
title: Create a Signature
order: 10
---


# Signature

The Signature features allow to you sign documents and files, according to the standards *PaDES, CaDES, JaDES or XaDES* using your secrets keys and a certificate. 

You can as well verify signatures from 3rd parties. 

## Supported types 

The standard supported (PaDES/CaDES/JaDES/XaDES) are compliant with the [eIDAS regulation](https://en.wikipedia.org/wiki/EIDAS) and are the ones most widely accepted in the industry. 


## Signature flow 

The signature occurs in the Webapp, specifically **in the browser**: this implies that your secret keys are only store and used in the browser and never  communicated to anyone, according to the *privacy-by-design* and *end-to-encryption principles*. 

The signature produced in the Webapp is packed into a JSON object and communicated to a service we run in backend using the open source [Digital Signing Service](https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html) software, the official software implemented and maintained by the European Commission, for digital signatures. The software is open source, you can find the source code on [https://github.com/esig/dss/](https://github.com/esig/dss/).

> [!IMPORTANT] Important!
> The secret key to sign documents is stored and used only in the browser (thus the signature works offline!), are never communicated to anyone and from the signature it's mathematically impossible to recreate the secret key. 

# Import a secret key and certificate 

You probably want to start by importing a secret key and and an X.509 certificate. To do that press on the **Certificates** button on the sidebar:

![Signature1](../images/signature/SS1.png)

Then press the button **Add a Key-Certificate Pair** in top right of the page, a modal window will pop-up, fill it with the info about your key

![Signature1](../images/signature/SS3.png)

As a result you should see your key/certificate appearing in the list. Under **Algorithm** you see the type of signature that can be performed with each given pair of key/certificate. Currently we support: 

- **Elliptic curve signatures**
  - ECDSA on secp256r1 (also known as P-256 or NIST-256)
  - EdDSA on Ed25519
- **RSA**
  - RSASSA-PKCS1-v1_5
  - RSA-PSS

In the example below, we added an RSA key/certificate: 

![Signature1](../images/signature/SS4c.png)


## Create a certificate (for test purposes)

if you want to test the software, you could create a secret key, along with a self-signed X.509 certificate.


1) Create a secret key, in this case this will allow you to produce an ECDSA signature on the secp256r1 curve, with the following line

```bash
openssl ecparam -out ec_key.pem -name secp256r1 -genkey 
```

The output should look like: 

```
-----BEGIN EC PARAMETERS-----
BggqhkjOPQMBBw==
-----END EC PARAMETERS-----
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIJwGudHNDpOGGubs0Ta7aBY+0rZJnsaHwwGJ9hWg+E0soAoGCCqGSM49
AwEHoUQDQgAEFdjev32vpXom5IJ8hOFb2IuQrJvCF3TAV2Ix9LM83VAnGS93uejk
A7JKERWZwUWxFx7W+n+G/2xox1X1Z5Bpjw==
-----END EC PRIVATE KEY-----
```

2) Then create a self-signed X.509 certificate with the link:

```bash
openssl req -new -key ec_key.pem -x509 -nodes -days 365 -out cert.pem
```

The output (X.509 certificate) should look like: 

```
-----BEGIN CERTIFICATE-----
MIICFjCCAb2gAwIBAgIUM4YXzoETub8fc1ITNG5YmNBjWIQwCgYIKoZIzj0EAwIw
YTELMAkGA1UEBhMCREsxEzARBgNVBAgMClNvbWUtU3RhdGUxDDAKBgNVBAcMA0NQ
SDENMAsGA1UECgwETm9uZTEgMB4GCSqGSIb3DQEJARYRYW5kcmVhQGFuZHJlYS5v
cmcwHhcNMjQwNTIzMTEzNzMxWhcNMjUwNTIzMTEzNzMxWjBhMQswCQYDVQQGEwJE
SzETMBEGA1UECAwKU29tZS1TdGF0ZTEMMAoGA1UEBwwDQ1BIMQ0wCwYDVQQKDARO
b25lMSAwHgYJKoZIhvcNAQkBFhFhbmRyZWFAYW5kcmVhLm9yZzBZMBMGByqGSM49
AgEGCCqGSM49AwEHA0IABBXY3r99r6V6JuSCfIThW9iLkKybwhd0wFdiMfSzPN1Q
Jxkvd7no5AOyShEVmcFFsRce1vp/hv9saMdV9WeQaY+jUzBRMB0GA1UdDgQWBBQc
9IznPl5DHE/8ejCMktZVVD49IDAfBgNVHSMEGDAWgBQc9IznPl5DHE/8ejCMktZV
VD49IDAPBgNVHRMBAf8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIFq3/SXWEsD2
Gz8xXxMhdLLx/NXdnboflIAosgiKNqQXAiBfR45nGPTbH+0O4BydHi+WToTFU/qC
ZFDPK7MDIxklfQ==
-----END CERTIFICATE-----
```



## Sign document 

After you have added a key/certificate, you're ready to sign your first document, so click on **My Signatures** on the sidebar, you should see: 

![Signature1](../images/signature/SS5a.png)


1) Click on the *New Signature* button on the top right and select:

- Fill the *Title*, the *Description* 
- Click on *Choose File* load document in the application. 
- Under *Type* select the format of the signature you want to receive, between *PaDES*, *CaDES*, *JaDES* or *XaDES*. The type of file that you can sign will typically be a PDF, but depending on the signature format you are able sign also other file formats.
- Then select the *Certificate* you want to use (the correspondent secret key will be selected



![Signature1](../images/signature/SS5b.png)


If all went well, you will see your signature:

![Signature1](../images/signature/SS6.png)


From there, if you click on *Preview*, you can open the signed file: 


![Signature1](../images/signature/SS7.png)


And can as well *Verify the signature* from there: 


![Signature1](../images/signature/SS8.png)



