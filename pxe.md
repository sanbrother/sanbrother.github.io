```
apt-get install syslinux pxelinux
cp -v /usr/lib/PXELINUX/pxelinux.0 /netboot/tftp/
cp -v /usr/lib/syslinux/modules/bios/{ldlinux.c32,libcom32.c32,libutil.c32,vesamenu.c32} /netboot/tftp
```
