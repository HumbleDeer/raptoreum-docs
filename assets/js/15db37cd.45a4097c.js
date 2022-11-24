"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[4255],{7183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=a(7462),r=(a(7294),a(3905));a(2004);const l={sidebar_position:6},n="verifymessage",i={unversionedId:"wallet/cli-wallet/commands/util/verifymessage",id:"wallet/cli-wallet/commands/util/verifymessage",title:"verifymessage",description:"",source:"@site/docs/wallet/cli-wallet/commands/util/verifymessage.mdx",sourceDirName:"wallet/cli-wallet/commands/util",slug:"/wallet/cli-wallet/commands/util/verifymessage",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/util/verifymessage",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/util/verifymessage.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebarWallet",previous:{title:"validateaddress",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/util/validateaddress"},next:{title:"abandontransaction",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/abandontransaction"}},m={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verifymessage"},"verifymessage"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'verifymessage "address" "signature" "message"')),(0,r.kt)("p",null,"Verify a signed message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Unlock the wallet for 30 seconds\nraptoreum-cli walletpassphrase "mypassphrase" 30\n\n# Create the signature\nraptoreum-cli signmessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "my message"\n\n# Verify the signature\nraptoreum-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"address"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The base58check encoded address")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "address"         (string, required) The raptoreum address to use for the signature.\n2. "signature"       (string, required) The signature provided by the signer in base 64 encoding (see signmessage).\n3. "message"         (string, required) The message that was signed.\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\ntrue|false   (boolean) If the signature is verified or not.\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "verifymessage", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", "signature", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}o.isMDXComponent=!0}}]);