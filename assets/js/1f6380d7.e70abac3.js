"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[5085],{3303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var l=a(7462),n=(a(7294),a(3905));a(2004);const r={sidebar_position:24},o="reconsiderblock",c={unversionedId:"wallet/cli-wallet/commands/blockchain/reconsiderblock",id:"wallet/cli-wallet/commands/blockchain/reconsiderblock",title:"reconsiderblock",description:"",source:"@site/docs/wallet/cli-wallet/commands/blockchain/reconsiderblock.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/reconsiderblock",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/reconsiderblock",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/reconsiderblock.mdx",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"sidebarWallet",previous:{title:"pruneblockchain",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/pruneblockchain"},next:{title:"verifychain",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/verifychain"}},i={},s=[{value:"Arguments",id:"arguments",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reconsiderblock"},"reconsiderblock"),(0,n.kt)("p",null,"Removes invalidity status of a block and its descendants, reconsider them for activation.\nThis can be used to undo the effects of invalidateblock."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'raptoreum-cli reconsiderblock "00000000000fd08c2fb661d2fcb0d49abb3a91e5f27082ce64feed3b4dede2e2"')),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"blockhash"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The block hash")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n{\n  "blockhash" (string, required) The block hash\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\n## Examples\n\n```bash\ncurl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "reconsiderblock", "params": ["blockhash"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0}}]);