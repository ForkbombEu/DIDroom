import{_ as e,c as s,o as a,a3 as t}from"./chunks/framework.CHPBlGxi.js";const i="/DIDroom/assets/SS1.DFhEbxKX.png",n="/DIDroom/assets/SS3.L_ceYToN.png",o="/DIDroom/assets/SS4c.wjW-g8nA.png",r="/DIDroom/assets/SS5a.DDsU9iun.png",p="/DIDroom/assets/SS5b.VcHo4rg-.png",l="/DIDroom/assets/SS6.CLlfDdxa.png",c="/DIDroom/assets/SS7.CH1WuZAi.png",h="/DIDroom/assets/SS8.SHaj13IE.png",w=JSON.parse('{"title":"Signature","description":"","frontmatter":{},"headers":[],"relativePath":"guides/5_signature/1_signature.md","filePath":"guides/5_signature/1_signature.md","lastUpdated":1716540162000}'),d={name:"guides/5_signature/1_signature.md"},u=t('<h1 id="signature" tabindex="-1">Signature <a class="header-anchor" href="#signature" aria-label="Permalink to &quot;Signature&quot;">​</a></h1><p>The Signature features allow to you sign documents and files, according to the standards <em>PaDES, CaDES, JaDES or XaDES</em> using your secrets keys and a certificate.</p><p>You can as well verify signatures from 3rd parties.</p><h2 id="supported-types" tabindex="-1">Supported types <a class="header-anchor" href="#supported-types" aria-label="Permalink to &quot;Supported types&quot;">​</a></h2><p>The standard supported (PaDES/CaDES/JaDES/XaDES) are compliant with the <a href="https://en.wikipedia.org/wiki/EIDAS" target="_blank" rel="noreferrer">eIDAS regulation</a> and are the ones most widely accepted in the industry.</p><h2 id="signature-flow" tabindex="-1">Signature flow <a class="header-anchor" href="#signature-flow" aria-label="Permalink to &quot;Signature flow&quot;">​</a></h2><p>The signature occurs in the Webapp, specifically <strong>in the browser</strong>: this implies that your secret keys are only store and used in the browser and never communicated to anyone, according to the <em>privacy-by-design</em> and <em>end-to-encryption principles</em>.</p><p>The signature produced in the Webapp is packed into a JSON object and communicated to a service we run in backend using the open source <a href="https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html" target="_blank" rel="noreferrer">Digital Signing Service</a> software, the official software implemented and maintained by the European Commission, for digital signatures. The software is open source, you can find the source code on <a href="https://github.com/esig/dss/" target="_blank" rel="noreferrer">https://github.com/esig/dss/</a>.</p><div class="important custom-block github-alert"><p class="custom-block-title">Important!</p><p>The secret key to sign documents is stored and used only in the browser (thus the signature works offline!), are never communicated to anyone and from the signature it&#39;s mathematically impossible to recreate the secret key.</p></div><h1 id="import-a-secret-key-and-certificate" tabindex="-1">Import a secret key and certificate <a class="header-anchor" href="#import-a-secret-key-and-certificate" aria-label="Permalink to &quot;Import a secret key and certificate&quot;">​</a></h1><p>You probably want to start by importing a secret key and and an X.509 certificate. To do that press on the <strong>Certificates</strong> button on the sidebar:</p><p><img src="'+i+'" alt="Signature1"></p><p>Then press the button <strong>Add a Key-Certificate Pair</strong> in top right of the page, a modal window will pop-up, fill it with the info about your key</p><p><img src="'+n+'" alt="Signature1"></p><p>As a result you should see your key/certificate appearing in the list. Under <strong>Algorithm</strong> you see the type of signature that can be performed with each given pair of key/certificate. Currently we support:</p><ul><li><strong>Elliptic curve signatures</strong><ul><li>ECDSA on secp256r1 (also known as P-256 or NIST-256)</li><li>EdDSA on Ed25519</li></ul></li><li><strong>RSA</strong><ul><li>RSASSA-PKCS1-v1_5</li><li>RSA-PSS</li></ul></li></ul><p>In the example below, we added an RSA key/certificate:</p><p><img src="'+o+`" alt="Signature1"></p><h2 id="create-a-certificate-for-test-purposes" tabindex="-1">Create a certificate (for test purposes) <a class="header-anchor" href="#create-a-certificate-for-test-purposes" aria-label="Permalink to &quot;Create a certificate (for test purposes)&quot;">​</a></h2><p>if you want to test the software, you could create a secret key, along with a self-signed X.509 certificate.</p><ol><li>Create a secret key, in this case this will allow you to produce an ECDSA signature on the secp256r1 curve, with the following line</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ecparam</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec_key.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> secp256r1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -genkey</span></span></code></pre></div><p>The output should look like:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-----BEGIN EC PARAMETERS-----</span></span>
<span class="line"><span>BggqhkjOPQMBBw==</span></span>
<span class="line"><span>-----END EC PARAMETERS-----</span></span>
<span class="line"><span>-----BEGIN EC PRIVATE KEY-----</span></span>
<span class="line"><span>MHcCAQEEIJwGudHNDpOGGubs0Ta7aBY+0rZJnsaHwwGJ9hWg+E0soAoGCCqGSM49</span></span>
<span class="line"><span>AwEHoUQDQgAEFdjev32vpXom5IJ8hOFb2IuQrJvCF3TAV2Ix9LM83VAnGS93uejk</span></span>
<span class="line"><span>A7JKERWZwUWxFx7W+n+G/2xox1X1Z5Bpjw==</span></span>
<span class="line"><span>-----END EC PRIVATE KEY-----</span></span></code></pre></div><ol start="2"><li>Then create a self-signed X.509 certificate with the link:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> req</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec_key.pem</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x509</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nodes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -days</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 365</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cert.pem</span></span></code></pre></div><p>The output (X.509 certificate) should look like:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-----BEGIN CERTIFICATE-----</span></span>
<span class="line"><span>MIICFjCCAb2gAwIBAgIUM4YXzoETub8fc1ITNG5YmNBjWIQwCgYIKoZIzj0EAwIw</span></span>
<span class="line"><span>YTELMAkGA1UEBhMCREsxEzARBgNVBAgMClNvbWUtU3RhdGUxDDAKBgNVBAcMA0NQ</span></span>
<span class="line"><span>SDENMAsGA1UECgwETm9uZTEgMB4GCSqGSIb3DQEJARYRYW5kcmVhQGFuZHJlYS5v</span></span>
<span class="line"><span>cmcwHhcNMjQwNTIzMTEzNzMxWhcNMjUwNTIzMTEzNzMxWjBhMQswCQYDVQQGEwJE</span></span>
<span class="line"><span>SzETMBEGA1UECAwKU29tZS1TdGF0ZTEMMAoGA1UEBwwDQ1BIMQ0wCwYDVQQKDARO</span></span>
<span class="line"><span>b25lMSAwHgYJKoZIhvcNAQkBFhFhbmRyZWFAYW5kcmVhLm9yZzBZMBMGByqGSM49</span></span>
<span class="line"><span>AgEGCCqGSM49AwEHA0IABBXY3r99r6V6JuSCfIThW9iLkKybwhd0wFdiMfSzPN1Q</span></span>
<span class="line"><span>Jxkvd7no5AOyShEVmcFFsRce1vp/hv9saMdV9WeQaY+jUzBRMB0GA1UdDgQWBBQc</span></span>
<span class="line"><span>9IznPl5DHE/8ejCMktZVVD49IDAfBgNVHSMEGDAWgBQc9IznPl5DHE/8ejCMktZV</span></span>
<span class="line"><span>VD49IDAPBgNVHRMBAf8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIFq3/SXWEsD2</span></span>
<span class="line"><span>Gz8xXxMhdLLx/NXdnboflIAosgiKNqQXAiBfR45nGPTbH+0O4BydHi+WToTFU/qC</span></span>
<span class="line"><span>ZFDPK7MDIxklfQ==</span></span>
<span class="line"><span>-----END CERTIFICATE-----</span></span></code></pre></div><h2 id="sign-document" tabindex="-1">Sign document <a class="header-anchor" href="#sign-document" aria-label="Permalink to &quot;Sign document&quot;">​</a></h2><p>After you have added a key/certificate, you&#39;re ready to sign your first document, so click on <strong>My Signatures</strong> on the sidebar, you should see:</p><p><img src="`+r+'" alt="Signature1"></p><ol><li>Click on the <em>New Signature</em> button on the top right and select:</li></ol><ul><li>Fill the <em>Title</em>, the <em>Description</em></li><li>Click on <em>Choose File</em> load document in the application.</li><li>Under <em>Type</em> select the format of the signature you want to receive, between <em>PaDES</em>, <em>CaDES</em>, <em>JaDES</em> or <em>XaDES</em>. The type of file that you can sign will typically be a PDF, but depending on the signature format you are able sign also other file formats.</li><li>Then select the <em>Certificate</em> you want to use (the correspondent secret key will be selected</li></ul><p><img src="'+p+'" alt="Signature1"></p><p>If all went well, you will see your signature:</p><p><img src="'+l+'" alt="Signature1"></p><p>From there, if you click on <em>Preview</em>, you can open the signed file:</p><p><img src="'+c+'" alt="Signature1"></p><p>And can as well <em>Verify the signature</em> from there:</p><p><img src="'+h+'" alt="Signature1"></p>',40),g=[u];function m(k,y,f,S,C,E){return a(),s("div",null,g)}const A=e(d,[["render",m]]);export{w as __pageData,A as default};
