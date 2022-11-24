"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[1984],{9608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),i=a(2004);const r={sidebar_position:10},s="getblockstats",o={unversionedId:"wallet/cli-wallet/commands/blockchain/getblockstats",id:"wallet/cli-wallet/commands/blockchain/getblockstats",title:"getblockstats",description:"",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getblockstats.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getblockstats",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getblockstats",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getblockstats.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sidebarWallet",previous:{title:"getblockheaders",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getblockheaders"},next:{title:"getchaintips",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getchaintips"}},c={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m};function x(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getblockstats"},"getblockstats"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getblockstats hash_or_height ( stats )")),(0,l.kt)("p",null,"Compute per block statistics for a given window. All amounts are in duffs.\nIt won't work for some heights with pruning.\nIt won't work without -txindex for utxo_size_inc, ",(0,l.kt)("em",{parentName:"p"},"fee or "),"feerate stats."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'raptoreum-cli getblockstats 1000 \'["minfeerate","avgfeerate"]\'')),(0,l.kt)(i.Z,{playing:!0,controls:!0,url:[{src:`${a(378).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"hash_or_height"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string or numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash or height of the target block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"stats"'),(0,l.kt)("td",{parentName:"tr",align:null},"(array)"),(0,l.kt)("td",{parentName:"tr",align:null},"Values to plot, by default all values (see result below)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"test\n|")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "hash_or_height"     (string or numeric, required) The block hash or height of the target block\n2. "stats"              (array,  optional) Values to plot, by default all values (see result below)\n    [\n      "height",         (string, optional) Selected statistic\n      "time",           (string, optional) Selected statistic\n      ,...\n    ]\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{                           (json object)\n  "avgfee": xxxxx,          (numeric) Average fee in the block\n  "avgfeerate": xxxxx,      (numeric) Average feerate (in duffs per byte)\n  "avgtxsize": xxxxx,       (numeric) Average transaction size\n  "blockhash": xxxxx,       (string) The block hash (to check for potential reorgs)\n  "height": xxxxx,          (numeric) The height of the block\n  "ins": xxxxx,             (numeric) The number of inputs (excluding coinbase)\n  "maxfee": xxxxx,          (numeric) Maximum fee in the block\n  "maxfeerate": xxxxx,      (numeric) Maximum feerate (in duffs per byte)\n  "maxtxsize": xxxxx,       (numeric) Maximum transaction size\n  "medianfee": xxxxx,       (numeric) Truncated median fee in the block\n  "medianfeerate": xxxxx,   (numeric) Truncated median feerate (in duffs per byte)\n  "mediantime": xxxxx,      (numeric) The block median time past\n  "mediantxsize": xxxxx,    (numeric) Truncated median transaction size\n  "minfee": xxxxx,          (numeric) Minimum fee in the block\n  "minfeerate": xxxxx,      (numeric) Minimum feerate (in duffs per byte)\n  "mintxsize": xxxxx,       (numeric) Minimum transaction size\n  "outs": xxxxx,            (numeric) The number of outputs\n  "subsidy": xxxxx,         (numeric) The block subsidy\n  "time": xxxxx,            (numeric) The block time\n  "total_out": xxxxx,       (numeric) Total amount in all outputs (excluding coinbase and thus reward [ie subsidy + totalfee])\n  "total_size": xxxxx,      (numeric) Total size of all non-coinbase transactions\n  "totalfee": xxxxx,        (numeric) The fee total\n  "txs": xxxxx,             (numeric) The number of transactions (excluding coinbase)\n  "utxo_increase": xxxxx,   (numeric) The increase/decrease in the number of unspent outputs\n  "utxo_size_inc": xxxxx,   (numeric) The increase/decrease in size for the utxo index (not discounting op_return and similar)\n}\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockstats", "params": [1000 \'["minfeerate","avgfeerate"]\'] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}x.isMDXComponent=!0},378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getblockstats-a4fbf36e439d2a538e13a2d53e37c55a.webm"}}]);