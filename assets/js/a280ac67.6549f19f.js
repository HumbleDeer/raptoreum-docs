"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[1627],{27877:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(22004);const i={sidebar_position:17},o="gettransaction",c={unversionedId:"wallet/cli-wallet/commands/wallet/gettransaction",id:"wallet/cli-wallet/commands/wallet/gettransaction",title:"gettransaction",description:'gettransaction "txid" ( includewatchonly )_',source:"@site/docs/wallet/cli-wallet/commands/wallet/gettransaction.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/gettransaction",permalink:"/docs/wallet/cli-wallet/commands/wallet/gettransaction",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/gettransaction.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"getreceivedbyaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress"},next:{title:"getunconfirmedbalance",permalink:"/docs/wallet/cli-wallet/commands/wallet/getunconfirmedbalance"}},s={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d};function u(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gettransaction"},"gettransaction"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'gettransaction "txid" ( include_watchonly )')),(0,l.kt)("p",null,"Get detailed information about in-wallet transaction txid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'raptoreum-cli gettransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"\nraptoreum-cli gettransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d" true\n')),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(93535).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"txid"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"include_watchonly"'),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include watch-only addresses in balance calculation and details[]")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "txid"                  (string, required) The transaction id\n2. "include_watchonly"     (bool, optional, default=false) Whether to include watch-only addresses in balance calculation and details[]\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"amount"'),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction amount in RTM")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "amount" : x.xxx,        (numeric) The transaction amount in RTM\n  "fee": x.xxx,            (numeric) The amount of the fee in RTM. This is negative and only available for the\n                              \'send\' category of transactions.\n  "instantlock" : true|false, (bool) Current transaction lock state\n  "instantlock_internal" : true|false, (bool) Current internal transaction lock state\n  "chainlock" : true|false, (bool) The state of the corresponding block chainlock\n  "confirmations" : n,     (numeric) The number of blockchain confirmations\n  "blockhash" : "hash",    (string) The block hash\n  "blockindex" : xx,       (numeric) The index of the transaction in the block that includes it\n  "blocktime" : ttt,       (numeric) The time in seconds since epoch (1 Jan 1970 GMT)\n  "txid" : "transactionid",   (string) The transaction id.\n  "time" : ttt,            (numeric) The transaction time in seconds since epoch (1 Jan 1970 GMT)\n  "timereceived" : ttt,    (numeric) The time received in seconds since epoch (1 Jan 1970 GMT)\n  "details" : [\n    {\n      "account" : "accountname",      (string) DEPRECATED. The account name involved in the transaction, can be "" for the default account.\n      "address" : "address",          (string) The raptoreum address involved in the transaction\n      "category" : "send|receive",    (string) The category, either \'send\' or \'receive\'\n      "amount" : x.xxx,               (numeric) The amount in RTM\n      "label" : "label",              (string) A comment for the address/transaction, if any\n      "vout" : n,                     (numeric) the vout value\n      "fee": x.xxx,                     (numeric) The amount of the fee in RTM. This is negative and only available for the\n                                           \'send\' category of transactions.\n      "abandoned": xxx                  (bool) \'true\' if the transaction has been abandoned (inputs are respendable). Only available for the\n                                           \'send\' category of transactions.\n    }\n    ,...\n  ],\n  "hex" : "data"                      (string) Raw data for transaction\n}\n\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},93535:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/medias/gettransaction-7a3ccaf20d5cbc253f58944473f1fa81.webm"}}]);