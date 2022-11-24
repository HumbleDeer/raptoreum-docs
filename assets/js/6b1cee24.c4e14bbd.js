"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[1499],{3218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),d=(n(7294),n(3905));n(2004);const o={sidebar_position:4},r="getaddednodeinfo",l={unversionedId:"wallet/cli-wallet/commands/network/getaddednodeinfo",id:"wallet/cli-wallet/commands/network/getaddednodeinfo",title:"getaddednodeinfo",description:"",source:"@site/docs/wallet/cli-wallet/commands/network/getaddednodeinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/network",slug:"/wallet/cli-wallet/commands/network/getaddednodeinfo",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/network/getaddednodeinfo",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/network/getaddednodeinfo.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebarWallet",previous:{title:"disconnectnode",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/network/disconnectnode"},next:{title:"getconnectioncount",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/network/getconnectioncount"}},i={},s=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"getaddednodeinfo"},"getaddednodeinfo"),(0,d.kt)("p",null,(0,d.kt)("em",{parentName:"p"},'getaddednodeinfo ( "node" )')),(0,d.kt)("p",null,"Returns information about the given added node, or all added nodes\n(note that onetry addnodes are not listed here)"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'raptoreum-cli getaddednodeinfo\nraptoreum-cli getaddednodeinfo "192.168.0.201"\n')),(0,d.kt)("h2",{id:"arguments"},"Arguments"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"Argument"),(0,d.kt)("th",{parentName:"tr",align:null},"Type"),(0,d.kt)("th",{parentName:"tr",align:null},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},'"node"'),(0,d.kt)("td",{parentName:"tr",align:null},"(string)"),(0,d.kt)("td",{parentName:"tr",align:null},"If provided, return information about this specific node, otherwise all nodes are returned.")))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "node"   (string, optional) If provided, return information about this specific node, otherwise all nodes are returned.\n')),(0,d.kt)("h2",{id:"output"},"Output"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"Result"),(0,d.kt)("th",{parentName:"tr",align:null},"Type"),(0,d.kt)("th",{parentName:"tr",align:null},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},'"addednode"'),(0,d.kt)("td",{parentName:"tr",align:null},"(string)"),(0,d.kt)("td",{parentName:"tr",align:null},"he node IP address or name (as provided to addnode)")))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  {\n    "addednode" : "192.168.0.201",   (string) The node IP address or name (as provided to addnode)\n    "connected" : true|false,          (boolean) If connected\n    "addresses" : [                    (list of objects) Only when connected = true\n       {\n         "address" : "192.168.0.201:9999",  (string) The raptoreum server IP and port we\'re connected to\n         "connected" : "outbound"           (string) connection, inbound or outbound\n       }\n     ]\n  }\n  ,...\n]\n')),(0,d.kt)("h2",{id:"examples"},"Examples"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddednodeinfo", "params": ["192.168.0.201"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0}}]);