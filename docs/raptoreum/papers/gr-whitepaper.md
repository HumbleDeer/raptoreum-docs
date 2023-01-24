---
id: gr-whitepaper
# title: Ghostrider Algorithm whitepaper
description: GhostRider is the mining algorithm developed for Raptoreum with the goal to be secure, resistant to ASIC/FPGA mining, and withstand 51% attacks
keywords: [mining, ghostrider, algorithm, raptoreum, miners, gr, asic, fpga, asic-resistant, fpga-resistant]
# image: ./gr-whitepaper/xxxx.jpg
---

# GhostRider Mining Algorithm

By Tri Nguyen-Pham (Raptoreum Developer)

<a
  class="button button--sm button--primary button--download"
  href="/public/whitepapers/Ghostrider_Whitepaper.pdf"
  target="_parent"
  download
>
  Download GhostRider whitepaper
</a>

## Objective

Create an alternative mining algorithm that is highly resistant to asics as well as minimize the effect of fpgas and heighten the entry point cost for fpga mining significantly.

## Technology

GhostRider is a combination of known mining technologies and methodologies from x16r (Raven) and CryptoNight (Monero). X16r provides a randomness to an existing hash chaining methodology for mining, it lacks a memory requirement which means asics can potentially gain significant advantages over gpus. CryptoNight, on other hand has features that require cpu/gpu memory which makes it harder for asics to gain a significant advantage over cpu/gpu, but it lacks the randomness that x16r has. Over the recent year, the Monero team committed to combat asics by forking CryptoNight to add more variables to its memory requirements, as well as hashing methodology. However, each forks hashing method remains static.

## GhostRider methodology

With the realization of the value that the x16r randomness provides in battling the curve of asic efficiency, combined with the impact of a high memory requirement,GhostRider saw the first light of day. The concept of GhostRider was born by combining both methodologies together, and randomly selecting 15 different **Core Algorithms** and mixing them with 3 different randomly chosen CryptoNight variants. These algorithms are divided into 3 groups of 5 randomly ordered **Core Algorithms** followed by 1 random order CN variant. 

All 15 order core algorithms are random, with the exception of avoiding any single algorithm being repeated in the same chain. The same goes for the order of CN derivatives.

## Random ordering algorithm

To achieve pre-deterministic ordering, the algorithm uses the previous block hash "nibbles" ordered from right to left in order to determine what algorithm to hash next for the 15 core algos. Each nibble is a single hex digit(0-F) and there are 64 nibbles in a block hash. If a nibble hex is F(15 in decimal) then it wraps around as 0. See hex number to algo map below. If a hex digit has seen before in the previous nibbles, it moves to next nibble in the hash. The process is repeated until all 15 unique hexes are selected. Similarly, CN variant ordering is determined by hex digit and _modified_.

## Hex to algo mapping

| **HEX** | Algorithm | **HEX** | Algorithm |
| ------- | --------- | ------- | --------- |
| **0/F** | Blake     | **8**   | Shavite   |
| **1**   | Bmw       | **9**   | Simd      |
| **2**   | Groestl   | **A**   | Echo      |
| **3**   | Jh        | **B**   | Jamsi     |
| **4**   | Keccak    | **C**   | Fugue     |
| **5**   | Skein     | **D**   | Shabal    |
| **6**   | Luffa     | **E**   | Whirlpool |
| **7**   | Cubehash  | **F**   | Sha512    |

### Example

Assume that the previous block hash is `0000135e13882a45caa301fc03429e416e7ce8d8edebdffe495ab337f9c98582`

Knowing this hash, we read it backwards and assign the values to their corresponding Algorithm. The resulting series will give us an idea of which algorithms will be included, and which will be skipped.

Read this table left column first.

| Hex    | Algorithm | --- | Hex    | Algorithm |
| ------ | --------- | --- | ------ | --------- |
| **2:** | Groestl   |     | **F:** | (skipped) |
| **8:** | Shavite   |     | **F:** | (skipped) |
| **5:** | Skein     |     | **D:** | Shabal    |
| **8:** | (skipped) |     | **B:** | (skipped) |
| **9:** | Simd      |     | **E:** | (skipped) |
| **C:** | Fugue     |     | **D:** | (skipped) |
| **9:** | (skipped) |     | **E:** | (skipped) |
| **F:** | Blake     |     | **8:** | (skipped) |
| **7:** | Cubehash  |     | **D:** | (skipped) |
| **3:** | Jh        |     | **8:** | (skipped) |
| **3:** | (skipped) |     | **E:** | (skipped) |
| **B:** | jamsi     |     | **C:** | (skipped) |
| **A:** | Echo      |     | **7:** | (skipped) |
| **5:** | (skipped) |     | **E:** | (skipped) |
| **9:** | (skipped) |     | **6:** | Luffa     |
| **4:** | Keccak    |     | **1:** | Bmw       |
| **E:** | whirlpool |     |        |           |

Algorithm Stoo and Order 15 hash has been selected as follows:

Groestl -> Shavite -> Skein -> Simd -> Fugue -> Blake -> Cubehash -> Jh -> jamsi -> Echo -> Keccak -> whirlpool -> Shabal -> Luffa -> Bmw

Similarly as to how we previously associated the Hex value with an algorithm, we now do the same for the CryptoNight variants. This time, we *hex mod* `3 + 2`. This results in:

2: CNv4, 8: (skipped), 5: (skipped), 8: (skipped), 9: CNv2, C: (skipped), 9: (skipped), F: (skipped), 7: CNv3

We now we have the CN variants ordering as CNv4 -> CNv2 -> CNv3.

Place the algorithm ordering and CryptoNight ordering in 3 groups, each of which contain 5 algorithms and 1 CN variant. The result is:

Groestl -> Shavite -> Shein -> Simd -> Fugue -> CNv4 -> Blake -> Cubehash -> Jh -> jamsi -> Echo -> CNv2 -> Keccak -> whirlpool -> Shabal -> Luffa -> Bmw -> CNv3
