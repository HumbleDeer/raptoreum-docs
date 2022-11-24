"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[1904],{6626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(2004);const o={sidebar_position:3},s="getprivatesendinfo",l={unversionedId:"wallet/cli-wallet/commands/raptoreum/getprivatesendinfo",id:"wallet/cli-wallet/commands/raptoreum/getprivatesendinfo",title:"getprivatesendinfo",description:"",source:"@site/docs/wallet/cli-wallet/commands/raptoreum/getprivatesendinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/raptoreum",slug:"/wallet/cli-wallet/commands/raptoreum/getprivatesendinfo",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/getprivatesendinfo",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/raptoreum/getprivatesendinfo.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"getpoolinfo",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/getpoolinfo"},next:{title:"getsuperblockbudget",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/getsuperblockbudget"}},m={},u=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getprivatesendinfo"},"getprivatesendinfo"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"getprivatesendinfo")),(0,r.kt)("p",null,"Returns an object containing an information about PrivateSend settings and state."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"raptoreum-cli getprivatesendinfo ")),(0,r.kt)(i.Z,{playing:!0,controls:!0,url:[{src:`${n(646).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result (for regular nodes):\n{\n  "enabled": true|false,             (bool) Whether mixing functionality is enabled\n  "running": true|false,             (bool) Whether mixing is currently running\n  "multisession": true|false,        (bool) Whether PrivateSend Multisession option is enabled\n  "max_sessions": xxx,               (numeric) How many parallel mixing sessions can there be at once\n  "max_rounds": xxx,                 (numeric) How many rounds to mix\n  "max_amount": xxx,                 (numeric) Target PrivateSend balance in RTM\n  "max_denoms": xxx,                 (numeric) How many inputs of each denominated amount to create\n  "queue_size": xxx,                 (numeric) How many queues there are currently on the network\n  "sessions":                        (array of json objects)\n    [\n      {\n      "protxhash": "...",            (string) The ProTxHash of the smartnode\n      "outpoint": "txid-index",      (string) The outpoint of the smartnode\n      "service": "host:port",        (string) The IP address and port of the smartnode\n      "denomination": xxx,           (numeric) The denomination of the mixing session in RTM\n      "state": "...",                (string) Current state of the mixing session\n      "entries_count": xxx,          (numeric) The number of entries in the mixing session\n      }\n      ,...\n    ],\n  "keys_left": xxx,                  (numeric) How many new keys are left since last automatic backup\n  "warnings": "..."                  (string) Warnings if any\n}\n\nResult (for smartnodes):\n{\n  "queue_size": xxx,                 (numeric) How many queues there are currently on the network\n  "denomination": xxx,               (numeric) The denomination of the mixing session in RTM\n  "state": "...",                    (string) Current state of the mixing session\n  "entries_count": xxx,              (numeric) The number of entries in the mixing session\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getprivatesendinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/getprivatesendinfo-464448bda1ef2eada7b6f95a47f4343c.webm"}}]);