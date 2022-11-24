"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[4544],{7582:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(2004);const i={sidebar_position:3},l="prioritisetransaction",o={unversionedId:"wallet/cli-wallet/commands/mining/prioritisetransaction",id:"wallet/cli-wallet/commands/mining/prioritisetransaction",title:"prioritisetransaction",description:"",source:"@site/docs/wallet/cli-wallet/commands/mining/prioritisetransaction.mdx",sourceDirName:"wallet/cli-wallet/commands/mining",slug:"/wallet/cli-wallet/commands/mining/prioritisetransaction",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/mining/prioritisetransaction",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/mining/prioritisetransaction.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"getnetworkhashps",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/mining/getnetworkhashps"},next:{title:"submitblock",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/mining/submitblock"}},s={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prioritisetransaction"},"prioritisetransaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"prioritisetransaction txid fee delta")),(0,r.kt)("p",null,"Accepts the transaction into mined blocks at a higher (or lower) priority"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'raptoreum-cli prioritisetransaction "txid" 10000')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"txid"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The transaction id.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee_delta"),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The fee value (in duffs) to add (or subtract, if negative). The fee is not actually paid, only the algorithm for selecting transactions into a block considers the transaction as it would have paid a higher (or lower) fee.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "txid"       (string, required) The transaction id.\n2. fee_delta      (numeric, required) The fee value (in duffs) to add (or subtract, if negative).\n                  The fee is not actually paid, only the algorithm for selecting transactions into a block\n                  considers the transaction as it would have paid a higher (or lower) fee.\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns true")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\ntrue              (boolean) Returns true\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "prioritisetransaction", "params": ["txid", 10000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0}}]);