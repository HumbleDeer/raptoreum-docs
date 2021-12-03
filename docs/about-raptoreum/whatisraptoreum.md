---
sidebar_position: 1
---
import Link from '@docusaurus/Link';

# What is Raptoreum?

![Raptoreum](/img/rapt-outline.png)

Raptoreum is a powerful, flexible, and secure POW (Proof Of Work) blockchain and asset platform that will feature NFT/NFTS, Smart Contracts, and futures. It is being developed to address problems seen on other blockchains as well as bring in new and innovative ways of addressing these problems. Raptoreum development began in November of 2018 and was originally a code fork of RVN (Ravencoin). After multiple bugs, exploits, and security concerns with RVN, the Raptoreum team decided to drop the Ravencoin codebase and move to a code fork of DASH (August 2020).

<button class="button button--block button--primary">Read the Papers »</button>

## POW (Proof Of Work) and Mining

Raptoreum created an algorithm code named GhostRider. This algorithm was designed to keep ASICS and FPGAs off of the network by making entry cost prohibitive and risky. This allows anybody to mine Raptoreum with their CPU and earn a reasonable amount of RTM coins. Raptoreum will also be mineable with GPU when a miner has been released. Initial testing shows that GPU will not have an advantage over CPU. $1000 worth of GPU and $1000 worth of CPU may give very similar rewards.

The fact that anyone anywhere can contribute to the network and earn should increase the projects decentralization, unlike networks where ASIC are present or GPU have such a large advantage that CPUs become obsolete. The GhostRider algorithms whitepaper is here:

## Raptoreum PrivateSend

Private send is a Raptoreum feature inherited from DASH, it allows you to obscure the source of sent RTM. To do this it uses mixing which takes place on the Smartnode network and uses inputs (inputs = coins) from at least two other users that have enabled mixing in their wallets. Your coins never leave your wallet.

<button class="button button--block button--primary">Instructions for PrivateSend »</button>

### How it Works

- When enabling mixing Private Send breaks your inputs down into standard denominations like 0.001, 0.01, 0.1, 1, 10.
- Your mixing request is sent to the Smartnode network. No identifying information is sent to the Smartnode network, IP address for example. Which Smartnodes are used is random so it cannot be anticipated.
- When two other people enable mixing with the same denominations a mixing session begins. The Smartnode mixes the inputs of all three users wallets to pay the mixed denomination (input) back to themselves. Your wallet pays the denomination back to itself using a change address.
- When starting a mixing session you can choose between 1 and 16 rounds. Each round makes it exponentially harder to track where private send coins came from. The default amount of rounds is 4. Your wallet needs to complete X amount of rounds for each denomination.
- Mixing takes time to complete, the less users that are using the longer it might take. If planning to use private send it is best to make a mixing session before you expect to spend private send coins.

:::note

By default the core wallet contains 1000 change addresses, each mixing event will use one. If these addresses become depleted the wallet will automatically create more. In order for it to create more automatic backups must be enabled (on by default). This is a failsafe feature to make sure you have a backup of the new keys once they are generated as they would not exist in previous backups.

:::