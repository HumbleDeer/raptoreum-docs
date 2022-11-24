"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[1337],{3229:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:43},i="sendtoaddress",o={unversionedId:"wallet/cli-wallet/commands/wallet/sendtoaddress",id:"wallet/cli-wallet/commands/wallet/sendtoaddress",title:"sendtoaddress",description:"Send an amount of Raptoreum to a given address",source:"@site/docs/wallet/cli-wallet/commands/wallet/sendtoaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/sendtoaddress",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/sendtoaddress",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/sendtoaddress.mdx",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43},sidebar:"sidebarWallet",previous:{title:"sendmany",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/sendmany"},next:{title:"setaccount",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/setaccount"}},s={},d=[{value:"Basic syntax",id:"basic-syntax",level:2},{value:"Arguments",id:"arguments",level:2},{value:"raptoreum-cli",id:"raptoreum-cli",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2},{value:"Using the Raptoreum-CLI:",id:"using-the-raptoreum-cli",level:3},{value:"Sending a simple 100 RTM transaction to a friend, with a note:",id:"sending-a-simple-100-rtm-transaction-to-a-friend-with-a-note",level:4},{value:"Sending a 50 RTM Futures transaction with a note, set to release after 100 block verifications and after 7 days (60s x 60m x 24h x 7d = 604800s):",id:"sending-a-50-rtm-futures-transaction-with-a-note-set-to-release-after-100-block-verifications-and-after-7-days-60s-x-60m-x-24h-x-7d--604800s",level:4},{value:"Using the RPC API:",id:"using-the-rpc-api",level:3}],m={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sendtoaddress"},"sendtoaddress"),(0,r.kt)("p",null,"Send an amount of Raptoreum to a given address"),(0,r.kt)("h2",{id:"basic-syntax"},"Basic syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sendtoaddress <address> <amount> [<own_note> <recipient_note>]")),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination address"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Desired amount in Raptoreum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"future:")),(0,r.kt)("td",{parentName:"tr",align:null},"{json}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},'\'{"future_maturity": n, "future_locktime": n}\'')),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\u21b3 future_maturity: n")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"number of confirmation for this future to mature."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\u21b3 future_locktime: n")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"time in seconds from first confirmation for future to mature"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A comment about the transaction (private)"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment_to"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A comment about the receiving person or organization (private)"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"raptoreum-cli"},"raptoreum-cli"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"raptoreum-cli help sendtoaddress")," output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Arguments:\n1. "address"                    (string, required) The raptoreum address to send to.\n2. "amount"                     (numeric or string, required) The amount in RTM to send. eg 0.1\n3. "future"                     (string, optional) future transaction is mature when it has enough confirmation                                                      or locktime in seconds has past from its first confirm\n      {\n         "future_maturity":n,   (numeric, required) number of confirmation for this future to mature.\n         "future_locktime":n    (numeric, required) total time in seconds from its first confirmation for this future to mature\n      }\n4. "comment"                    (string, optional)  A comment used to store what the transaction is for.\n                                                    This is not part of the transaction, just kept in your wallet.\n5. "comment_to"                 (string, optional)  A comment to store the name of the person or organization\n                                                    to which you\'re sending the transaction. This is not part of the\n                                                    transaction, just kept in your wallet.\n6. subtractfeefromamount        (boolean, optional, default=false) The fee will be deducted from the amount being sent.\n                                                    The recipient will receive less amount of Raptoreum than you enter in the amount field.\n7. "use_is"                     (bool, optional, default=false) Deprecated and ignored\n8. "use_cj"                     (bool, optional, default=false) Use CoinJoin funds only\n9. conf_target                  (numeric, optional) Confirmation target (in blocks)\n10. "estimate_mode"             (string, optional, default=UNSET) The fee estimate mode, must be one of:\n       "UNSET"\n       "ECONOMICAL"\n       "CONSERVATIVE"\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The transaction id of the submitted transaction")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"using-the-raptoreum-cli"},"Using the Raptoreum-CLI:"),(0,r.kt)("h4",{id:"sending-a-simple-100-rtm-transaction-to-a-friend-with-a-note"},"Sending a simple 100 RTM transaction to a friend, with a note:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'raptorium-cli sendtoaddress <address> <amount> <"own_note"> <"recipient_note">')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'raptorium-cli sendtoaddress XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG 100 "donation to you" "friend from club"')),(0,r.kt)("h4",{id:"sending-a-50-rtm-futures-transaction-with-a-note-set-to-release-after-100-block-verifications-and-after-7-days-60s-x-60m-x-24h-x-7d--604800s"},"Sending a 50 RTM Futures transaction with a note, set to release after 100 block verifications and after 7 days (60s x 60m x 24h x 7d = 604800s):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'raptorium-cli sendtoaddress <address> <amount> \'{"future_maturity": unlock_time_blocks, "future_locktime": unlock_time_seconds}\' <"own_note">')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'raptorium-cli sendtoaddress XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG 100 \'{"future_maturity":100, "future_locktime": 604800}\' "This will unlock in 7 days"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"using-the-rpc-api"},"Using the RPC API:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", 0.1, "donation", "seans outpost"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/')))}u.isMDXComponent=!0}}]);