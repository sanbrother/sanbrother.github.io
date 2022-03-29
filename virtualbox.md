https://www.virtualbox.org/manual/ch09.html

```bash
VBoxManage internalcommands createrawvmdk -filename ssk.vmdk -rawdisk /dev/sdd
sudo usermod -a -G disk $USER
```

```
VBoxManage setextradata "VM name" "VBoxInternal/Devices/pcbios/0/Config/DmiSystemVendor"      "Compaq"
VBoxManage setextradata "VM name" "VBoxInternal/Devices/pcbios/0/Config/DmiSystemProduct"     "Thingamajig"

sudo VBoxManage extpack install Oracle_VM_VirtualBox_Extension_Pack-6.1.32.vbox-extpack
```

