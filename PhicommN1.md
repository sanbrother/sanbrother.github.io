* [斐讯N1探索手记#2 – 使用ddbr恢复官改系统](https://luotianyi.vc/1346.html)
* [Pi-hole® Network-wide Ad Blocking](https://pi-hole.net/)
* [斐讯 N1 降级刷 Armbian，安装 OMV 作为家用小型 NAS 折腾记录](https://www.shephe.com/2019/07/phicomm-n1-armbian-omv-nas/)
* [Amlogic wiki ! (S802 S805 S812 S905 S905X s912)](https://github.com/150balbes/Amlogic_s905/wiki)
* [斐讯N1刷armbian](https://blog.csdn.net/chy555chy/article/details/86064226)
* [斐讯N1安装Armbian](https://unixetc.com/post/phicomm-n1-install-armbian/)
* [斐讯N1折腾记：运行 Linux 及优化](https://www.mivm.cn/phicomm-n1-linux/)
* [固件](https://yadi.sk/d/srrtn6kpnsKz2)
* [斐讯N1拆机 芯片拆解](https://www.acwifi.net/4312.html)
* [Setting up HLS live streaming server using NGINX + nginx-rtmp-module on Ubuntu](https://docs.peer5.com/guides/setting-up-hls-live-streaming-server-using-nginx/)

## Amlogic codenames for reference designs in P SDK
```
ampere – S905X
braun – S905D
curie – S805X
darwin – T962E
einstein – T962X
franklin – S905X2
galilei – A311D
```

## Aria2 (RPC)
```
##files
dir=/srv/dev-disk-by-label-EXT_HDD/ROOT/Downloads
file-allocation=falloc
continue=true
daemon=true
disk-cache=32M

##logging
log=/opt/aria2/aria2.log
console-log-level=warn
log-level=notice

##downloads
max-concurrent-downloads=5
max-connection-per-server=5
min-split-size=20M
split=4
disable-ipv6=true

##sessions
force-save=true
input-file=/opt/aria2/aria2.session
save-session=/opt/aria2/aria2.session
save-session-interval=10

##security
http-auth-challenge=true
check-certificate=false
enable-rpc=true
rpc-listen-all=true
rpc-secret=44a70bf2-token93c6-96359e3e53ee

#rpc-secure=true	
#rpc-allow-origin-all=true
#rpc-certificate=/user/aria2/cet/aria2.pfx

##ports
rpc-listen-port=6800

##others
summary-interval=120
enable-dht=true

##times
timeout=600
retry-wait=30
max-tries=50
```

## Install OMV
```
### full tutorial : https://openmediavault.readthedocs.io/en/stable/installation/on_debian.html

# wget -O - http://packages.openmediavault.org/public/archive.key | apt-key add -
apt-get update
apt-get install --yes apt-transport-https

# cat <<EOF >> /etc/apt/sources.list.d/omv-extras-org.list
# deb https://dl.bintray.com/openmediavault-plugin-developers/arrakis stretch main
# EOF
# wget https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/openmediavault-omvextrasorg_latest_all4.deb
# and then install

cat <<EOF >> /etc/apt/sources.list.d/openmediavault.list
deb https://packages.openmediavault.org/public arrakis main
# deb https://downloads.sourceforge.net/project/openmediavault/packages arrakis main
## Uncomment the following line to add software from the proposed repository.
# deb https://packages.openmediavault.org/public arrakis-proposed main
# deb https://downloads.sourceforge.net/project/openmediavault/packages arrakis-proposed main
## This software is not part of OpenMediaVault, but is offered by third-party
## developers as a service to OpenMediaVault users.
# deb https://packages.openmediavault.org/public arrakis partner
# deb https://downloads.sourceforge.net/project/openmediavault/packages arrakis partner
EOF

apt-get --allow-unauthenticated install openmediavault-keyring
apt-get update

apt-get -y install ntp
apt-get -y install openmediavault

omv-initsystem

# install OMV extras
wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash
```

## Install pi-hole
```
apt-get install proxychains
git clone --depth 1 https://github.com/pi-hole/pi-hole.git Pi-hole
cd "Pi-hole/automated install/"
# vi basic-install.sh
proxychains bash basic-install.sh
apt-get install lighttpd
```

## easylist china
```
#!/bin/bash

curl -s -L https://easylist-downloads.adblockplus.org/easylistchina.txt > adblock.unsorted
sort -u adblock.unsorted | grep ^\|\|.*\^$ | grep -v \/ > adblock.sorted
sed 's/[\|^]//g' < adblock.sorted > adblock.hosts
rm adblock.unsorted adblock.sorted
```

```bash
# https://unix.stackexchange.com/questions/258074/error-when-trying-to-connect-to-bluetooth-speaker-org-bluez-error-failed
apt install pulseaudio-module-bluetooth

# TBD
pulseaudio -k
pulseaudio --start
```



```
https://basecloud.phicomm.com/ota/download/phicommApk/2018-05-17/PhiDDW-2.1.3020.0-1TTL-release.apk
```

### qemu
```
qemu-system-aarch64 -M virt -m 256 -cpu cortex-a53 \
	-kernel /mnt/p1/vmlinuz-5.4.1-aml-g12 \
	-initrd /mnt/p1/initrd.img-5.4.1-aml-g12 \
	-nographic
```

### Change boot logo
```
aml-imgpack.py --pack logo-modified.img upgrade_logo.bmp upgrade_upgrading.bmp upgrade_unfocus.bmp upgrade_error.bmp upgrade_bar.bmp upgrade_success.bmp bootup.bmp upgrade_fail.bmp
dd if=/dev/mmcblk1 bs=1M skip=644 of=logo-original.img count=10
dd if=logo-modified.img bs=1M seek=644 of=/dev/mmcblk1
```

### Phicomm N1 hardware specifications:

- SoC – Amlogic S905D quad core Arm Cortex-A53 processor @ 1.5 GHz with Arm Mali-450 GPU
- System Memory – 2GB DDR3-1866MHz
- Storage – 8GB eMMC flash ([KLM8G1GEME](https://www.cnx-software.com/2016/10/31/samsung-emmc-and-ufs-2-0-embedded-flash-chips-and-performance-in-2016/))
- Video Output – 1x HDMI 2.0a port up to 4K @ 60 Hz
- Connectivity – 1x Gigabit Ethernet (RTL8211F), Dual band 802.11ac WiFi 5, and Bluetooth 4.1 (Via a similar CYW43455 module as used in Raspberry Pi 3B+)
- USB – 2x USB 2.0 ports
- Power Supply – 110-240V – 50/60Hz AC input, 12V/2A DC output
- Dimensions – 11 x 11 x 4 cm

### Phicomm N1 (P230)
 * CPU: Amlogic S905(D?) Cortex-A53 Quad Core 1.5Ghz
   * P230
   * G12
 * RAM: 2G DDR3
 * 8G eMMC
 * Ethernet: RTL8211F Gigabit Ethernet
 * WIFI/Bluetooth: ? CYW43455 ( same as Raspberry Pi 3B+ ) 5G WiFi IEEE 802.11n/ac with Integrated Bluetooth 4.1

### lsmod
```
adc_keys               16384  0
ao_cec                 20480  0
bluetooth             557056  8 btrtl,btqca,btsdio,btintel,hci_uart,btbcm
brcmfmac              327680  0
brcmutil               16384  1 brcmfmac
btbcm                  16384  1 hci_uart
btintel                28672  1 hci_uart
btqca                  20480  1 hci_uart
btrtl                  24576  1 hci_uart
btsdio                 20480  0
cfg80211              376832  1 brcmfmac
crc_ccitt              16384  1 ipv6
crct10dif_ce           16384  1
dw_hdmi_cec            16384  0
ecc                    32768  1 ecdh_generic
ecdh_generic           16384  1 bluetooth
gpu_sched              28672  1 lima
hci_uart              135168  0
input_polldev          20480  1 adc_keys
ip_tables              32768  0
ipv6                  516096  42
ir_nec_decoder         20480  0
lima                   40960  0
meson_ir               16384  0
Module                  Size  Used by
nf_defrag_ipv6         24576  1 ipv6
rfkill                 28672  5 bluetooth,cfg80211
snd_soc_meson_aiu_i2s    16384  1
snd_soc_meson_aiu_spdif    16384  0
snd_soc_meson_audio_core    16384  0
x_tables               40960  1 ip_tables
zram                   32768  2
zstd                   16384  4
```

### lshw

```
aml
    description: Computer
    product: Phicomm N1
    width: 64 bits
    capabilities: smp cp15_barrier setend swp
  *-core
       description: Motherboard
       physical id: 0
     *-cpu:0
          description: CPU
          product: cpu
          physical id: 0
          bus info: cpu@0
          size: 1512MHz
          capacity: 1512MHz
          capabilities: fp asimd evtstrm aes pmull sha1 sha2 crc32 cpuid cpufreq
     *-cpu:1
          description: CPU
          product: cpu
          physical id: 1
          bus info: cpu@1
          size: 1512MHz
          capacity: 1512MHz
          capabilities: fp asimd evtstrm aes pmull sha1 sha2 crc32 cpuid cpufreq
     *-cpu:2
          description: CPU
          product: cpu
          physical id: 2
          bus info: cpu@2
          size: 1512MHz
          capacity: 1512MHz
          capabilities: fp asimd evtstrm aes pmull sha1 sha2 crc32 cpuid cpufreq
     *-cpu:3
          description: CPU
          product: cpu
          physical id: 3
          bus info: cpu@3
          size: 1512MHz
          capacity: 1512MHz
          capabilities: fp asimd evtstrm aes pmull sha1 sha2 crc32 cpuid cpufreq
     *-cpu:4 DISABLED
          description: CPU
          product: l2-cache0
          physical id: 4
          bus info: cpu@4
     *-memory
          description: System memory
          physical id: 5
          size: 1802MiB
  *-usbhost:0
       product: xHCI Host Controller
       vendor: Linux 5.3.0-aml-g12 xhci-hcd
       physical id: 1
       bus info: usb@1
       logical name: usb1
       version: 5.03
       capabilities: usb-2.00
       configuration: driver=hub slots=2 speed=480Mbit/s
  *-usbhost:1
       product: xHCI Host Controller
       vendor: Linux 5.3.0-aml-g12 xhci-hcd
       physical id: 2
       bus info: usb@2
       logical name: usb2
       version: 5.03
       capabilities: usb-3.00
       configuration: speed=5000Mbit/s
  *-network:0
       description: Ethernet interface
       physical id: 3
       logical name: eth0
       serial: fc:7c:02:87:53:13
       capacity: 1Gbit/s
       capabilities: ethernet physical tp mii 10bt 10bt-fd 100bt 100bt-fd 1000bt 1000bt-fd autonegotiation
       configuration: autonegotiation=on broadcast=yes driver=st_gmac driverversion=Jan_2016 link=no multicast=yes port=MII
  *-network:1
       description: Wireless interface
       physical id: 4
       logical name: wlan0
       serial: b8:27:eb:74:f2:6c
       capabilities: ethernet physical wireless
       configuration: broadcast=yes driver=brcmfmac driverversion=7.45.154 firmware=01-4fbe0b04 ip=192.168.8.235 multicast=yes wireless=IEEE 802.11
```

