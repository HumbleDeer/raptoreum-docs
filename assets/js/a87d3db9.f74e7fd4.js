"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[5918],{7326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={},u="Futures",s={unversionedId:"raptoreum/futures",id:"raptoreum/futures",title:"Futures",description:"Futures are a feature on the Raptoreum blockchain that allow users to plan the release of funds by timed events or countdowns. Futures work with smart contracts on the blockchain to ensure the funds are locked as required and released when they are due.",source:"@site/docs/raptoreum/futures.mdx",sourceDirName:"raptoreum",slug:"/raptoreum/futures",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/raptoreum/futures",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/raptoreum/futures.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebarMore",previous:{title:"RTM Exchanges",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/raptoreum/exchanges"},next:{title:"Shared node services",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/raptoreum/shared-nodes"}},i={},l=[{value:"Fundamentals",id:"fundamentals",level:2},{value:"Usage",id:"usage",level:2},{value:"Maturing",id:"maturing",level:2}],d={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"futures"},"Futures"),(0,n.kt)("p",null,"Futures are a feature on the Raptoreum blockchain that allow users to plan the release of funds by timed events or countdowns. Futures work with smart contracts on the blockchain to ensure the funds are locked as required and released when they are due."),(0,n.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Futures can be set and used through the RaptoreumCore software. Both the GUI and CLI packages support handling Futures and/or setting them up."),(0,n.kt)("p",null,"For information on how to use the CLI commands related to Futures, check out these articles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sendtoaddress: ",(0,n.kt)("a",{parentName:"li",href:"docs/wallet/cli-wallet/commands/wallet/sendtoaddress"},"raptoreum-cli - sendtoaddress")," "),(0,n.kt)("li",{parentName:"ul"},"raptoreum-cli: ",(0,n.kt)("a",{parentName:"li",href:"docs/wallet/cli-wallet/getting-started"},"raptoreum-cli Quick Start"))),(0,n.kt)("h2",{id:"maturing"},"Maturing"),(0,n.kt)("p",null,"Futures are set to mature by (or in) the time and/or threshold set by the transaction-maker."),(0,n.kt)("p",null,"The Futures arguments in a transaction contains two properties: ",(0,n.kt)("inlineCode",{parentName:"p"},"future_maturity")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"future_locktime"),'. Both are related to when the Futures transaction matures (gets released for usage/payout). While these are both marked as "Required" on the CLI output, this is not strictly true. They are only (both) required when you choose to use Futures.'),(0,n.kt)("p",null,"When entering these arguments into the Futures segment of the transaction command (sendtoaddress), it is important to note the quotation marks used. These are used in this specific way in order to comply with JSON data structure requirements (as futures are defined in a json structure on the command line). "),(0,n.kt)("p",null,"The correct notation is: ",(0,n.kt)("inlineCode",{parentName:"p"},'\'{"future_maturity": n, "future_locktime": n}\'')),(0,n.kt)("p",null,"The outer quotation marks surround the curved braces, surrounding the ",(0,n.kt)("em",{parentName:"p"},"{")," and ",(0,n.kt)("em",{parentName:"p"},"}")," either side. These braces define the JSON object. Inside this object, two objects are defined in typical JSON notation, where a string is surrounded by ",(0,n.kt)("strong",{parentName:"p"},"double quotation marks"),", followed by a ",(0,n.kt)("strong",{parentName:"p"},"colon")," and a value. This is then terminated by a ",(0,n.kt)("strong",{parentName:"p"},"comma"),", and followed up with the next object and value. "),(0,n.kt)("p",null,"The last value in the object does not have a trailing comma. To read more on proper JSON formatting and object notation, please see this article on Wikipedia: ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON - Wikipedia")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Futures")),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"future_maturity: <blocks>")),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"number of confirmation for this future to mature."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"future_locktime: <seconds>")),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"time in seconds from first confirmation for future to mature"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"future_maturity"),': "number of confirmation for this future to mature"'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"future_locktime"),': "total time in seconds from its first confirmation for this future to mature"'))}m.isMDXComponent=!0}}]);