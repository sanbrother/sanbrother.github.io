## https://linuxhint.com/pxe_boot_ubuntu_server/

```
apt-get install syslinux pxelinux nfs-kernel-server
```

```
mkdir -p /srv/tftp/pxelinux.cfg
cp -v /usr/lib/PXELINUX/pxelinux.0 /srv/tftp/
cp -v /usr/lib/syslinux/modules/bios/{ldlinux.c32,libcom32.c32,libutil.c32,vesamenu.c32} /srv/tftp/
```

### pxelinux.cfg/default
```
default vesamenu.c32

label install
menu label ^Install Ubuntu 20.04 LTS Desktop
menu default
kernel ubuntu/20.04/casper/vmlinuz
append initrd=ubuntu/20.04/casper/initrd boot=casper netboot=nfs nfsroot=10.1.43.235:/srv/nfs/ubuntu/20.04/ ip=dhcp fsck.mode=skip splash ---
```

### /etc/exports
```
# the magic => fsid=0,crossmnt
/srv/nfs 10.1.43.0/24(ro,async,nohide,no_root_squash,insecure,no_subtree_check,fsid=0,crossmnt)
```
