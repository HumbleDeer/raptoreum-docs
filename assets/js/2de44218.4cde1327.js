"use strict";(self.webpackChunkraptordocs=self.webpackChunkraptordocs||[]).push([[7034],{63498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>o,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var l=a(87462),r=(a(67294),a(3905)),n=a(22004);const p={sidebar_position:6},d="dumpprivkey",s={unversionedId:"wallet/cli-wallet/commands/wallet/dumpprivkey",id:"wallet/cli-wallet/commands/wallet/dumpprivkey",title:"dumpprivkey",description:'dumpprivkey "address"',source:"@site/docs/wallet/cli-wallet/commands/wallet/dumpprivkey.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/dumpprivkey",permalink:"/docs/wallet/cli-wallet/commands/wallet/dumpprivkey",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/dumpprivkey.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"dumphdinfo",permalink:"/docs/wallet/cli-wallet/commands/wallet/dumphdinfo"},next:{title:"dumpwallet",permalink:"/docs/wallet/cli-wallet/commands/wallet/dumpwallet"}},m={},i=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:i};function o(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dumpprivkey"},"dumpprivkey"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'dumpprivkey "address"')),(0,r.kt)("p",null,"Reveals the private key corresponding to 'address'.\nThen the importprivkey can be used with this output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Examples:\nraptoreum-cli dumpprivkey "myaddress"\nraptoreum-cli importprivkey "mykey"\n')),(0,r.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${a(70249).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"address"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The raptoreum address for the private key")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "address"   (string, required) The raptoreum address for the private key\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"key"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The private key")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"key"                (string) The private key\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "dumpprivkey", "params": ["myaddress"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}o.isMDXComponent=!0},70249:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/medias/dumpprivkey-771686f7a1dddefca20e0cdd4555a47d.webm"}}]);