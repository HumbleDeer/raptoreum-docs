"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[9338],{2635:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),o=a(2004);const r={sidebar_position:39},m="move",u={unversionedId:"wallet/cli-wallet/commands/wallet/move",id:"wallet/cli-wallet/commands/wallet/move",title:"move",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/move.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/move",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/move",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/move.mdx",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39},sidebar:"sidebarWallet",previous:{title:"lockunspent",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/lockunspent"},next:{title:"removeprunedfunds",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/removeprunedfunds"}},i={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c};function d(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"move"},"move"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'move "fromaccount" "toaccount" amount ( minconf "comment" )')),(0,l.kt)("p",null,"DEPRECATED. Move a specified amount from one account in your wallet to another."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Move 0.01 RTM from the default account to the account named tabby\nraptoreum-cli move "" "tabby" 0.01\n\n# Move 0.01 RTM timotei to akiko with a comment and funds have 6 confirmations\nraptoreum-cli move "timotei" "akiko" 0.01 6 "happy birthday!"\n')),(0,l.kt)(o.Z,{playing:!0,controls:!0,url:[{src:`${a(4234).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"fromaccount"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},'The name of the account to move funds from. May be the default account using "".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"toaccount"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},'The name of the account to move funds to. May be the default account using "".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Quantity of RTM to move between accounts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dummy"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Ignored. Remains for backward compatibility.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"comment"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"An optional comment, stored in the wallet only.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "fromaccount"    (string, required) The name of the account to move funds from. May be the default account using "".\n2. "toaccount"      (string, required) The name of the account to move funds to. May be the default account using "".\n3. amount           (numeric) Quantity of RTM to move between accounts.\n4. (dummy)          (numeric, optional) Ignored. Remains for backward compatibility.\n5. "comment"        (string, optional) An optional comment, stored in the wallet only.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the command was successful or not")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\ntrue|false          (boolean) true if successful.\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "move", "params": ["timotei", "akiko", 0.01, 6, "happy birthday!"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},4234:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/medias/move-1575b3816b89eca50a54792f18b7cf3b.webm"}}]);