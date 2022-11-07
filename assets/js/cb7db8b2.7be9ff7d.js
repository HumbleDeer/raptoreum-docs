"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[8264],{6032:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=l(87462),s=(l(67294),l(3905)),n=l(22004);const r={sidebar_position:49},o="walletlock",i={unversionedId:"wallet/cli-wallet/commands/wallet/walletlock",id:"wallet/cli-wallet/commands/wallet/walletlock",title:"walletlock",description:"walletlock",source:"@site/docs/wallet/cli-wallet/commands/wallet/walletlock.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/walletlock",permalink:"/docs/wallet/cli-wallet/commands/wallet/walletlock",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/walletlock.mdx",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49},sidebar:"tutorialSidebar",previous:{title:"signmessage",permalink:"/docs/wallet/cli-wallet/commands/wallet/signmessage"},next:{title:"walletpassphrase",permalink:"/docs/wallet/cli-wallet/commands/wallet/walletpassphrase"}},c={},p=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"walletlock"},"walletlock"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"walletlock")),(0,s.kt)("p",null,"Removes the wallet encryption key from memory, locking the wallet.\nAfter calling this method, you will need to call walletpassphrase again\nbefore being able to call any methods which require the wallet to be unlocked."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the passphrase for 2 minutes to perform a transaction\nraptoreum-cli walletpassphrase "my pass phrase" 120\n\n# Perform a send (requires passphrase set)\nraptoreum-cli sendtoaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 1.0\n\n# Clear the passphrase since we are done before 2 minutes is up\nraptoreum-cli walletlock\n')),(0,s.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${l(16213).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,s.kt)("h2",{id:"output"},"Output"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Result"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},'"signature"'),(0,s.kt)("td",{parentName:"tr",align:null},"(string)"),(0,s.kt)("td",{parentName:"tr",align:null},"The signature of the message encoded in base 64")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"signature"          (string) The signature of the message encoded in base 64\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "walletlock", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},16213:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/medias/walletlock-b55fab3db11a3eeafcb7e50d1ea09566.webm"}}]);