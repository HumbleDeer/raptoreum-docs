"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[2829],{1617:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var l=a(7462),n=(a(7294),a(3905)),r=a(2004);const o={sidebar_position:12},c="getbalance",s={unversionedId:"wallet/cli-wallet/commands/wallet/getbalance",id:"wallet/cli-wallet/commands/wallet/getbalance",title:"getbalance",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/getbalance.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/getbalance",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/getbalance",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/getbalance.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"sidebarWallet",previous:{title:"getaddressesbyaccount",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/getaddressesbyaccount"},next:{title:"getnewaddress",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/getnewaddress"}},i={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d};function m(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,l.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getbalance"},"getbalance"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'getbalance ( "account" minconf addlocked include_watchonly )')),(0,n.kt)("p",null,'If account is not specified, returns the server\'s total available balance.\nIf account is specified (DEPRECATED), returns the balance in the account.\nNote that the account "" is not the same as leaving the parameter out.\nThe server total may be different to the balance in the default "" account.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# The total amount in the wallet with 1 or more confirmations\nraptoreum-cli getbalance\n\n# The total amount in the wallet at least 6 blocks confirmed\nraptoreum-cli getbalance "*" 6\n')),(0,n.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(907).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"account"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},'DEPRECATED. The selected account, or "',"*",'" for entire wallet. It may be the default account using "".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minconf"),(0,n.kt)("td",{parentName:"tr",align:null},"(number)"),(0,n.kt)("td",{parentName:"tr",align:null},"Only include transactions confirmed at least this many times.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addlocked"),(0,n.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to include the value of transactions locked via InstantSend in the wallet's balance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"include_watchonly"),(0,n.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,n.kt)("td",{parentName:"tr",align:null},"Also include balance in watch-only addresses (see 'importaddress')")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "account"        (string, optional) DEPRECATED. The selected account, or "*" for entire wallet. It may be the default account using "".\n2. minconf          (numeric, optional, default=1) Only include transactions confirmed at least this many times.\n3. addlocked      (bool, optional, default=false) Whether to include the value of transactions locked via InstantSend in the wallet\'s balance.\n4. include_watchonly (bool, optional, default=false) Also include balance in watch-only addresses (see \'importaddress\')\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"(number)"),(0,n.kt)("td",{parentName:"tr",align:null},"The total amount in RTM received for this account.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\namount              (numeric) The total amount in RTM received for this account.\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["*", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},907:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/medias/getbalance-3d8e056ca8c05ffc63472b496192123d.webm"}}]);