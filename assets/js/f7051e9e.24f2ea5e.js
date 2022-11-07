"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[9863],{9885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(22004);const s={sidebar_position:34},d="listreceivedbyaddress",i={unversionedId:"wallet/cli-wallet/commands/wallet/listreceivedbyaddress",id:"wallet/cli-wallet/commands/wallet/listreceivedbyaddress",title:"listreceivedbyaddress",description:"listreceivedbyaddress ( minconf addlocked includeempty includewatchonly)",source:"@site/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/listreceivedbyaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaddress",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaddress.mdx",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_position:34},sidebar:"tutorialSidebar",previous:{title:"listreceivedbyaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaccount"},next:{title:"listsinceblock",permalink:"/docs/wallet/cli-wallet/commands/wallet/listsinceblock"}},o={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function u(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listreceivedbyaddress"},"listreceivedbyaddress"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"listreceivedbyaddress ( minconf addlocked include_empty include_watchonly)")),(0,l.kt)("p",null,"List incoming payments grouped by receiving address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"raptoreum-cli listreceivedbyaddress\nraptoreum-cli listreceivedbyaddress 6 false true\n")),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(13658).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minconf"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"nly include transactions with at least this many confirmations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addlocked"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include transactions locked via InstantSend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_empty"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include accounts that haven't received any payments.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_watchonly"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Include balances in watch-only addresses (see 'importaddress')")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Arguments:\n1. minconf           (numeric, optional, default=1) The minimum number of confirmations before payments are included.\n2. addlocked         (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n3. include_empty     (bool, optional, default=false) Whether to include addresses that haven't received any payments.\n4. include_watchonly (bool, optional, default=false) Whether to include watch-only addresses (see 'importaddress').\n")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"involvesWatchonly"'),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Only returned if imported addresses were involved in transaction")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  {\n    "involvesWatchonly" : true,        (bool) Only returned if imported addresses were involved in transaction\n    "address" : "receivingaddress",    (string) The receiving address\n    "account" : "accountname",         (string) DEPRECATED. The account of the receiving address. The default account is "".\n    "amount" : x.xxx,                  (numeric) The total amount in RTM received by the address\n    "confirmations" : n                (numeric) The number of confirmations of the most recent transaction included.\n                                                 If \'addlocked\' is true, the number of confirmations can be less than\n                                                 configured for transactions locked via InstantSend\n    "label" : "label",               (string) A comment for the address/transaction, if any\n    "txids": [\n       n,                                (numeric) The ids of transactions received with the address\n       ...\n    ]\n  }\n  ,...\n]\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaddress", "params": [6, false, true, true] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},13658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/listreceivedbyaddress-9c831aa3ce4e9be545ae46062e06ffbe.webm"}}]);