"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[9024],{1529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),l=a(2004);const r={sidebar_position:5},c="gobject",s={unversionedId:"wallet/cli-wallet/commands/raptoreum/gobject",id:"wallet/cli-wallet/commands/raptoreum/gobject",title:"gobject",description:"",source:"@site/docs/wallet/cli-wallet/commands/raptoreum/gobject.mdx",sourceDirName:"wallet/cli-wallet/commands/raptoreum",slug:"/wallet/cli-wallet/commands/raptoreum/gobject",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/gobject",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/raptoreum/gobject.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebarWallet",previous:{title:"getsuperblockbudget",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/getsuperblockbudget"},next:{title:"mnsync",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/mnsync"}},i={},m=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gobject"},"gobject"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'gobject "command" ...')),(0,o.kt)("p",null,"Set of commands to manage governance objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Available commands:\n  check              - Validate governance object data (proposal only)\n  prepare            - Prepare governance object by signing and creating tx\n  submit             - Submit governance object to network\n  deserialize        - Deserialize governance object from hex string to JSON\n  count              - Count governance objects and votes (additional param: 'json' or 'all', default: 'json')\n  get                - Get governance object by hash\n  getcurrentvotes    - Get only current (tallying) votes for a governance object hash (does not include old votes)\n  list               - List governance objects (can be filtered by signal and/or object type)\n  diff               - List differences since last diff\n  vote-alias         - Vote on a governance object by smartnode proTxHash\n  vote-conf          - Vote on a governance object by smartnode configured in raptoreum.conf\n  vote-many          - Vote on a governance object by all smartnodes for which the voting key is in the wallet\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"raptoreum-cli gobject count")),(0,o.kt)(l.Z,{playing:!0,controls:!0,url:[{src:`${a(2656).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"...")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gobject", "params": ["check"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},2656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/gobject-83be34ee27ea36aa84136a62a8fc6500.webm"}}]);