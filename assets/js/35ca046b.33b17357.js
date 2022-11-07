"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[6561],{58208:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>m,metadata:()=>r,toc:()=>s});var o=l(87462),a=(l(67294),l(3905)),n=l(22004);const m={sidebar_position:15},i="getmempoolinfo",r={unversionedId:"wallet/cli-wallet/commands/blockchain/getmempoolinfo",id:"wallet/cli-wallet/commands/blockchain/getmempoolinfo",title:"getmempoolinfo",description:"Returns details on the active state of the TX memory pool.",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getmempoolinfo",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"getmempoolentry",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolentry"},next:{title:"getmerkleblocks",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmerkleblocks"}},c={},s=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function u(e){let{components:t,...m}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,m,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getmempoolinfo"},"getmempoolinfo"),(0,a.kt)("p",null,"Returns details on the active state of the TX memory pool."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"raptoreum-cli getmempoolinfo")),(0,a.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${l(62144).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Result"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"size"'),(0,a.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,a.kt)("td",{parentName:"tr",align:null},"Current tx count")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "size": xxxxx,               (numeric) Current tx count\n  "bytes": xxxxx,              (numeric) Sum of all tx sizes\n  "usage": xxxxx,              (numeric) Total memory usage for the mempool\n  "maxmempool": xxxxx,         (numeric) Maximum memory usage for the mempool\n  "mempoolminfee": xxxxx       (numeric) Minimum feerate (RTM per KB) for tx to be accepted\n  "instantsendlocks": xxxxx,   (numeric) Number of unconfirmed instant send locks\n}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},62144:(e,t,l)=>{l.d(t,{Z:()=>o});const o=l.p+"assets/medias/getmempoolinfo-d3af747c9f00ea9fc00ecbe6ed02df97.webm"}}]);