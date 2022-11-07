"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[4753],{73302:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>k});var l=a(87462),n=(a(67294),a(3905)),o=a(22004);const c={sidebar_position:2},r="getbestchainlock",s={unversionedId:"wallet/cli-wallet/commands/blockchain/getbestchainlock",id:"wallet/cli-wallet/commands/blockchain/getbestchainlock",title:"getbestchainlock",description:"Returns the block hash of the best chainlock. Throws an error if there is no known chainlock yet.",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getbestchainlock.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getbestchainlock",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getbestchainlock",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getbestchainlock.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"getbestblockhash",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getbestblockhash"},next:{title:"getblock",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblock"}},i={},k=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],h={toc:k};function d(t){let{components:e,...c}=t;return(0,n.kt)("wrapper",(0,l.Z)({},h,c,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getbestchainlock"},"getbestchainlock"),(0,n.kt)("p",null,"Returns the block hash of the best chainlock. Throws an error if there is no known chainlock yet."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"raptoreum-cli getbestchainlock")),(0,n.kt)(o.Z,{playing:!0,controls:!0,url:[{src:`${a(430).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"blockhash" : "hash"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The block hash hex encoded"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"height"'),(0,n.kt)("td",{parentName:"tr",align:null},"(number)"),(0,n.kt)("td",{parentName:"tr",align:null},"The block height or index"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"known_block" : true'),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,n.kt)("td",{parentName:"tr",align:null},"True if the block is known by our node")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "blockhash" : "hash",      (string) The block hash hex encoded\n  "height" : n,              (numeric) The block height or index\n  "known_block" : true|false (boolean) True if the block is known by our node\n}\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressdeltas", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},430:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/medias/getbestchainlock-b3c5d1b78b8c93fc4dab9bd4b2269177.webm"}}]);