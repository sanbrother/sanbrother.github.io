## Armbian packages
[armbian20.10安装](https://www.jianshu.com/p/bcb4777023bc)
[https://users.armbian.com/balbes150/arm-64/](https://users.armbian.com/balbes150/arm-64/)

---
title: Phicomm N1 Armbian firmware compilation
---

### 选择Armbian的分支

Armbian官方似乎没有对N1的直接支持，网友[150balbes](https://github.com/150balbes/)在官方的基础上，制作出了build环境及S905的Kernel。

### Static IP

```bash
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug eno1
iface eno1 inet static
        address 10.1.43.56/24
        gateway 10.1.43.1
        # dns-* options are implemented by the resolvconf package, if installed
        dns-nameservers 210.83.210.155
```



### 安装额外的Package

```bash
mkdir -p ~/Build-Armbian/userpatches/
### cat > ~/Build-Armbian/userpatches/lib.config <<-EOF
cat > ~/Build-Armbian/userpatches/lib.config << 'EOF'
PACKAGE_LIST_ADDITIONAL="$PACKAGE_LIST_ADDITIONAL dosfstools armbian-config" # additional packages
EOF
```

```
./compile.sh BOARD=aml-g12 BRANCH=current RELEASE=buster BUILD_MINIMAL=no BUILD_DESKTOP=no KERNEL_ONLY=no KERNEL_CONFIGURE=no
./compile.sh BOARD=aml-s9xxx BRANCH=legacy RELEASE=stretch BUILD_MINIMAL=no BUILD_DESKTOP=no KERNEL_ONLY=no KERNEL_CONFIGURE=no COMPRESS_OUTPUTIMAGE=sha,gpg,gz
```

### Install Jenkins
```
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

