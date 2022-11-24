"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[4817],{6063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=a(7462),l=(a(7294),a(3905)),n=a(2004);const s={sidebar_position:22},i="importmulti",o={unversionedId:"wallet/cli-wallet/commands/wallet/importmulti",id:"wallet/cli-wallet/commands/wallet/importmulti",title:"importmulti",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/importmulti.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/importmulti",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/importmulti",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/importmulti.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"sidebarWallet",previous:{title:"importelectrumwallet",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/importelectrumwallet"},next:{title:"importprivkey",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/importprivkey"}},p={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m};function c(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"importmulti"},"importmulti"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'importmulti "requests" ( "options" )')),(0,l.kt)("p",null,"Import addresses/scripts (with private or public keys, redeem script (P2SH)), rescanning all addresses in one-shot-only (rescan can be disabled via options). Requires a new wallet backup."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'raptoreum-cli importmulti \'[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }, { "scriptPubKey": { "address": "<my 2nd address>" }, "label": "example 2", "timestamp": 1455191480 }]\'\nraptoreum-cli importmulti \'[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }]\' \'{ "rescan": false}\'\n')),(0,l.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${a(6832).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. requests     (array, required) Data to be imported\n  [     (array of json objects)\n    {\n      "scriptPubKey": "<script>" | { "address":"<address>" }, (string / json, required) Type of scriptPubKey (string for script, json for address)\n      "timestamp": timestamp | "now"                        , (integer / string, required) Creation time of the key in seconds since epoch (Jan 1 1970 GMT),\n                                                              or the string "now" to substitute the current synced blockchain time. The timestamp of the oldest\n                                                              key will determine how far back blockchain rescans need to begin for missing wallet transactions.\n                                                              "now" can be specified to bypass scanning, for keys which are known to never have been used, and\n                                                              0 can be specified to scan the entire blockchain. Blocks up to 2 hours before the earliest key\n                                                              creation time of all keys being imported by the importmulti call will be scanned.\n      "redeemscript": "<script>"                            , (string, optional) Allowed only if the scriptPubKey is a P2SH address or a P2SH scriptPubKey\n      "pubkeys": ["<pubKey>", ... ]                         , (array, optional) Array of strings giving pubkeys that must occur in the output or redeemscript\n      "keys": ["<key>", ... ]                               , (array, optional) Array of strings giving private keys whose corresponding public keys must occur in the output or redeemscript\n      "internal": <true>                                    , (boolean, optional, default: false) Stating whether matching outputs should be treated as not incoming payments\n      "watchonly": <true>                                   , (boolean, optional, default: false) Stating whether matching outputs should be considered watched even when they\'re not spendable, only allowed if keys are empty\n      "label": <label>                                      , (string, optional, default: \'\') Label to assign to the address (aka account name, for now), only allowed with internal=false\n    }\n  ,...\n  ]\n2. options                 (json, optional)\n  {\n     "rescan": <false>,         (boolean, optional, default: true) Stating if should rescan the blockchain after all imports\n  }\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Response is an array with the same size as the input that has the execution result :\n  [{ "success": true } , { "success": false, "error": { "code": -1, "message": "Internal Server Error"} }, ... ]\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Import using the json rpc call\ncurl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importelectrumwallet", "params": ["test.csv"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\ncurl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importelectrumwallet", "params": ["test.json"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}c.isMDXComponent=!0},6832:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/medias/importmulti-a7f82227837386dd508ebb7f8c542238.webm"}}]);