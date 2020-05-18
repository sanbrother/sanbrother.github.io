## https://linuxhint.com/pxe_boot_ubuntu_server/

```
apt-get install syslinux pxelinux nfs-kernel-server
```

### /etc/exports
```
/srv/nfs *(ro,sync,no_wdelay,insecure_locks,no_root_squash,insecure,no_subtree_check)
```

```
mkdir -p /srv/tftp/pxelinux.cfg
cp -v /usr/lib/PXELINUX/pxelinux.0 /srv/tftp/
cp -v /usr/lib/syslinux/modules/bios/{ldlinux.c32,libcom32.c32,libutil.c32,vesamenu.c32} /srv/tftp/
```
