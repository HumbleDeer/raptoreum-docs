---
description: Dealing with PoSe (Proof of Service) bans
tags: [pose, poseban, smartnode, ban, proof, troubleshooting, help]
---

# PoSe Bans

Receiving a PoSe ban means you are (hopefully temporarily) unable to receive jobs or payments for your Smartnode. Your Smartnode can become PoSe banned for a variety of reasons, most commonly errors relating to your network or system.

Your Smartnode will be unable to service the network until these errors are resolved.

:::info PoSe
PoSe stands for **P**roof **o**f **Se**rvice.
:::

## Diagnosing

### Am I banned?

To determine whether your Smartnode might be PoSe banned, please follow these steps:

In the **GUI wallet**:  
Make sure you have "Show Smartnodes Tab" selected under `Options` > `Wallet` > `Show Smartnodes Tab`. Restart your wallet as required or prompted.
The Smartnodes tab in your wallet should now show your Smartnode(s) and give you an indication of your Smartnode status.

Using the **Raptoreum Explorer**:  
You can your Smartnode status by searching for your Smartnode on the [Raptoreum Explorer](https://explorer.raptoreum.com/). On the [Raptoreum Explorer](https://explorer.raptoreum.com/), navigate to the `Smartnode` (4th option), and start a search. Enter your Smartnode IP-address or find it in the list. One common shorthand for searching on a web page is `CTRL`+`F`.

### Why?

In order to find the reason why your Smartnode may be PoSe banned, check these basic status marks of your Smartnode:

- Is raptoreumd available and functioning properly?
- Are sufficient CPU, RAM, Disk and network resources available to your smartnode?
- Is your network connection unstable?
- Did your system experience any outages by itself?
- Is your collateral payment or proof of it still valid?

## Resolving

### Raptoreum Daemon problems

1. Check if the Raptoreum Core daemon `raptoreumd` is responsive:

    ```bash
    ./raptoreum-cli getblockchaininfo
    ```

    **If the daemon responds quickly** and the "blocks" count matches the block height count on the Raptoreum Explorer, then your Raptoreum Core daemon is most likely fine. Quite possibly the PoSe ban was caused by a temporary issue such as resource issue, or network issues. Your PoSe ban should automatically diminish until 0, at which point it will be unbanned and lose its PoSe ban score.

    **If the daemon is slow/unable to respond** then the Raptoreum Core daemon may have have gotten stuck in a hung state and will require manual restarting. To manually stop and restart the Raptoreum Core daemon process, please see step 2 below.

2. Stop the Raptoreum Core daemon

    Some troubleshooting steps may require you to forcefully stop and/or restart the Raptoreum Core daemon (`raptoreumd`).

    **To force-stop** the Raptoreum Core daemon, use these commands in your terminal:

    ```bash
    ps aux  |  grep -i raptoreumd  |  awk '{print $2}'  |  xargs sudo kill -15
    ```

    These commands one by one list all processes running, filter to the line that contains `raptoreumd`, filters the Process ID (PID) and then passes that to the `kill` command which forcefully stops the process.

    **If you see "No such process"** then it's likely you successfully stopped the Raptoreum Core daemon process. You can now move on to restarting the Raptoreum Core daemon.

    **If you still see a process listed** then you might have to up the antics and perform a harsher termination of the Raptoreum Core daemon process. Run the commands from above with a slight alteration to the `xargs sudo kill -15`, by changing it for `xargs sudo kill -9`. Your computer will attempt to forcefully stop the Raptoreum Core daemon process once again.

3. (Re)start the Raptoreum Core daemon

    🟢 **Restarting the daemon** is easy. Just run the command `./raptoreumd` in your terminal, and await your daemon completing the syncronisation. This may take a while if your daemon was halted for a significant time.

    💡If you'd like to keep track of your Raptoreum Core daemon's sync process, you can listen to its debug logs with the following command; Use `CTRL` + `C` to exit this command.

    ```bash
    tail -f ~/.raptoreumcore/debug.log # Ctrl + C to exit tail.
    ```

    An alternative way to check and see when raptoreumd is done syncing is to use the "top" command. While syncing raptoreumd will consistently use nearly 100% of a core. When that use drops substantially it is done syncing. Depending on the nodes PoSe score it can take anywhere from 2 to 6 hours for PoSe ban to be lifted

### System resource issues

**Resolving resource related PoSe ban issues.**

Make sure raptoreumd always has access to at least 2 full CPU cores.  If you find raptoreumd is sometimes not running this is often due to it being killed by OOM (Out Of Memory Killer) this is a process of the Linux kernel that will kill certain processes when the system is critically low on memory. Search your system logs to help diagnose the issue, as an example on ubuntu 18:

```bash
grep -i 'killed process' /var/log/syslog
```

:::warning Mining

We strongly recommend against mining on your Smartnodes. Mining on them will endup in performance issues and PoSe bans.

:::

## Speeding up recovery

Depending on your Smartnode PoSe score, it can take anywhere from 2 to 6 hours for PoSe ban to be lifted.

To speed that process you can issue a "protx update_service" command and the ban will be lifted in 1-2 blocks.

Here is an example of a "protx update_service" command. This is issued in your local wallet > debug console, or from the commandline with `raptoreum-cli`.

```bash
protx update_service "7d62ce3bcf71825te84y5ca4b93a53583a8f1c9c70989e351c0f470088729a83" "your.smartnode.ip:10226" "3808471d6e52fe3b683474075cdf50192babe3b38203187ec0cg18fg54e439a4"
```

1. First string in "" is the proTxHash. You can get this by right clicking your Smartnode in the QT wallet `Smartnode list` > Copy proTxHash, or by using `raptoreum-cli`.
2. Your Smartnode IP-address and port in `ip:port` format
3. Third is the Smartnodes BLS private key. This is stored on your Smartnode in `~/.raptoreumcore/raptoreum.conf` and you can retrieve it easily by doing:

 ```bash
cat ~/.raptoreumcore/raptoreum.conf | grep bls
 ```

After firing the protx update_service command you should see status change on your Smartnode list from PoSe_banned to ENABLED in anywhere from 1 minute to 6 minutes.
