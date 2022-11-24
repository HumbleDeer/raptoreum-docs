"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6143],{1625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(2004);const s={sidebar_position:16},d="getreceivedbyaddress",i={unversionedId:"wallet/cli-wallet/commands/wallet/getreceivedbyaddress",id:"wallet/cli-wallet/commands/wallet/getreceivedbyaddress",title:"getreceivedbyaddress",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/getreceivedbyaddress",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"sidebarWallet",previous:{title:"getreceivedbyaccount",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaccount"},next:{title:"gettransaction",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/gettransaction"}},o={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:m};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getreceivedbyaddress"},"getreceivedbyaddress"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'getreceivedbyaddress "address" ( minconf addlocked )')),(0,r.kt)("p",null,"Returns the total amount received by the given address in transactions with at least minconf confirmations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# The amount from transactions with at least 1 confirmation\nraptoreum-cli getreceivedbyaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG"\n\n# The amount including unconfirmed transactions, zero confirmations\nraptoreum-cli getreceivedbyaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 0\n\n# The amount with at least 6 confirmations\nraptoreum-cli getreceivedbyaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 6\n')),(0,r.kt)(l.Z,{playing:!0,controls:!0,url:[{src:`${a(8730).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"address"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The raptoreum address for transactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minconf"),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"Only include transactions confirmed at least this many times.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addlocked"),(0,r.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include transactions locked via InstantSend.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "address"         (string, required) The raptoreum address for transactions.\n2. minconf             (numeric, optional, default=1) Only include transactions confirmed at least this many times.\n3. addlocked           (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"The total amount in RTM received for this address.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\namount   (numeric) The total amount in RTM received at this address.\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaddress", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},8730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getreceivedbyaddress-8001346f12a71df733459b81ea550a48.webm"}}]);