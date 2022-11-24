"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6869],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7462),r=a(7294),n=a(6010),o=a(2389),i=a(7392),u=a(7094),s=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:c,groupId:b,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=c??h.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),g=(0,i.l)(w,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!w.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,u.U)(),[y,C]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=b){const e=f[b];null!=e&&e!==y&&w.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),l=w[a].value;l!==y&&(I(t),C(l),null!=b&&N(b,String(l)))},R=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},k)},w.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>x.push(e),onKeyDown:R,onClick:T},o,{className:(0,n.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,l.Z)({key:String(t)},e))}},7856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var l=a(7462),r=(a(7294),a(3905)),n=a(5488),o=a(5162);const i={sidebar_position:1},u="Getting started",s={unversionedId:"wallet/cli-wallet/getting-started",id:"wallet/cli-wallet/getting-started",title:"Getting started",description:"Get started quickly with the Raptoreum Wallet CLI.",source:"@site/docs/wallet/cli-wallet/getting-started.mdx",sourceDirName:"wallet/cli-wallet",slug:"/wallet/cli-wallet/getting-started",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/getting-started",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"Powcache & Bootstrap",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/bootstrap"},next:{title:"getaddressbalance",permalink:"/C:/Program Files/Git/raptoreum-docs/docs/wallet/cli-wallet/commands/address-index/getaddressbalance"}},p={},m=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Standalone Zip",id:"standalone-zip",level:3},{value:"Precompiled Binaries",id:"precompiled-binaries",level:3}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Get started quickly with the Raptoreum Wallet CLI."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Installer: ",(0,r.kt)("a",{href:"https://github.com/Raptor3um/raptoreum/releases/download/1.3.17.01/raptoreumcore-1.3.17-win64-setup.exe",class:"button button--primary"},"raptoreumcore-1.3.17-win64-setup.exe")),(0,r.kt)("p",null,"Binaries: ",(0,r.kt)("a",{href:"https://github.com/Raptor3um/raptoreum/releases/download/1.3.17.01/raptoreum-win-1.3.17.01.zip",class:"button button--primary"},"raptoreum-win-1.3.17.01.zip"))),(0,r.kt)(o.Z,{value:"mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Installer: ",(0,r.kt)("a",{href:"https://github.com/Raptor3um/raptoreum/releases/download/1.3.17.01/Raptoreum-Qt.dmg",class:"button button--primary"},"Raptoreum-Qt.dmg")),(0,r.kt)("p",null,"Binaries: ",(0,r.kt)("a",{href:"https://github.com/Raptor3um/raptoreum/releases/download/1.3.17.01/raptoreum-macos-1.3.17.01.tar.gz",class:"button button--primary"},"raptoreum-macos-1.3.17.01.tar.gz"))),(0,r.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"Binaries: ",(0,r.kt)("a",{href:"https://github.com/Raptor3um/raptoreum/releases/download/1.3.17.01/raptoreum-ubuntu20-1.3.17.01.tar.gz",class:"button button--primary"},"raptoreum-ubuntu20-1.3.17.01.tar.gz")))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"standalone-zip"},"Standalone Zip"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extract the zip"),(0,r.kt)("li",{parentName:"ul"},"Use the following per use case:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreumd")," - Raptoreum Daemon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-qt")," - Raptoreum Wallet GUI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-cli")," - Raptoreum Wallet CLI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-tx")," - Raptoreum Tx Utility"))),(0,r.kt)("li",{parentName:"ul"},"Run Daemon and ",(0,r.kt)("inlineCode",{parentName:"li"},"./raptoreum-cli")," for Wallet CLI"),(0,r.kt)("li",{parentName:"ul"},"Allow Daemon to Sync (Use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/wallet/bootstrap"},"bootstrap"),")")),(0,r.kt)("h3",{id:"precompiled-binaries"},"Precompiled Binaries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download release for Ubuntu 18 or 20:"),(0,r.kt)("li",{parentName:"ul"},"Extract contents:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tar xzvf raptoreum_1.2.15.2_ubuntu20_64.tar.gz")))),(0,r.kt)("li",{parentName:"ul"},"Use the following per use case:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreumd")," - Raptoreum Daemon"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-qt")," - Raptoreum Wallet GUI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-cli")," - Raptoreum Wallet CLI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-tx")," - Raptoreum Tx Utility"))),(0,r.kt)("li",{parentName:"ul"},"Run Daemon and ",(0,r.kt)("inlineCode",{parentName:"li"},"raptoreum-cli")," for Wallet CLI"),(0,r.kt)("li",{parentName:"ul"},"Allow Daemon to Sync (Use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/wallet/bootstrap"},"bootstrap"),")")))}c.isMDXComponent=!0}}]);