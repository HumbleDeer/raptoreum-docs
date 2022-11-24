"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[3],{4015:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=l(7462),r=(l(7294),l(3905));l(2004);const n={sidebar_position:21},m="importelectrumwallet",i={unversionedId:"wallet/cli-wallet/commands/wallet/importelectrumwallet",id:"wallet/cli-wallet/commands/wallet/importelectrumwallet",title:"importelectrumwallet",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/importelectrumwallet.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/importelectrumwallet",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/importelectrumwallet",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/importelectrumwallet.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"sidebarWallet",previous:{title:"importaddress",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/importaddress"},next:{title:"importmulti",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/importmulti"}},o={},s=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"importelectrumwallet"},"importelectrumwallet"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'importelectrumwallet "filename" index')),(0,r.kt)("p",null,"Imports keys from an Electrum wallet export file (.csv or .json)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Import the wallet\nraptoreum-cli importelectrumwallet "test.csv"\nraptoreum-cli importelectrumwallet "test.json"\n')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"filename"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The Electrum wallet export file, should be in csv or json format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"Rescan the wallet for transactions starting from this block index")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "filename"    (string, required) The Electrum wallet export file, should be in csv or json format\n2. index         (numeric, optional, default=0) Rescan the wallet for transactions starting from this block index\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Import using the json rpc call\ncurl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importelectrumwallet", "params": ["test.csv"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\ncurl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importelectrumwallet", "params": ["test.json"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0}}]);