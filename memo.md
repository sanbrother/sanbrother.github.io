---
title: Memo
---

## Running a program as a new window through SSH:
```
DISPLAY=:0.0 {program name}
```

## Win10 store proxy
```
# set
netsh winhttp import proxy source=ie
# show
netsh winhttp show proxy
# clear
netsh winhttp reset proxy
```

## Markdown Editors
 * Typora
 * Notable

## Linux: How to find the device driver used for a device?
```
$ sudo lspci
...
02:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet controller (rev 01)
$ find /sys | grep drivers.*02:00
/sys/bus/pci/drivers/r8169/0000:02:00.0
# That is r8169.
```

## rsync
```
rsync --recursive --times --links --hard-links --delete
rsync --no-perms --no-owner --no-group --no-times
```

## VirtualBox VDI convert
```
# VBoxManage convertfromraw /dev/sda virtual.vdi --format VDI
# VBoxManage modifyhd --compact "[drive]:\[path_to_image_file]\[name_of_image_file].vdi"
VBoxManage internalcommands createrawvmdk -filename physical.vmdk -rawdisk /dev/sdX
VBoxManage clonemedium --existing virtual.vdi physical.vmdk
```

## VirtualBox 的命令行启动/关闭方法简介
 * 查看虚拟机+有几台：VBoxManage list vms 
 * 查看虚拟机+正在运行中的：VBoxManage list runningvms
 * 启动虚拟机+图形：VBoxManage startvm "Ubuntu 9.10"
 * 启动虚拟机+图形+使用VRDP方式：VBoxManage startvm dcsvr08 -type vrdp
 * 启动虚拟机+无图形：VBoxHeadless -startvm "dcsvr08"
 * 关闭虚拟机：VBoxManage controlvm dcsvr08 poweroff  
 （后面的参数：pause resume reset poweroff savestate acpipowerbutton acpisleepbutton）

## Allow SSH through firewall
```
iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

## keep your OpenSSH session alive
```
# /etc/ssh/sshd_config
ClientAliveInterval 60

sudo systemctl restart ssh
```

## LVM Volume Group
```
vgchange -ay
```

## Build kernel
```
cp /boot/config-`uname -r` .config
# OR #
make menuconfig / oldconfig

make
sudo make modules_install install
update-initramfs -u

# ??? Necessary ???
## sudo update-grub2
```
[Reference](https://kernelnewbies.org/KernelBuild)

## install packages
```
apt-get install --no-install-recommends zlib1g-dev libpng12-dev libfreetype6-dev libjpeg62-dev libinotifytools0-dev libssl-dev libxml2-dev libslp-dev libecpg-dev libiksemel-dev libx11-dev libxt-dev libxmu-dev libxpm-dev libperl-dev libgl1-mesa-dev libglib2.0-dev libxtst-dev libanthy-dev
```

## getopt.sh
```
#!/bin/bash

usage_exit() {
        echo "Usage: $0 [-a] [-d dir] item ..." 1>&2
        exit 1
}

while getopts ad:h OPT
do
    case $OPT in
        a)  FLAG_A=1
            ;;
        d)  VALUE_D=$OPTARG
            ;;
        h)  usage_exit
            ;;
        \?) usage_exit
            ;;
    esac
done

shift $((OPTIND - 1))
```
[Reference](https://qiita.com/b4b4r07/items/dcd6be0bb9c9185475bb)

## Gitlab CE installation
```
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```
[Reference](https://packages.gitlab.com/gitlab/gitlab-ce/install)

## 搭建chroot环境
```
apt-get install debian-archive-keyring
debootstrap --arch=amd64 wheezy /wheezy http://ftp.cn.debian.org/debian/ 
```

## How to include local header files in linux kernel module
```
EXTRA_CFLAGS := -I$(src)/src/inc
```
[Reference](https://unix.stackexchange.com/questions/18143/how-to-include-local-header-files-in-linux-kernel-module)

## Compile a new kernel
```
# The file include/generated/autoconf.h is generated in the make prepare step. If you are trying to build a kernel module, you will also need the make scripts step:

gunzip < /proc/config.gz > .config

# It reads the existing .config file and prompts the user for options in the current kernel source that are not found in the file. This is useful when taking an existing configuration and moving it to a new kernel.
make oldconfig

make prepare
make scripts
```

## Hide Apache information with ServerTokens and ServerSignature directives

```
ServerTokens ProductOnly
ServerSignature Off
```

[Reference](https://www.virendrachandak.com/techtalk/how-to-hide-apache-information-with-servertokens-and-serversignature-directives/)

## ProFTPD Security

```
ServerIdent On "Welcome to my FTP"
ServerIdent Off
```

[Reference](http://www.proftpd.org/docs/faq/linked/faq-ch6.html)

## VirtualBox + DirectFB
### #1
```
apt-get install linux-headers-`uname -r`
```

## 使用非常老的Debian的apt source
```
gpg --recv-key B5D0C804ADB11277 && gpg -a --export B5D0C804ADB11277 | apt-key add -

# /etc/apt/source.list
deb http://archive.debian.org/debian/ etch main non-free contrib
deb-src http://archive.debian.org/debian/ etch main non-free contrib

deb http://archive.debian.org/debian-security/ etch/updates main non-free contrib
deb-src http://archive.debian.org/debian-security/ etch/updates main non-free contrib

