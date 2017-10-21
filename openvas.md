---
title : OpenVAS
---

```
apt-get install openvas

# vi /lib/systemd/system/greenbone-security-assistant.service, and change 
ExecStart=/usr/sbin/gsad --foreground --listen=127.0.0.1 --port=9392 --mlisten=127.0.0.1 --mport=9390
to
ExecStart=/usr/sbin/gsad --foreground --listen=127.0.0.1 --port=9392 --mlisten=127.0.0.1 --mport=9390 --no-redirect

greenbone-certdata-sync
greenbone-nvt-sync
greenbone-scapdata-sync

greenbone-scapdata-sync --refresh

openvas-start

# list open ports by daemons?
netstat -tulpn
```

## Install on Ubuntu
 * https://launchpad.net/~mrazavi/+archive/ubuntu/openvas

```
export http_proxy=http://x.x.x.x:xx
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3C453D244AA450E0
proxychains add-apt-repository ppa:mrazavi/openvas

apt-get install openvas9

greenbone-nvt-sync && proxychains greenbone-scapdata-sync && proxychains greenbone-certdata-sync

sudo service openvas-scanner restart
sudo service openvas-manager restart
sudo openvasmd --migrate #only required when upgrading from an older version
sudo openvasmd --rebuild --progress
```
