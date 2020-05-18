## https://linuxhint.com/pxe_boot_ubuntu_server/

```
apt-get install syslinux pxelinux nfs-kernel-server
```

### /etc/exports
```
# the magic => fsid=0,crossmnt
/srv/nfs 10.1.43.0/24(ro,async,nohide,no_root_squash,insecure,no_subtree_check,fsid=0,crossmnt)
```

```
mkdir -p /srv/tftp/pxelinux.cfg
cp -v /usr/lib/PXELINUX/pxelinux.0 /srv/tftp/
cp -v /usr/lib/syslinux/modules/bios/{ldlinux.c32,libcom32.c32,libutil.c32,vesamenu.c32} /srv/tftp/
```
