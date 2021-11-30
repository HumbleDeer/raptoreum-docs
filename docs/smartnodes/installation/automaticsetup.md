---
sidebar_position: 3
---
import ReactPlayer from 'react-player'

# Automatic Setup


Discord community member dk808 (415959001302433802) has created a great Smartnode script which takes care of all the setup on the Smartnode side, it also creates a script that allows you to update binaries when needed. 

<sub>Video Guide - credit @dk808</sub>
<ReactPlayer playing controls url='https://www.youtube.com/watch?v=2jj3-8cRo8o' muted={true} playing={false} className="padding-bottom--md" />


:::note

- If you decide to use his script you should first construct and run the protx quick_setup command that is covered in this guide as the script needs the **BLS PrivKey(operatorSecret)** that is given when running the command.


- You must now OPT in for using the bootstrap as syncing with chain now takes long enough that setup is complete before syncing is complete resulting in a PoSe ban.

:::

1. Login to your Smartnode server VIA ssh, create sudo user, and change to that user:

```bash
adduser <username>
usermod -aG sudo <username>
su - <username>
```

2. Grab/run script

```bash
bash <(curl -s https://raw.githubusercontent.com/dk808/Raptoreum_Smartnode/main/install.sh)
```
:::caution Info

dk808 maintains a bootstrap of the chain. While I personally trust dk808 it should be mentioned that the bootstrap is not an official source or verified by Raptoreum.

Script source: <u>[https://github.com/dk808/Raptoreum_SmartNode](https://github.com/dk808/Raptoreum_SmartNode)</u>

Thank you dk808 for this great contribution!

:::

