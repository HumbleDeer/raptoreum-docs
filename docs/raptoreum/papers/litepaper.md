---
id: litepaper
# title: RTM Litepaper
description: Raptoreum; A Flexible System For The Creation And Transfer Of Futures, Assets And Contracts.
keywords: [raptoreum, futures, assets, smart-contracts, contracts, rtm, litepaper]
# image: ./litepaper/xxxx.jpg
---

# Raptoreum: A Flexible System For The Creation And Transfer Of “Futures,” Assets And Contracts

<a
  class="button button--sm button--primary button--download"
  href="/public/whitepapers/Raptoreum_Litepaper.pdf"
  target="_parent"
  download
>
  Download RTM Litepaper whitepaper
</a>

The name Raptoreum is derived from the Victorian term for a bird of prey and ium/eum meaning “place for” or “pertaining to”; in this case, the place for birds of prey. The name comes from the team’s extensive experience in the security field with top level skills covering all aspects of it. This is a unique strength in the crypto community and will leverage well into a successful project.  
  
## Introduction

Raptoreum began as the fairly simple idea, introducing smart contracts which would allow on chain, trustless transfers (goodbye centralized marketplaces) on the Ravencoin codebase, however with the automation of assets and RTM (Raptoreum).  
The project has quickly evolved, adding innovative features that not only further expand the asset layer, but also introduce features that could help other Blockchain projects. Ravencoin unfortunately suffered several serious breaches of its asset layer so that code base has been abandoned by us. We are currently working with and building on Dash code expanding its capabilities significantly.  
  
Raptoreum is now a code fork of Dash and inherits current and optionally future features such as chain locks, oracles etc. We are further expanding capabilities by adding the following features:

  1. The deployment of a unique asset layer.  
  2. The option to lock X amount of coins or assets into a special transaction. Coins are unlocked at a block number of choice or timestamp.  
  3. Trustless on chain transfers of assets and native coins VIA Smart Contracts.  
  4. Integrating, developing and deploying a VM protocol that would allow for smart contracts in 4 major programming languages as opposed to the situation with       Ethereum being limited to solidity.  
  
These additional features open up the power and ease of use of Raptoreum’s features to a greater variety of industries under the Distributed Application umbrella. DAPP's are a critical part of driving widespread adoption as recently seen with DEFI and Raptoreum hopes to help provide further alternatives and possibilities for DAPP developers particularly in the field of opening up new programming languages for DAPP and contract development.  
  
It is one of our goals to not only innovate ideas for Raptoreum but to contribute back to the general crypto community with open-source features that anybody can use to help their Blockchain projects succeed.  
  
## Problems

Problems raptoreum is attempting to solve:
  
### Driving Mass Adoption

One of the largest issues that Crypto as a whole faces is mass adoption. Raptoreum helps to solve this by providing the ability for anybody to tokenize anything they like in an easy and intuitive fashion. In addition, we provide the flexibility and power of smart contracts which allows DAPP developers to easily create distributed applications that will cover a vast range of uses ranging from gambling all the way to education.  
With the current working implementation, we aim to significantly broaden the range of programming languages smart contract developers can use and access drastically broadening the range of possible contracts and developers capable of working on the same.  
  
### FPGA And ASIC Resistance

Raptoreum is dedicated to keeping ASICs and FPGAs off the network to increase decentralization and keep it mineable by everyone without the use of high dollar specialized hardware.  
  
As part of our effort to make this happen we have rolled out our own POW algorithm codenamed "[GhostRider][]” [3][]. GhostRider uses the x16r randomizer combined with CNv1-8, this results in an algorithm that discourages ASIC and FPGA by making it much too expensive for a minimal gain. Added to that, we are developing the ability to adjust the algorithm on the fly. This allows Raptoreum to change some algorithmic parameters on the fly that would dump ASICS and FPGA should they be found to be on the network, without requiring the slow, costly and insecure process of forking fully.  
  
On chain forking, a little discussed but critical point in the whole chain forking debate is that every time an active chain is forked, security decreases as you can start to determine points of correlation between the original chain and the offshoots. This is caused by private keys etc being used on multiple chains as the same addresses will be on both chains from the point of snapshot etc. Bearing this in mind, RTM only has a single planned fork to activate the asset layer roughly 6 months past launch.  
  
### Hyper Inflation

