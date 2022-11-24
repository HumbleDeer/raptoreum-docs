"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[9153],{5991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(7462),l=(a(7294),a(3905)),r=a(2004);const o={sidebar_position:8},s="getblockheader",i={unversionedId:"wallet/cli-wallet/commands/blockchain/getblockheader",id:"wallet/cli-wallet/commands/blockchain/getblockheader",title:"getblockheader",description:"",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getblockheader.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getblockheader",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getblockheader",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getblockheader.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebarWallet",previous:{title:"getblockhashes",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getblockhashes"},next:{title:"getblockheaders",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getblockheaders"}},c={},h=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:h};function m(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getblockheader"},"getblockheader"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'getblockheader "hash" ( verbose )')),(0,l.kt)("p",null,"If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'.\nIf verbose is true, returns an Object with information about blockheader hash."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'raptoreum-cli getblockheader "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"')),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(796).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"(default) true for a json object, false for the hex encoded data")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "hash"          (string, required) The block hash\n2. verbose           (boolean, optional, default=true) true for a json object, false for the hex encoded data\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result (for verbose = true):\n{\n  "hash" : "hash",     (string) the block hash (same as provided)\n  "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain\n  "height" : n,          (numeric) The block height or index\n  "version" : n,         (numeric) The block version\n  "versionHex" : "00000000", (string) The block version formatted in hexadecimal\n  "merkleroot" : "xxxx", (string) The merkle root\n  "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)\n  "mediantime" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)\n  "nonce" : n,           (numeric) The nonce\n  "bits" : "1d00ffff", (string) The bits\n  "difficulty" : x.xxx,  (numeric) The difficulty\n  "chainwork" : "0000...1f3"     (string) Expected number of hashes required to produce the current chain (in hex)\n  "previousblockhash" : "hash",  (string) The hash of the previous block\n  "nextblockhash" : "hash",      (string) The hash of the next block\n}\n\nResult (for verbose=false):\n"data"             (string) A string that is serialized, hex-encoded data for block \'hash\'.\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockhashes", "params": [1231614698, 1231024505] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getblockheader-0bb30f7e0f1bb3da45128b8ac04df451.webm"}}]);