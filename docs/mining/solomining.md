---
sidebar_position: 4
---

# Solo Mining

:::note

Raptoreums network difficulty makes it hard to solo mine a block with the wallet. If you want dependable and regular payouts it is recommended to use pool mining.

:::

- Download the core wallet: https://raptoreum.com/latest

- Open and sync

- Once done go to Help > Debug Window > Console and type 

```bash
setgenerate true 2
```
The number is the amount of cores (not threads) you want it to use. It will start mining and you will know when you hit a block as your balance will change.

![Solo mining](/img/solo_mine.gif)


