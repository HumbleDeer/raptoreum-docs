---
sidebar_position: 3
---

# Encrypt & Backup

:::info

Encrypting and backing up your wallet is highly recommended. Encrypting your wallet will also ensure no other user may perform wallet operations without the appropriate password.

:::

## Encrypting

Private keys are stored in your wallet. When you first load the wallet there is no password and it is NOT encrypted. To encrypt the wallet, go to the `Settings` menu dropdown and select `Encrypt Wallet`

![Encrypt Menu Item](./assets/encrypt.png)

:::caution

**SAVE THIS PASSWORD** - Losing this password means you lose access to all of your Raptoreum funds! 

:::

The wallet will now restart with the encrypted file.

## Backup

Backup the following items:

`Wallet File`: Your wallet keeps backup files from the last 10 successful closes of the application. It also keeps a single current version that it uses when loading. You can find the file that holds your private keys in the Raptoreum core data folder that you installed the wallet to. By default it is named `wallet.dat`

`Private Keys`: When in the wallet, go to the `Tools` dropdown and select `Debug Console`. Enter the following to retrieve your keys:

Single Address Private Key:

```bash
dumpprivkey ADDRESS 
```

Entire Wallet All Keys

```bash
dumpwallet FILENAME
```

:::info

This will dump all your keys to a txt file in your qt .exe folder

:::