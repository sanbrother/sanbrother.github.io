## https://linuxhint.com/pxe_boot_ubuntu_server/

```
apt-get install syslinux pxelinux

mkdir -p /srv/tftp/pxelinux.cfg
cp -v /usr/lib/PXELINUX/pxelinux.0 /srv/tftp/
cp -v /usr/lib/syslinux/modules/bios/{ldlinux.c32,libcom32.c32,libutil.c32,vesamenu.c32} /srv/tftp/
```
