"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[5056],{664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=a(7462),r=(a(7294),a(3905));a(2004);const l={sidebar_position:5},n="validateaddress",i={unversionedId:"wallet/cli-wallet/commands/util/validateaddress",id:"wallet/cli-wallet/commands/util/validateaddress",title:"validateaddress",description:"",source:"@site/docs/wallet/cli-wallet/commands/util/validateaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/util",slug:"/wallet/cli-wallet/commands/util/validateaddress",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/util/validateaddress",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/util/validateaddress.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebarWallet",previous:{title:"signmessagewithprivkey",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/util/signmessagewithprivkey"},next:{title:"verifymessage",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/util/verifymessage"}},d={},o=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validateaddress"},"validateaddress"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'validateaddress "address"')),(0,r.kt)("p",null,"Return information about the given raptoreum address."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'raptoreum-cli validateaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"address"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The raptoreum address to validate")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "address"     (string, required) The raptoreum address to validate\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "isvalid" : true|false,       (boolean) If the address is valid or not. If not, this is the only property returned.\n  "address" : "address", (string) The raptoreum address validated\n  "scriptPubKey" : "hex",       (string) The hex encoded scriptPubKey generated by the address\n  "ismine" : true|false,        (boolean) If the address is yours or not\n  "iswatchonly" : true|false,   (boolean) If the address is watchonly\n  "isscript" : true|false,      (boolean) If the key is a script\n  "script" : "type"             (string, optional) The output script type. Possible types: nonstandard, pubkey, pubkeyhash, scripthash, multisig, nulldata\n  "hex" : "hex",                (string, optional) The redeemscript for the p2sh address\n  "addresses"                   (string, optional) Array of addresses associated with the known redeemscript\n    [\n      "address"\n      ,...\n    ]\n  "sigsrequired" : xxxxx        (numeric, optional) Number of signatures required to spend multisig output\n  "pubkey" : "publickeyhex",    (string) The hex value of the raw public key\n  "iscompressed" : true|false,  (boolean) If the address is compressed\n  "account" : "account"         (string) DEPRECATED. The account associated with the address, "" is the default account\n  "timestamp" : timestamp,        (number, optional) The creation time of the key if available in seconds since epoch (Jan 1 1970 GMT)\n  "hdkeypath" : "keypath"       (string, optional) The HD keypath if the key is HD and available\n  "hdchainid" : "<hash>"        (string, optional) The ID of the HD chain\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "validateaddress", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0}}]);