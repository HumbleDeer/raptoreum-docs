"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[8995],{16086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var s=a(87462),l=(a(67294),a(3905));a(22004);const n={sidebar_position:4},r="signmessagewithprivkey",i={unversionedId:"wallet/cli-wallet/commands/util/signmessagewithprivkey",id:"wallet/cli-wallet/commands/util/signmessagewithprivkey",title:"signmessagewithprivkey",description:'signmessagewithprivkey "privkey" "message"',source:"@site/docs/wallet/cli-wallet/commands/util/signmessagewithprivkey.mdx",sourceDirName:"wallet/cli-wallet/commands/util",slug:"/wallet/cli-wallet/commands/util/signmessagewithprivkey",permalink:"/docs/wallet/cli-wallet/commands/util/signmessagewithprivkey",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/util/signmessagewithprivkey.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"estimatesmartfee",permalink:"/docs/wallet/cli-wallet/commands/util/estimatesmartfee"},next:{title:"validateaddress",permalink:"/docs/wallet/cli-wallet/commands/util/validateaddress"}},m={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"signmessagewithprivkey"},"signmessagewithprivkey"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'signmessagewithprivkey "privkey" "message"')),(0,l.kt)("p",null,"Sign a message with the private key of an address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Create the signature\nraptoreum-cli signmessagewithprivkey "privkey" "my message"\n\n# Verify the signature\nraptoreum-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n')),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The base58check encoded address")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "privkey"         (string, required) The private key to sign the message with.\n2. "message"         (string, required) The message to create a signature of.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"signature"          (string) The signature of the message encoded in base 64\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "signmessagewithprivkey", "params": ["privkey", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0}}]);