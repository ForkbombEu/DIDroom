import{_ as e,c as t,o as a,a3 as i}from"./chunks/framework.CHPBlGxi.js";const o="/DIDroom/assets/MM1.DVp9gOfm.png",s="/DIDroom/assets/MM2.BS0cy64f.png",r="/DIDroom/assets/MM3.6Yqm5lj8.png",n="/DIDroom/assets/MM4.CbQeh09x.png",l="/DIDroom/assets/MM5.H0RCR_Oj.png",h="/DIDroom/assets/MM6.vxyCQPkD.png",c="/DIDroom/assets/MM7.D_tJOvBy.png",g="/DIDroom/assets/MM8.Dl-OndsS.png",S=JSON.parse('{"title":"Multisignature Flow","description":"","frontmatter":{},"headers":[],"relativePath":"guides/5_signature/2_multisignature.md","filePath":"guides/5_signature/2_multisignature.md","lastUpdated":1716540162000}'),u={name:"guides/5_signature/2_multisignature.md"},p=i('<h1 id="multisignature-flow" tabindex="-1">Multisignature Flow <a class="header-anchor" href="#multisignature-flow" aria-label="Permalink to &quot;Multisignature Flow&quot;">​</a></h1><p>The Multisignature Flow is a an implementation of the cryptographic flow described in the <a href="https://arxiv.org/abs/2105.14527" target="_blank" rel="noreferrer">Reflow Multisignature</a> paper. This allows users to create a JSON object to be signed, invite users to sign it, set a deadline and wait for their signatures. The signature process uses the homomorphic capabilities of the BLS 12-381 curve - see <a href="https://hackmd.io/@benjaminion/bls12-381" target="_blank" rel="noreferrer">here</a> if you&#39;re curious. The responses are anonymous and the output is a cryptographical object verifiable by anyone.</p><h2 id="create-a-multisignature" tabindex="-1">Create a Multisignature <a class="header-anchor" href="#create-a-multisignature" aria-label="Permalink to &quot;Create a Multisignature&quot;">​</a></h2><p>Click on <strong>Multisignatures</strong> in the sidebar to get started:</p><p><img src="'+o+'" alt="Signature1"></p><p>The first page is a brieg introducton giving some basic concepts. See below what a <em>Coconut Issuer</em> is and what it&#39;s used for.</p><p><img src="'+s+'" alt="Signature1"></p><p>Click on <strong>Start Setup</strong> to get started, here you&#39;ll have to fill:</p><ul><li><strong>Name</strong>: the name of this Multisignature flow, the name will appear in your Multisignature page and those you invite as well.</li><li><strong>Credential Issuer</strong>: (Coconut Issuer) this is treated in a subchapter below. For now, just select the Coconut issuer we offer from the list</li><li><strong>Reflow Seal</strong>: this is the data that you&#39;re asking to sign (see the subchapter below). In this Reflow Seal, we have 3 individuals (<em>Spacetest</em>, <em>nenno</em> and <em>GI Hefe</em>) agreeing on their respective yearly designated driver quota.</li><li><strong>Settings</strong>: here you can specify the expiry of the Multisignature, meaning that the invitees will only be allowed to sign until the deadline</li></ul><p>The setup page looks like:</p><p><img src="'+r+'" alt="Signature1"></p><h3 id="the-reflow-seal-and-the-signing-verification-algorithm" tabindex="-1">The <em>Reflow Seal</em> and the signing/verification algorithm <a class="header-anchor" href="#the-reflow-seal-and-the-signing-verification-algorithm" aria-label="Permalink to &quot;The *Reflow Seal* and the signing/verification algorithm&quot;">​</a></h3><p>A <strong>Reflow Seal</strong> (as in the paper) is the data that the signees have to agree to sign. In our first implementation it&#39;s a JSON object and it can easily refer to a document, the content of a URL or something stored in a database or blockchain.</p><p>In fact, that is an oversimplifycation of what a Reflow Seal is, a slightly more encompassing explaination is: the Reflow Seal is a cryptographic object containing the JSON above, along with the public keys and the signatures (if they choose to sign) of the signees.</p><p>If you&#39;re not satisfied with this and are ready to deep-dive into the magic world of cryptography, read the text box below.</p><div class="important custom-block github-alert"><p class="custom-block-title">Warning: hard-core cryptography ahead 🤯</p><p>In the cryptographic flow happening under the hood after the setup, The Reflow Seal is hashed, then each signee (that chooses to sign) will produce a <a href="https://www.ietf.org/archive/id/draft-irtf-cfrg-bls-signature-04.txt" target="_blank" rel="noreferrer">BLS 12-381 signature</a> that will be <a href="https://eprint.iacr.org/2018/483" target="_blank" rel="noreferrer">homomorphically aggregated</a> to the hash of the Reflow Seal. We did in fact omit an important step: while the Reflow Seal was being hashed, the public keys of the signees have been <em>homomorphically aggregated</em>.</p></div><blockquote><p>After all the signatures have been collected and aggregated, a <em>Miller Loop</em> ( read a somewhat easy explanation <a href="https://crypto.stackexchange.com/questions/61930/simple-explanation-of-millers-algorithm" target="_blank" rel="noreferrer">here</a>) is performed to <strong>verify if the aggregated signatures match the aggregated public keys</strong>: if they do, the Multisignature is successful. This is the core of the algorithm, which enables anonymous signatures and was originally designed for blockchain applications. We did actually omit one more step, the Coconut credential issuance, which we cover below.</p></blockquote><h3 id="the-coconut-issuer" tabindex="-1">The Coconut Issuer <a class="header-anchor" href="#the-coconut-issuer" aria-label="Permalink to &quot;The Coconut Issuer&quot;">​</a></h3><p>The <a href="https://arxiv.org/abs/1802.07344" target="_blank" rel="noreferrer">Coconut Paper</a> defines a zero knowledge proof flow for credential issuance, with plenty of bells and whistles. In our implementation, the Coconut Issuer produces a <em>Coconut credential</em> for each of the users invited to sing.</p><div class="important custom-block github-alert"><p class="custom-block-title">Warning: more hard-core cryptography ahead 🤯🤯</p><p>Using a Coconut credential has the purpose of making sure that the ones signing the Reflow Seal, are the ones who have been invited to sign, in order to overcoming the <a href="https://eprint.iacr.org/2021/377.pdf" target="_blank" rel="noreferrer">rogue public key attack</a> while keeping the signature anonymous and cryptographically verifiable.</p></div><h2 id="invite-the-users" tabindex="-1">Invite the users <a class="header-anchor" href="#invite-the-users" aria-label="Permalink to &quot;Invite the users&quot;">​</a></h2><p>When done with the steps above, click on <strong>Confirm Content</strong> on the top right of the page to land on the <strong>Invite Users</strong> page, that you can use to invite users base on their username or email (if they chose to have the email as public).</p><p><img src="'+n+'" alt="Signature1"></p><p>We chose to invite the users <em>Spacetest</em>, <em>nenno</em> and <em>GI Hefe</em> which are the people who will be sharing the car, according to the Reflow Seal.</p><p><strong>Note</strong>: The choice to include the signees&#39; names in the Reflow Seal was aimed exclusively for educational purposes: you can write whatever you want in the Reflow Seal and invite whoever you want to sign it.</p><p>The result should be something like this:</p><p><img src="'+l+'" alt="Signature1"></p><h2 id="finalize" tabindex="-1">Finalize <a class="header-anchor" href="#finalize" aria-label="Permalink to &quot;Finalize&quot;">​</a></h2><p>This page shows you a recap of the Multisignature flow you&#39;re working on: at this stage you can still change things, once you click on <em>Confirm and Sign</em> in the top right of the page, the cryptographic material will be produced and you won&#39;t be able to make changes after that.</p><p><img src="'+h+'" alt="Signature1"></p><h2 id="wait-for-signatures" tabindex="-1">Wait for signatures <a class="header-anchor" href="#wait-for-signatures" aria-label="Permalink to &quot;Wait for signatures&quot;">​</a></h2><p>After you clicked on <em>Confirm and Sign</em>, the Multisignature is ready to be signed and a <strong>notification is sent per email to the signees</strong>. You&#39;ll see it here:</p><p><img src="'+c+'" alt="Signature1"></p><h2 id="check-status" tabindex="-1">Check status <a class="header-anchor" href="#check-status" aria-label="Permalink to &quot;Check status&quot;">​</a></h2><p>If you click on &quot;View&quot; on the Multisignature, you can see the status, including if everyone has signed or someone is missing.</p><p><img src="'+g+'" alt="Signature1"></p>',36),d=[p];function m(f,b,w,y,_,v){return a(),t("div",null,d)}const M=e(u,[["render",m]]);export{S as __pageData,M as default};