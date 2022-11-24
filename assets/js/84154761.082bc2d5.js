"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[5682],{7146:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(2004);const l={sidebar_position:1},i="getgovernanceinfo",c={unversionedId:"wallet/cli-wallet/commands/raptoreum/getgovernanceinfo",id:"wallet/cli-wallet/commands/raptoreum/getgovernanceinfo",title:"getgovernanceinfo",description:"",source:"@site/docs/wallet/cli-wallet/commands/raptoreum/getgovernanceinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/raptoreum",slug:"/wallet/cli-wallet/commands/raptoreum/getgovernanceinfo",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/getgovernanceinfo",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/raptoreum/getgovernanceinfo.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"setnetworkactive",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/network/setnetworkactive"},next:{title:"getpoolinfo",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/raptoreum/getpoolinfo"}},s={},m=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getgovernanceinfo"},"getgovernanceinfo"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"getgovernanceinfo")),(0,r.kt)("p",null,"Returns an object containing governance parameters."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"raptoreum-cli getgovernanceinfo")),(0,r.kt)(o.Z,{playing:!0,controls:!0,url:[{src:`${a(2199).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "governanceminquorum": xxxxx,           (numeric) the absolute minimum number of votes needed to trigger a governance action\n  "proposalfee": xxx.xx,                  (numeric) the collateral transaction fee which must be paid to create a proposal in RTM\n  "superblockcycle": xxxxx,               (numeric) the number of blocks between superblocks\n  "lastsuperblock": xxxxx,                (numeric) the block number of the last superblock\n  "nextsuperblock": xxxxx,                (numeric) the block number of the next superblock\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getgovernanceinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},2199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getgovernanceinfo-860be7da4a183f897fb494e65a2609eb.webm"}}]);