# GPG key expired ...
date --set 2008-01-01

apt-get update
```

## Useful Commands

```
# Bash: Display each sub-directory size in a list format using 1 line command
du -hs * | sort -hr

# 自动生成编译配置文件？
autoreconf -fi

# 设置时间
date --set 1998-11-02 
date --set 21:08:00

# 设置时区
dpkg-reconfigure tzdata

# 把用户添加到特定的Group
usermod -a -G groupname username

# 保存git密码
git config --global credential.helper store

#
git config --global user.name "sanbrother"
git config --global user.email "sanbrother@hotmail.com"

# Pull的时候不生成Merge记录
git config --global pull.rebase true

# Pull的时候不生成Merge记录 (.gitconfig)
[pull]
	rebase = true

# Gradle Proxy
gradlew.bat -Dhttp.proxyHost=10.1.43.235 -Dhttp.proxyPort=3128 -Dhttps.proxyHost=10.1.43.235 -Dhttps.proxyPort=3128 build

# find -exec \;
find . -name \*.php -type f -exec grep -Hn '$test' {} \;

# find -exec \+
find . -name \*.php -type f -exec grep -Hn '$test' {} \+

# screenshot
apt-get install imagemagick
xwd -root -display :0 | convert - jpg:- > screenshot.jpg

# 
convert imagein.tif -colorspace gray -colors 2 +dither -type bilevel imageout.tif
convert imagein.tif -monochrome -type bilevel imageout.tif

# screen record
ffmpeg -f x11grab -y -r 30 -s 1440x900 -i :0.0 -vcodec huffyuv out.avi

# cmake 32bit vs2017
cmake -G"Visual Studio 15 2017" ../../zlib
```

## Useful Websites
 * [How to Use SSH Tunneling to Access Restricted Servers and Browse Securely](https://www.howtogeek.com/168145/how-to-use-ssh-tunneling/)
 * [How to start a vnc server for the actual display (scraping) with TigerVNC
](https://www.howtoforge.com/tutorial/how-to-start-a-vnc-server-for-the-actual-display-scraping-with-tigervnc/)
 * [MobaXterm](https://mobaxterm.mobatek.net/)
 * [各种源代码、包含DirectFB](http://sources.buildroot.net/)
 * [Etcher : Burn images to SD cards & USB drives, safely and easily](https://etcher.io/)
 * [INTEL GRAPHICS UPDATE TOOL FOR LINUX* OS V2.0.6](https://01.org/linuxgraphics/downloads/intel-graphics-update-tool-linux-os-v2.0.6)
 * [Setting Raspberry Pi WIFI via command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
 * [Add linux slave node in the Jenkins](https://mohitgoyal.co/2017/02/14/add-linux-slave-node-in-the-jenkins/)
 * [How to Install JAVA 8 (JDK 8u45) on Linux Systems](https://www.tecmint.com/install-java-jdk-jre-in-linux/)
 * [25 Most Frequently Used Linux IPTables Rules Examples](http://www.thegeekstuff.com/2011/06/iptables-rules-examples/)
 * [How to Clean Install MacOS High Sierra](http://osxdaily.com/2017/10/02/clean-install-macos-high-sierra/)
 * [Automake : Hello World](https://www.gnu.org/software/automake/manual/html_node/Hello-World.html)
 * [在线尝试git命令](https://try.github.io/)
 * [Sed in place](https://robots.thoughtbot.com/sed-102-replace-in-place)
 * [ProGit中文版](http://git.oschina.net/progit/)
 * [网站风险检查](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)
 * [Diff Tools on Windows](https://www.git-tower.com/blog/posts/diff-tools-windows)
 * [Reduce APK size](https://medium.com/@kevalpatel2106/how-you-can-decrease-application-size-by-60-in-only-5-minutes-47eff3e7874e)
 * [7 Patch Command Examples to Apply Diff Patch Files in Linux](https://www.thegeekstuff.com/2014/12/patch-command-examples/)
 * [ImageMagick / Image转换Lib](http://www.imagemagick.org/script/index.php)
 * [Debian 9 LAMP Server Tutorial with Apache, PHP 7 and MariaDB
](https://www.howtoforge.com/tutorial/install-apache-with-php-and-mysql-lamp-on-debian-stretch/)
 * [vim: Unable to copy & paste in Debian Stretch Under Win10](https://unix.stackexchange.com/questions/341564/vim-unable-to-copy-paste-in-debian-stretch)
 * [Maven - 打包可执行jar包](https://www.jianshu.com/p/0d85d0539b1a)
 * [How To Install and Configure OpenLDAP and phpLDAPadmin on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-openldap-and-phpldapadmin-on-ubuntu-16-04)
 * [How to upgrade to latest Gitlab from version less then 10.8](https://medium.com/qunabu-interactive/how-to-upgrade-to-latest-gitlab-from-version-less-then-10-8-47a0b261edd1)
 * [“Aw Snap!” Crash Makes a Comeback in Chrome 79](https://www.bleepingcomputer.com/news/google/-aw-snap-crash-makes-a-comeback-in-chrome-79/)

 ## Regular expression
 ```
 echo (\$_SESSION\[[[:alnum:]']*\])
 
 # 包含特定的String、且不包含另一个特定的String
 ^.*(?!.*Backend).*sendReq.*$
 
 # 匹配注释
 [[:s:]]+?/\*.*\*/
 ```

