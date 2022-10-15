---
sidebar_position: 8
---

# PrivateSend

## Using PrivateSend

:::note Info

To start you must have automatic backups enabled (on by default) and your wallet must be encrypted.

:::

Go to `Settings > Options`, and set PrivateSend Rounds to use and Target PrivateSend balance. The default amount of rounds is 4, increasing that increases privacy but also mixing time. PrivateSend balance is the balance mixing will stop at AKA your amount of private coins.

![](./assets/privatesend01.png)

There are a few other options in the above screenshot which you can enable or disable as you like.

- Enable advanced PrivateSend interface: This will display additional detailed information just above the "Stop Mixing" button.
- Show popups for PrivateSend transactions: Mixing creates quite a few transactions so you may want to disable this.
- Warn if PrivateSend is running out of keys: Displays a warning if running low on keys. No action is needed by the user here, the wallet will create more as needed. But make sure to create a new backup of your wallet if you see this warning and more keys are created.

To begin the process click the "Start Mixing" button. Mixing transactions are atomic which means they either take place completely or not at all. You can interrupt the mixing process safely at any time. This means stopping the mixing process, closing the wallet, killing the wallet (PC reboots for example), or disabling the PrivateSend feature before mixing is complete.

## Sending PrivateSend Coins

In the `Receive` section of your wallet in the bottom right hand corner you will see a box that needs to be marked in order for you to send PrivateSend RTM. When you mark it, the balance will change to show you your current PrivateSend balance.

![](./assets/privatesend02.png)

Once that box is marked you may send mixed Raptoreum for increased privacy. If you run into an error when sending mixed RTM which mentions not enough inputs selecting the `Subtract fee from amount` box on the sending screen will usually resolve it. PrivateSend transactions must spend all inputs completely so PrivateSend transaction amount will be rounded up to accommodate. PrivateSend transaction size is generally larger then a regular transaction and require a slightly larger fee.

You can see all available PrivateSend inputs in your wallets Coin Control section, the `PS` column shows the amount of mixing rounds.

![](./assets/privatesend03.png)

Making your PrivateSend transactions can slightly increase your privacy, you can do so by selecting the most efficient (least) amount of inputs from Coin Control when sending.

If you want to see what a PrivateSend transaction looks like "on-chain" you can check [here](https://explorer.raptoreum.com/tx/531884f12b085c032a5b2987f34fa64731c44c1c51605a9093cd414c6872f7c2).
