---
title : Linux
---

## NTP
```
# chrony
server time.neusoft.com iburst minpoll 8 maxpoll 14
```

## Compile Kernel
```shell
cp /boot/config-xxx .config
make oldconfig
make menuconfig
make EXTRAVERSION=-mock -j$(nproc)
sudo make modules_install
sudo make install
# ???
sudo update-grub
```

## [Compile kernel module](https://wiki.archlinux.org/index.php/Compile_kernel_module)
## [Are message queues obsolete in linux?](https://stackoverflow.com/questions/967335/are-message-queues-obsolete-in-linux)

## Dummy HCD
 * [https://blog.gimx.fr/dummy_hcd/](https://blog.gimx.fr/dummy_hcd/)

## Open Source Library
### IPC
 * ZeroMQ
