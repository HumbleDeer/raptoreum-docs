---
sidebar_position: 4
---
import ReactPlayer from 'react-player'

# Manual Setup

## Video Guide

<ReactPlayer playing controls url='https://www.youtube.com/watch?v=55ot-iT2GFc' muted={true} playing={false} className="padding-bottom--md"/>

:::note

For the following part of the guide you need to be root. depending on your VPS provider they may have only provided you with a "sudo" user. You can change to root by doing:

```bash
sudo su
```

:::

## Procedures

### 1. Update Server

```bash
apt update && apt upgrade -y
apt install -y unzip
```
<sub>Unzip is required to unpack the bootstrap.</sub>

### 2. Add 2GB of SWAP

First check to make sure there is not already swap active:

```bash
free -h
```

:::note

If no swap it will return:

```bash
Swap:            0B          0B          0B
```

:::

Create SWAP and Activate:

```bash
dd if=/dev/zero of=/swapfile bs=1k count=2048k
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile       swap    swap    auto      0       0" | tee -a /etc/fstab
sysctl -w vm.swappiness=10
echo vm.swappiness = 10 | tee -a /etc/sysctl.conf
```

<div class="alert alert--info" role="alert">
  <sub>Note: <code>swappiness = 10</code> tells system only to use it if absolutely needed.</sub>
</div>

### 3. Enable UFW & Open Ports

(Optional)

```bash
apt install ufw -y
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 10226/tcp
ufw enable
```

### 4. Install Fail2Ban

As I am not bothering with setting up SSH login with keys rather then password based login need to keep something from the bots and kiddies brute forcing our SSH service.

```bash
apt install fail2ban -y
```

Now setup jail for bad guys hitting SSH, and set it to ban after three failed logins to SSH:

```bash
nano /etc/fail2ban/jail.local
```

Copy and paste the following into the file:

```bash
[sshd]
enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```

Restart fail2ban:

```bash
systemctl restart fail2ban
```

Reboot the server:

```bash
reboot
```

Add a system user to run raptoreumd:

```bash
adduser username
```

Get Raptoreum wallet / daemon and bootstrap:

```bash
mkdir rtm_latest
cd rtm_latest
wget https://github.com/Raptor3um/raptoreum/releases/download/1.2.15.2/raptoreum_1.2.15.2_ubuntu20_64.tar.gz
tar -xvf raptoreum_1.2.15.2_ubuntu20_64.tar.gz
cd ..
wget https://github.com/Raptor3um/raptoreum/releases/download/1.2.15.2/bootstrap.zip
unzip bootstrap.zip
cd bootstrap
mkdir ~/.raptoreumcore && touch ~/.raptoreumcore/raptoreum.conf
cp -R blocks chainstate evodb llmq ~/.raptoreumcore
~/rtm_latest/./raptoreumd --daemon
echo all done!
```

:::tip Info

You should see Raptoreumd server starting. You can confirm it is running <code>top -c</code> it will be using 100% CPU (1 core). This shows you it is working, we will return to it later.

:::

## Local Wallet Setup

:::note

This part of the guide is to get your local wallet or control wallet setup. If you already have Raptoreum core wallet running you can skip to next section.

:::

### 1. Install and Sync Local Wallet:

:::info

Grab latest Raptoreum wallet at `https://raptoreum.com/latest`

:::


Create new directory:

```bash
Windows - C:\Users\user\AppData\Roaming\RaptoreumCore
Linux / MAC - ~/.raptoreumcore
```

Grab bootstrap from github release and unpack in the above directory (highly recommended as reduces sync time drastically)

:::note

If you already have a Raptoreum wallet remove the following folders before using the bootstrap (make sure wallet is closed before using bootstrap)
blocks
chainstate
evodb
llmq
To use the bootstrap <code>right click > unzip</code>. Copy contents to the new directory you created above.

:::

- Start wallet and let it finish syncing.
- Encrypt wallet (Settings > Encrypt Wallet)
- Create new receiving address
- Backup wallet.dat (File > Backup Wallet). Store in multiple locations.
- Dump private key for receiving address (this should be printed and stored offline in multiple locations):

```
walletpassphrase password time (in seconds)
dumpprivkey "address" (address is the receiving address you sent the 1 million RTM to)
```

- Send 1 million RTM to self (this is current collateral amount)
- Wait for 2 confirmations

:::note 

The private key only allows you to restore the matching receiving address. If you setup multiple nodes you should dump the private key for each collateral receiving address.

:::


### 2. Build protx command for control wallet

Here is an example protx quick_setup command:

```bash
protx quick_setup "c4bbcde9771668fa640c263d4b964f688b0f039f7b684e715d92e4012369fea6" "1" "194.113.73.87:10226" "RFbWv94ZfueciwVVpHLMdqFayaXAS4sBxP"
```

The structure from left to right is:

- <code>Transaction ID</code>: In your wallet go to "Transactions" right click the one you sent yourself earlier and "Copy Transaction ID". Replace the Transaction ID in example.
- <code>Collateral index</code>: Tools > Debug console. Type smartnode outputs to check if 1 or 0. Adjust example command if needed.
- <code>Your smartnode server IP and port</code>. Replace example IP with your Smartnode server IP, leave port as is.
- <code>Fee address</code>: This is any address in your wallet which contains enough RTM to pay the fee (cannot be the address which you sent the 1 million RTM to). When you enter the protx quick_setup command it is a transaction and needs to be paid for. It is a very small amount 1/2 an RTM is more than enough. In Debug console do "listaddressbalances" to show all addresses with a balance, choose one and replace address in example command.

:::info

Enter the protx quick_setup command in Debug console. This will create a .conf file for that node in the same directory you ran the wallet from. Open it and copy the contents. <u>[See this part in the video guide.](https://youtu.be/55ot-iT2GFc?t=1196)</u>

:::

Back to the smartnode server:

```bash
~./raptoreum-cli stop
nano ~/.raptoreumcore/raptoreum.conf
```

Paste in what you copied from the .conf file made during the protx command, save and exit.

Start raptoreumd:

```bash
~/./raptoreumd
```

Wait two minues and do:

```bash
~/./raptoreum-cli smartnode status
```
This should return: <code>Ready Ready</code>


<div class="alert alert--success" role="alert">
  <b>Your Smartnode should now be running!</b>
</div>