Masternodes, while a powerful tool, can cause hyperinflation that can cause a coin to crash on the markets and cause irrevocable damage to a project. Raptoreum introduces a custom tiered collateral and reward system to prevent this (see [Smartnodes](#smartnodes)).  
  
### Scaling

Raptoreum does not add contracts like Ethereum, instead Smartnodes are used to provide this service which will provide better scalability and avoid the scaling issues that Ethereum has encountered.  
  
## Smartnodes

Smartnodes play multiple critical roles on the Raptoreum network. They are responsible for storing and executing smart contracts as well as running Dash-style chainlocks. Raptoreum uses a custom emissions curve with a tiered smartnode collateral and reward system; In doing so avoiding the hyperinflation that damages many other coins that use Master- or Smartnodes.  
  
### Hardware

In order to perform this variety of functions, the expected (to be confirmed) specs for running a service node should be a 8 core CPU 16Gb RAM 512 GB SSD set up this requirement will not be enforced fully from start but will come in gradually over the 7th through 12th months post launch. Prior to that fairly normal VPS specs will suffice.
  
### Raptoreum Smartnodes

In terms of node rewards, they do not work in the traditional fashion as that has proven time and time again to undermine the long-term viability of projects. We have chosen the approach of paying for services rendered to the network as opposed to how many other coins are currently doing it.  
Nodes in the quorum running chainlocks will get paid 15% of block rewards for providing the 51% attack insurance and at a later date operating the contract layer.  
The additional nodes will participate in securing asset and time lock (futures) transaction this will be paid 5% of block rewards plus the transaction fees associated with asset creation fees and time lock fees.  
Yes, this will remove some of the otherwise deflationary nature of asset creation which our original codebase included. However, it will at the same time allow for the running of a chain where reorganisation is essentially impossible beyond a single block enabling speedy yet secure transfers.  
  
### Overall smartnode rewards and ROI  

With a fully developed network of 4000-6000 smartnodes at a maximum collateral of 1.8 million RTM, annual ROI should be sitting at the 8-12% mark depending on the exact number of nodes on the network and the numbers of asset and futures transactions. This is not an unreasonable level of return given the cost of setting up and running a node are not insubstantial.  
  
### Reward structure

(\*1): Chainlock & Assets/futures rewards may be distributed to miners when these features are not yet activated.

Smartnode collateral is included in this table, but is not a reward payout. It is a required collateral for setting up a Raptoreum smartnode.
  
| Block #      | Block Rew. | Miner Rew. | Chainlock Rew. | Assets/Futures Rew. | Developer Rew. | *Smartnode collateral* |
| ------------ | ---------- | ---------- | -------------- | ------------------- | -------------- | ---------------------- |
| 0-720        | 4          | 3.8        | 0              | 0                   | 0.2            | 600.000                |
| 21262  (\*1) | 5000       | 3750       | 750            | 250 + fees          | 250            | 600.000                |
| 42524        | 5000       | 3750       | 750            | 250 + fees          | 250            | 600.000                |
| 63786        | 5000       | 3750       | 750            | 250 + fees          | 250            | 600.000                |
| 85048        | 5000       | 3750       | 750            | 250 + fees          | 250            | 600.000                |
| 88720        | 5000       | 3750       | 750            | 250 + fees          | 250            | **800.000** ++         |
| 106310       | 5000       | 3750       | 750            | 250 + fees          | 250            | 800.000                |
| 127572       | 5000       | 3750       | 750            | 250 + fees          | 250            | 800.000                |
| 132720       | 5000       | 3750       | 750            | 250 + fees          | 250            | **1.000.000** ++       |
| 148834       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.000.000              |
| 170096       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.000.000              |
| 176720       | 5000       | 3750       | 750            | 250 + fees          | 250            | **1.250.000** ++       |
| 191358       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.250.000              |
| 212620       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.250.000              |
| 233882       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.250.000              |
| 220720       | 5000       | 3750       | 750            | 250 + fees          | 250            | **1.500.000** ++       |
| 255144       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.500.000              |
| 276406       | 5000       | 3750       | 750            | 250 + fees          | 250            | 1.500.000              |
| 264721       | 5000       | 3750       | 750            | 250 + fees          | 250            | **1.800.000** ++       |

**Block 552812:** End of 5000 RTM / block rewards. The same payout percentages are maintained, but from here on there is an approximately monthly reduction of 10 coins per block.

See the [Rewards structure](./rewards-emissions.md) document for full details.
  
## Contact

Discord: <https://discord.gg/2T8xG7e>  
Telegram: <https://t.me/raptoreumm>  
Twitter: <https://twitter.com/raptoreum>  
Reddit: <https://www.reddit.com/r/raptoreum/>  
  
## Sources

\[1] 2018 51% and double spend attacks: <https://thenextweb.com/hardfork/2018/10/23/cryptocurrency-51-percent-attacks/>
\[2] Cost to perform 51% attacks: <https://www.crypto51.app/>
\[3] Raptoreum GhostRider Explained: <https://medium.com/@kawwwoin/raptoreums-ghostrider-algorithm-explained-93f1f8070158>  

[Ghostrider]: ./gr-whitepaper.md
[3]: https://medium.com/@kawwwoin/raptoreums-ghostrider-
algorithm-explained-93f1f8070158  
