---
# id:
description: Learn how to take care of your Smartnode
title: Smartnode maintenance
# tags:
# image:
---

## Monitoring Your Smartnode

Uptime is crucial and to make sure your Smartnode is online you should monitor it, there are a few ways to do this:

1. If you used dk808 script to setup your Smartnode it would have asked you if you wanted to monitor your Smartnode. This check script checks your Smartnode status on our block explorer every hour (VIA cronjob). If it finds that your node has been PoSe banned it will kill raptoreumd and restart it.

2. External monitoring: This uses an external monitor such as <https://uptimerobot.com> to check if your Smartnode port is open every 5 minutes. If port is closed you can receive notification to any device and or by email. It is easy to setup and free. Default Smartnode port is `10226`.

## Increase Smartnode Collateral

As the Raptoreum network matures Smartnode collateral ramps up and you will need to recreate your Smartnode in order to increase the collateral amount. Here are the steps needed:

- In your local wallet that holds the Smartnode collateral go to Send > Inputs. If you do not see the "Inputs" button you must enable coin control. `Settings > Options > Wallet > Enable coin control features`.

You will see there your Smartnode collateral and it will be marked with a lock. We need to unlock it, so mark the box for that input and click the "toggle lock state" button to unlock it. That input is now spendable and your Smartnode is deactivated.

- Create a new collateral receiving address, make sure to label it well.
- Send the full collateral amount in one transaction to the new collateral receiving address.
- Wait until the transaction has 2 confirmations.

### Build the protx quick_setup command

:::note

By default the `protx quick_setup` command generates a Smartnode config file in the same directory as the .exe files you use to open the wallet. As an example, if you are running `raptoreum-qt.exe` from `C:\Program Files\` you will need to open it with Administrator privilege's (right click > Run as Administrator). Otherwise it will fail to create the Smartnode configuration file.

:::

You need the following information:

- Smartnode Server IP.
- Port (default = 10226)
- Collateral fee address. (see below note)
- Collateral transaction ID.
- Collateral index (this is listed when doing “smartnode outputs usually it will be 1)

:::note

Collateral fee address can be any address in your wallet that has funds to pay for the transaction, the transaction fee is small as an example I just made one transaction and the cost was 0.00000525 RTM. To see which of your addresses have funds use "listaddressbalances” in debug console or raptoreum-cli.

:::

**protx quick_setup command example:**

```bash
./raptoreum-cli protx quick_setup "c4bbcde9771668fa640c263d4b964f688b0f039f7b684e715d92e4012369fea6" "1" "209.151.154.120:10226" "RFbWv94ZfueciwVVpHLMdqFayaXAS4sBxP"
```

So structure is: `transaction ID | collateral index | smartnode IP | port | collateral fee address`

Using `QT > Debug Console` just remove "./raptoreum-cli" from the above command. Fire the command and if it is successful you will see a bunch of output, the command has created the needed raptoreum.conf file for your Smartnode. Check the last line of the output as it will tell you the location of the .conf file, notice that it is named differently for example: `RMsneH79j9gioE1jFsuxTFUxaZ1JSp53SN_raptoreum.conf`

That is your RTM collateral address that you created at the start of this guide and is so the .conf file is easy to identify and link to corresponding smartnode. As this is a collateral upgrade all we need from the generated .conf file is the `smartnodeblsprivkey`.

On your Smartnode VPS / server:

Stop daemon:

```bash
./raptoreum-cli stop
```

Edit raptoreum.conf:

```bash
nano ~/.raptoreumcore/raptoreum.conf
```

Swap out the old bls private key with the new, exit, and start raptoreumd:

```bash
./raptoreumd
```

Give it 5 minutes to catch up on any missed blocks.
Check smartnode status:

```bash
./raptoreum-cli smartnode status
```

The output you want to see is:

```json
},
"state": "READY",  
"status": "Ready" 
}
```

If all went well you should now have a functioning Smartnode at the increased collateral.