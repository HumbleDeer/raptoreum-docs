---
sidebar_position: 6
---

# Mining Pool Setup

:::note

- Pool files are released as is with no guarantees and we do not provide support for anybody using them.
- Running a pool is tough and requires some systems administration skills.
- Yiimp based pool files are here: <u>https://github.com/npq7721/gr_pool</u>

:::

:::tip Thankyou

Thank you to the <u>[Zel Labs](https://zellabs.net/)</u> team for the original NOMP based Raptoreum stratum code.

:::

## Procedures:

### 1. Begin Pool Setup

Add a sudo user

```bash
adduser raptor
```

Add user to sudo group

```bash
sudo usermod -aG sudo raptor
```
Switch to user

```bash
su - raptor
```
Run system update

```bash
sudo apt update -y
sudo apt upgrade -y
sudo reboot
```

Get raptoreumd and get it syncing while we do the rest of the setup:

```bash
wget https://github.com/Raptor3um/Raptoreum/releases/download/1.0.15.1/raptoreum-1.0.15.1-x86_64-linux-gnu.tar.xz
tar -xvf raptoreum-1.0.15.1-x86_64-linux-gnu.tar.xz
mv raptoreum-1.0.15.1-x86_64-linux-gnu raptoreum_live
```

Create raptoreum data directory and .conf file

```bash
mkdir ~/.raptoreumcore
nano ~/.raptoreumcore/raptoreum.conf
```
Add these lines changing the user and password:

```bash
rpcuser=rapture
rpcpassword=ehu489fkndc
rpcallowip=127.0.0.1
rpcport=8777
daemon=1
listen=1
```
Start up raptoreumd:

```bash
~/raptoreum_live/./raptoreumd
```

Get the pool:

```bash
wget https://raptoreum.com/rtm_easynomp.tar.gz && tar xzvf rtm_easynomp.tar.gz
```

### 2. Install Redis

apt repo is usually far behind the latest stable version of Redis so we will compile from source as well as do a little tweaking.

```bash
sudo apt install build-essential tcl pkg-config -y
curl -O http://download.redis.io/redis-stable.tar.gz
tar xzvf redis-stable.tar.gz
cd redis-stable
make -j2
```

:::note

-j2 tells make how many cpu cores to use, default is 1 and it is slow, change it as needed depending on your available cores. Not sure how many cores? Do:

:::

```bash
lscpu | grep 'CPU(s):'
make -j2 test
make install
sudo mkdir /etc/redis
sudo cp redis.conf /etc/redis
nano /etc/redis/redis.conf
```

Change `supervised no` to `supervised systemd`

Change `dir ./` to `dir /var/lib/redis`

Create systemd file

```bash
sudo nano /etc/systemd/system/redis.service
```
add the following:

```bash
[Unit]
Description=Redis In-Memory Data Store
After=network.target

[Service]
User=redis
Group=redis
ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf
ExecStop=/usr/local/bin/redis-cli shutdown
Restart=always

[Install]
WantedBy=multi-user.target
```
Create a system user and group for redis user:

```bash
sudo adduser --system --group --no-create-home redis
sudo mkdir /var/lib/redis
sudo chown redis:redis /var/lib/redis
sudo chmod 770 /var/lib/redis
```
Start Redis

```bash
sudo systemctl start redis
```

Check Redis Status:

```bash
sudo systemctl status redis
```

If status is good, enable redis so it automatically starts on a reboot:

```bash
sudo systemctl enable redis
```
### 3. Tweaking Redis

Switch to root user

```bash
sudo su
```

Run command

```bash
sudo echo 1024 > /proc/sys/net/core/somaxconn
```

:::note

The return should be just an empty line as if you had just hit enter. If so do the following:

:::

```bash
nano /etc/sysctl.conf
```

Add these lines exit and save:

```bash
#Redis tweak
net.core.somaxconn=65535
vm.overcommit_memory=1
```

While we are root lets make a swap file of 2GB size:

```bash
dd if=/dev/zero of=/swapfile bs=2048 count=1048576
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
nano /etc/fstab
```

Add this:

```bash
/swapfile swap swap defaults 0 0
```

**Reboot the server.**

### 4. Install dependencies

Install node, npm, and pm2

```bash
curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify nodejs version:

```bash
node --v
```

This will also have installed npm. Now install PM2:

```bash
sudo npm i -g pm2
```

### 5. Quick Pool Configuration

Create config file:

```bash
cp config_example.json config.json
```
:::note

Edit pool_configs/raptoreum.json as needed, make sure user and password matches what you have in <code>~/.raptoreumcore/raptoreum.conf</code>.

:::

Install certbot and set good paths to certs in config.json:

Make sure you have the a-record / sub-domain you will be using pointed at the pool server IP. If using cloudflare make sure the connection is not proxied yet (orange cloud > white in DNS).

Install dependencies and certbot:

```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt update -y
sudo apt upgrade -y
sudo apt install certbot -y
```

Before we go any further lets make sure we have UFW installed / enabled and setup correctly. I will assume here that ufw is not installed:

```bash
sudo apt install ufw -y
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw allow 3008/tcp
sudo ufw allow 19979/tcp
sudo ufw enable
```

Run certbot:

```bash
sudo certbot certonly --standalone -d your.pooldomain.here
```

Copy the paths to your shiny new certs, mine in this guide looked like:

```bash
/etc/letsencrypt/live/dpool.raptoreum.com/privkey.pem
/etc/letsencrypt/live/dpool.raptoreum.com/fullchain.pem
```
:::note

Update the existing paths in config.json to match these.

:::

Start pool from inside EasyNOMP directory:

```bash
sudo pm2 start init.js --name "pool"
```

Confirm it started

```bash
sudo pm2 list
```

:::info

If you really don't want to run it as root there are ways around it but I am not going to cover them here. Easiest might be to change the https/http port to unprivledged ports (above 1023) and then proxy with nginx to the normal 443/80.

:::

### 6. Secure SSH With Fail2Ban

Install

```bash
apt install fail2ban -y
```

Configure

```bash
nano /etc/fail2ban/jail.local
```

Add the following

```bash
[sshd]
enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```

Restart Fail2ban:

```bash
systemctl restart fail2ban
```