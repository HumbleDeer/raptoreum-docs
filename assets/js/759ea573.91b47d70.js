"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[7459],{49116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),o=n(22004);const i={sidebar_position:14},r="getmempoolentry",s={unversionedId:"wallet/cli-wallet/commands/blockchain/getmempoolentry",id:"wallet/cli-wallet/commands/blockchain/getmempoolentry",title:"getmempoolentry",description:"getmempoolentry txid",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getmempoolentry.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getmempoolentry",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolentry",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getmempoolentry.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"getmempooldescendants",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempooldescendants"},next:{title:"getmempoolinfo",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo"}},m={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getmempoolentry"},"getmempoolentry"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getmempoolentry txid")),(0,l.kt)("p",null,"Returns mempool data for given transaction"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'raptoreum-cli getmempoolentry "mytxid"')),(0,l.kt)(o.Z,{playing:!0,controls:!0,url:[{src:`${n(11553).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"txid"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction id (must be in mempool)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "txid"                   (string, required) The transaction id (must be in mempool)\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"transactionid"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction id of an in-mempool ancestor transaction")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{                           (json object)\n    "size" : n,                 (numeric) transaction size in bytes\n    "fee" : n,                  (numeric) transaction fee in RTM\n    "modifiedfee" : n,          (numeric) transaction fee with fee deltas used for mining priority\n    "time" : n,                 (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               (numeric) block height when transaction entered pool\n    "descendantcount" : n,      (numeric) number of in-mempool descendant transactions (including this one)\n    "descendantsize" : n,       (numeric) size of in-mempool descendants (including this one)\n    "descendantfees" : n,       (numeric) modified fees (see above) of in-mempool descendants (including this one)\n    "ancestorcount" : n,        (numeric) number of in-mempool ancestor transactions (including this one)\n    "ancestorsize" : n,         (numeric) size of in-mempool ancestors (including this one)\n    "ancestorfees" : n,         (numeric) modified fees (see above) of in-mempool ancestors (including this one)\n    "depends" : [               (array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        (string) parent transaction id\n       ... ],\n    "instantlock" : true|false  (boolean) True if this transaction was locked via InstantSend\n}\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolentry", "params": ["mytxid"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},11553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/getmempoolentry-5a680cf7abf459ab588dc498f70a5422.webm"}}]);