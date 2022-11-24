"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[3756],{5442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1},s="Basic Compiling",r={unversionedId:"mining/compiling/basiccompilation",id:"mining/compiling/basiccompilation",title:"Basic Compiling",description:"Important Notes",source:"@site/docs/mining/compiling/basiccompilation.mdx",sourceDirName:"mining/compiling",slug:"/mining/compiling/basiccompilation",permalink:"/raptoreum-docs/docs/mining/compiling/basiccompilation",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/mining/compiling/basiccompilation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarMining",previous:{title:"Solo Mining",permalink:"/raptoreum-docs/docs/mining/solomining"},next:{title:"Cross-compiling",permalink:"/raptoreum-docs/docs/mining/compiling/crosscompiling"}},l={},u=[{value:"Important Notes",id:"important-notes",level:2},{value:"Compiling using WSL / Ubuntu 20.04 LTS",id:"compiling-using-wsl--ubuntu-2004-lts",level:2},{value:"Basic Usage After Compiling",id:"basic-usage-after-compiling",level:2}],m={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-compiling"},"Basic Compiling"),(0,i.kt)("h2",{id:"important-notes"},"Important Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some important notes before we go into compiling on Windows:"),(0,i.kt)("li",{parentName:"ul"},"MMSR mod is supported on Windows and Linux based OS systems."),(0,i.kt)("li",{parentName:"ul"},"Huge Pages are supported on Windows, WSL based OS and native Linux OS systems."),(0,i.kt)("li",{parentName:"ul"},"To enable MSR mod you have to run the miner as root/administrator."),(0,i.kt)("li",{parentName:"ul"},"To enable Huge Pages on WSL and Native Linux systems just execute the miner with root privilege's."),(0,i.kt)("li",{parentName:"ul"},"To enable Huge Pages on Windows follow this guide: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-the-lock-pages-in-memory-option-windows?view=sql-server-ver15\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial is geared for ",(0,i.kt)("inlineCode",{parentName:"p"},"cpuminer-gr-avx2")," miner - but may apply to other miners as well.")),(0,i.kt)("p",null,"Here are some advantages / reasonings why you should consider compiling your own miner using WSL:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You build the code from source and not using a prebuilt binary that has potential risk of having a virus. (The executable files in the same repository are safe)"),(0,i.kt)("li",{parentName:"ul"},"The miner you build will be built for your CPU's instruction set that it supports and should be faster."),(0,i.kt)("li",{parentName:"ul"},"Building your own miner using WSL will save you the issues with anti viruses flagging miners and you don't need to do folder exclusions.")),(0,i.kt)("h2",{id:"compiling-using-wsl--ubuntu-2004-lts"},"Compiling using WSL / Ubuntu 20.04 LTS"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that Virtualization must be enabled in your BIOS settings.")),(0,i.kt)("p",null,"Detailed info for WSL setup: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps")),(0,i.kt)("p",null,"Update for WSL kernel package: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi")," "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You will need to set WSL Version 2 as the default.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#This enables WSL.\ndism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\n\n#This enables Virtual Machine Platform\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n\n#Restart Your System.\n#You will need to download WSL2 kernel update package from the link mentioned above. \n#Set WSL 2 as the default version (note that windows 10 is required for this to work)\nwsl --set-default-version 2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open Microsoft Store and download and install Ubuntu 20.04 (you can chose other Linux based OS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You should have a CLI interface where you can set up a user name and password for your ubuntu instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update your Ubuntu and install the required tools to build your own binary:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#Update and Upgrade ubuntu:\nsudo apt-get update\nsudo apt-get upgrade\n\n#Download build essentials:\nsudo apt-get install build-essential libssl-dev libcurl4-openssl-dev libjansson-dev libgmp-dev automake zlib1g-dev git\n\n#Clone the repository:\ngit clone https://github.com/WyvernTKC/cpuminer-gr-avx2.git\n\n#Enter the folder\ncd cpuminer-gr-avx2\n\n#run the autogen script\n./autogen.sh\n\n#Configure to build for native\nCFLAGS="-O3 -march=native -Wall -mtune=native" ./configure --with-curl\n\n#Build\nmake\n\n# Now if everything went fine, you should take a look in the folder with "ls" command and you should have a "cpuminer" executable.\n\n# To make life easier you should create a start script: \nnano start.sh\n\n# Copy this and change pool address and your wallet address. \n./cpuminer -a gr -o stratum+tcp://pool_address_goes_here  -u your_wallet_address_goes_here.Worker_name -p x\n\n#CTRL+X to Save\n#Y to approve\n#Enter to write and close \n#give execution rights to your script:\nchmod +x start.sh\n\n#execute your script and happy mining:\nsudo ./start.sh\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Running the miner on the available platform with ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," will give you the available parameters/options that you can use. Additional information can be found about the usage examples in the Readme files that can be found next to the source code in the above mentioned repositories.")),(0,i.kt)("h2",{id:"basic-usage-after-compiling"},"Basic Usage After Compiling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you download the pre-built miner binaries you will see that there are multiple executable files. Each executable file can mine the same algorithm with different instruction set."),(0,i.kt)("li",{parentName:"ul"},"You can check your processor manufacturer page to see what instruction set is supported by your CPU and use that executable for mining."),(0,i.kt)("li",{parentName:"ul"},"Test all the executable to see which miner grants you the highest hash rate (note that takes a few minutes until your hash rate stabilizes and hash rate may fluctuate).")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Basic usage examples:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This is the most basic setup that will get your miner up in running.\n# Windows\n.\\cpuminer-zen.exe -a gr -o stratum+tcp://pool_address_goes_here  -u your_wallet_address_goes_here.Worker_name \n\n# Linux\n./cpuminer -a gr -o stratum+tcp://pool_address_goes_here  -u your_wallet_address_goes_here.Worker_name \n\n# -a Specifies the algorithm.\n# -o specifies the pool connection.\n# -u specifies your wallet. \n# Run the binary with --help for more information.\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Benchmark & Tuning")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This first part shows how to use the benchmark\n# Ubuntu:\nsudo ./cpuminer_name -a gr --benchmark\n# Wait 30 seconds or more to get an avg result / thread (use CTRL+C to cancel)\n\n# Windows:\n# On windows start a command line with administrator rights and navigate to the folder with your executable files.\ncpuminer_name -a gr --benchmark \n\n# Wait 30 seconds or more to get an avg result / thread (use CTRL+C to cancel)\n\n# This second part shows how to use the tuning tool. (note that you should be using tuning method together with --benchmark instead of tuning the miner during mining on a pool to avoid fluctuation in hash rate and get more accurate results.)\n# Note that it should take about 30 minutes to finish the tuning process. (if using the --benchmark it will stop automatically)\n# Ubuntu:\n./cpuminer_name -a gr --benchmark --tune\n\n# Windows:\n# On windows start a command line with administrator rights and navigate to the folder with your executable files\n./cpuminer-INST -o stratum+tcp://pool_address_goes_here  -u your_wallet_address_goes_here.Worker_name --tune-config tune_config\n\ncpuminer_name -a gr --benchmark --tune\ncpuminer_name -a gr -o stratum+tcp://pool_address_goes_here  -u your_wallet_address_goes_here.Worker_name --tune-config tune_config\n")))}p.isMDXComponent=!0}}]);