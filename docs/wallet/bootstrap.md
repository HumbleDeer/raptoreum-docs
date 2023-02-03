---
sidebar_position: 4
---

# Bootstrapping Raptoreum Core

Bootstrap packages contain blocks of pre-verified blockchain data, and is provided to speed up the synchronization of the Raptoreum Core walet.

When the wallet synchronizes with the network from scratch, it is forced to recalculate all the block hashes sequentially. This is a very CPU intensive process. Hence, synchronizing without these bootstrapping packages can take a significant amount of time.

A specific subset of the data in this bootstrap package, known as the POW cache, can be used to significantly speed up the process without requiring large files. The POW cache solves this issue by providing pre-calculated hashes for the blockchain files known as indexes.

## POW cache

The POW cache method provides the best value, being very small while still decreasing synchronisation times significantly.

The POW cache method uses **one file** only: `powcache.dat`.

## Full bootstrap

The full bootstrap may be required in some situations. Use this when instructed or when the POW Cache method does not work.

The full bootstrap package contains the following file and folders: `powcache.dat`, `blocks`, `chainstate`, `evodb`, `llmq`.

# Download

It's important to download the correct version of bootstrap package for your version of wallet. In most circumstances, you do not need the package that includes indexes.

<button class="button--primary" href="https://bootstrap.raptoreum.com/">bootstrap.raptoreum.com</button>

# Using the bootstraps

1. Stop Raptoreum Core and/or the Raptoreum Core daemon
2. Open your Raptoreum Core directory

  - Unix/Linux: `~/.raptoreumcore`
  - Windows: `%AppData%\RaptoreumCore`

3. Create a copy of your `wallet.dat` file in a safe location
4. Delete the following file and folders:

  - powcache.dat
  - blocks
  - llmq
  - chainstate
  - evodb

5. Extract the bootstrap package / POW cache file to your Raptoreum Core data directory
6. Copy your `wallet.dat` file back in to your Raptoreum Core data directory. Keep a backup for safety.
7. Restart Raptoreum Core and/or the Raptoreum Core daemon

:::danger Wallet.dat
Do not delete your wallet.dat file without having a backup! This file holds your access to your wallet data. Losing it can mean losing your funds!
:::
