```
apt-get install syslinux pxelinux

mkdir -p /netboot/tftp/pxelinux.cfg
cp -v /usr/lib/PXELINUX/pxelinux.0 /srv/tftp/
cp -v /usr/lib/syslinux/modules/bios/{ldlinux.c32,libcom32.c32,libutil.c32,vesamenu.c32} /srv/tftp/
```
